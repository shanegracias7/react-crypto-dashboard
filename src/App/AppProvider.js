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
            isInFavorites:this.isInFavorites
        }
    }
    componentDidMount = () =>{
        this.fetchCoins();
    }
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
    confirmFavorites=()=>{
        this.setState({
            page:'dashboard',
            firstVisit:false
        })
        localStorage.setItem('cryptoDash',JSON.stringify({test:'helllo'}))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {
                page:'settings',
                firstVisit:true
            }
        }
        return {}
        
        
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
