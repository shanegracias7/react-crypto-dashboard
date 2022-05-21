import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
const MAX_FAVORITES=10;
const TIME_UNITS =10;

const cc = require('cryptocompare');

export const AppContext = React.createContext();
export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:'dashboard',
            firstVisit:false,
            favorites:['BTC','ETH','MATIC','DOGE','USDT'],
            ...this.savedSettings(),
            setPage : this.setPage,
            confirmFavorites:this.confirmFavorites,
            coinList:null,
            addCoin:this.addCoin,
            removeCoin:this.removeCoin,
            isInFavorites:this.isInFavorites,
            setFilteredCoin:this.setFilteredCoin,
            setCurrentFavorite:this.setCurrentFavorite
        }
    }
    componentDidMount = () =>{
        this.fetchCoins();
        this.fetchPrices();
        this.fetchHistorical();
    }
    setCurrentFavorite = sym => {
        this.setState({
            currentFavorite:sym,
            historical:null
        },this.fetchHistorical)
        localStorage.setItem('cryptoDash',JSON.stringify({...JSON.parse(localStorage.getItem('cryptoDash')),currentFavorite:sym}))
    }
    setFilteredCoin = filteredCoin => this.setState({filteredCoin})
    isInFavorites =key => _.includes(this.state.favorites,key)
    addCoin = key =>{
        let favorites = [...this.state.favorites]
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key)
            this.setState({favorites})
        }
    }
    removeCoin = key =>{
        let favorites = [...this.state.favorites]
        this.setState({favorites: _.pull(favorites,key)})
    }

    fetchCoins = async ()=>{
        let coinList = (await cc.coinList());
        this.setState({coinList:coinList.Data})
        console.log(coinList.Data)
    }
    fetchPrices=async()=>{
        if(this.state.firstVisit) return;
        let prices = await this.prices()
        //filter the empty price objects 
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices})
    }
    fetchHistorical = async () => {
        if (this.state.firstVisit) return;
        let results = await this.historical();
        let historical = [
          {
            name: this.state.currentFavorite,
            data: results.map((ticker, index) => [
              moment().subtract({[this.state.timeInterval]: TIME_UNITS - index}).valueOf(),
              ticker.USD
            ])
          }
        ]
        this.setState({historical});
      }
    historical=()=>{
        let promises =[]
        for(let units = TIME_UNITS; units>0; units--){
            promises.push(
                cc.priceHistorical(
                    this.state.currentFavorite,
                    ['USD'],
                    moment()
                        .subtract({months:units})
                        .toDate()
                )
            )
        }
        return Promise.all(promises)
    }
    prices  = async ()=>{
        let returnData =[]
        for(let i=0;i<this.state.favorites.length;i++){
            try{
                let priceData = await cc.priceFull(this.state.favorites[i],'USD');
                returnData.push(priceData)
            }
            catch(e){
                console.warn('fetch price error: '+e)
            }   
        }
        return returnData;
    }
    confirmFavorites=()=>{
        let currentFavorite = this.state.favorites[0]
        this.setState({
            page:'dashboard',
            firstVisit:false,
            currentFavorite,
            prices:null,
            historical:null
        },()=>{
            this.fetchPrices()
            this.fetchHistorical()
        })
        localStorage.setItem('cryptoDash',JSON.stringify({favorites:this.state.favorites,currentFavorite}))
    }

    
    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {
                page:'settings',
                firstVisit:true
            }
        }
        let {favorites,currentFavorite} = cryptoDashData
        return {favorites,currentFavorite}
        
        
    }
    setPage = page => this.setState({page})
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
