import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';
import { Grid } from '@mui/material'

const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap: 15px
    padding-bottom:30px;
`
function getLowerSectionCoin(filteredCoins,coinList){
    return (filteredCoins && Object.keys(filteredCoins).slice(0,24)) || Object.keys(coinList).slice(0,24);
    
}
function getCoinsToDisplay(coinList,topSection,favorites,filteredCoins){
    return topSection ? favorites :getLowerSectionCoin(filteredCoins,coinList)
}
export default function ({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList,favorites,filteredCoins})=>(
                <Grid container spacing={4}>
                    {getCoinsToDisplay(coinList,topSection,favorites,filteredCoins).map(coinKey=>
                        <Grid item xs={2} key={coinKey}>
                            <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
                        </Grid>   
                    )}           
                </Grid>
            )}
        </AppContext.Consumer>
    )
}