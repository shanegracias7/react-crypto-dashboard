import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 15px

`
function getCoinsToDisplay(coinList){
    return Object.keys(coinList).slice(0,100);
}
export default function (){
    return (
        <AppContext.Consumer>
            {({coinList})=>(
                <CoinGridStyle>
                    {getCoinsToDisplay(coinList).map(coinKey=>
                        <CoinTile coinKey={coinKey}/>
                    )}
                </CoinGridStyle>
            )}
        </AppContext.Consumer>
    )
}