import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    grid-gap: 15px
    padding-bottom:30px;

`
function getLowerSectionCoin(filteredCoin,coinList){
    return (filteredCoin && Object.keys(filteredCoin)) || Object.keys(coinList).slice(0,99);
    
}
function getCoinsToDisplay(coinList,topSection,favorites,filteredCoin){
    return topSection ? favorites :getLowerSectionCoin(filteredCoin,coinList)
}
export default function ({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList,favorites,filteredCoin})=>(
                <CoinGridStyle>
                    {getCoinsToDisplay(coinList,topSection,favorites,filteredCoin).map(coinKey=>
                        <CoinTile coinKey={coinKey} topSection={topSection} />
                    )}
                </CoinGridStyle>
            )}
        </AppContext.Consumer>
    )
}