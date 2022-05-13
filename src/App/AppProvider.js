import _ from 'lodash';
import React, { Component } from 'react';
const MAX_FAVORITES=10;

const cc = require('cryptocompare');

export const AppContext = React.createContext();
export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:'dashboard',
            firstVisit:false,
            favorites:['BTC'],
            ...this.savedSettings(),
            setPage : this.setPage,
            confirmFavorites:this.confirmFavorites,
            coinList:null,
            addCoin:this.addCoin,
            removeCoin:this.removeCoin,
            isInFavorites:this.isInFavorites,
            setFilteredCoin:this.setFilteredCoin
        }
    }
    componentDidMount = () =>{
        this.fetchCoins();
        this.fetchPrices();
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
        this.setState({
            page:'dashboard',
            firstVisit:false
        },()=>{this.fetchPrices()})
        localStorage.setItem('cryptoDash',JSON.stringify({favorites:this.state.favorites}))
    }

    
    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {
                page:'settings',
                firstVisit:true
            }
        }
        let {favorites} = cryptoDashData
        return {favorites}
        
        
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
