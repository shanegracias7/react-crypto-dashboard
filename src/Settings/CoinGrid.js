import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from '../App/AppProvider';

const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);

`

export default function (){
    return (
        <AppContext.Consumer>
            {({coinList})=>(
                <CoinGridStyle>
                    {Object.keys(coinList).map(coinKey=>
                        <div>{coinKey}</div>
                    )}
                </CoinGridStyle>
            )}
        </AppContext.Consumer>
    )
}