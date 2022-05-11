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
function getCoinsToDisplay(coinList,topSection,favorites){
    return topSection ? favorites :Object.keys(coinList).slice(0,99);
}
export default function ({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList,favorites})=>(
                <CoinGridStyle>
                    {getCoinsToDisplay(coinList,topSection,favorites).map(coinKey=>
                        <CoinTile coinKey={coinKey} topSection={topSection} />
                    )}
                </CoinGridStyle>
            )}
        </AppContext.Consumer>
    )
}