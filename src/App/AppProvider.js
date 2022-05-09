import React, { Component } from 'react';

const cc = require('cryptocompare');

export const AppContext = React.createContext();
export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:'dashboard',
            firstVisit:false,
            ...this.savedSettings(),
            setPage : this.setPage,
            confirmFavorites:this.confirmFavorites,
            coinList:null
        }
    }
    componentDidMount = () =>{
        this.fetchCoins();
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
