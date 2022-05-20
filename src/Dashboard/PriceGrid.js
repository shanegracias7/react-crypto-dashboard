import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'
import PriceTile from './PriceTile'

const PriceGridStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr); 
    grid-gap: 15px; 
    margin-top: 40px; 
`

export default function () {
  return (
    <AppContext.Consumer>
        {
            ({prices})=>(
                <PriceGridStyled>
                    {
                        prices.map((price,index) => (
                        <PriceTile price={price} key={index} index={index}/>)
                        )
                    }
                </PriceGridStyled>
            )
        }
    </AppContext.Consumer>
  )
}
