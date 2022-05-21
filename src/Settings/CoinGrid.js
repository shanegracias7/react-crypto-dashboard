import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap: 15px
    padding-bottom:30px;
`
function getLowerSectionCoin(filteredCoins,coinList){
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0,99);
    
}
function getCoinsToDisplay(coinList,topSection,favorites,filteredCoins){
    return topSection ? favorites :getLowerSectionCoin(filteredCoins,coinList)
}
export default function ({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList,favorites,filteredCoins})=>(
                <CoinGridStyle>
                    {getCoinsToDisplay(coinList,topSection,favorites,filteredCoins).map(coinKey=>
                        <CoinTile key={coinKey} coinKey={coinKey} topSection={topSection} />
                    )}
                </CoinGridStyle>
            )}
        </AppContext.Consumer>
    )
}