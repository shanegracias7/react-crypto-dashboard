import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'
import PriceTile from './PriceTile'
import { Grid } from '@mui/material'

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
            ({prices,coinList})=>(




                <Grid container columnSpacing={4}>
                    {
                        prices.map((price,index) => (
                            
                            <Grid item xs={3}>
                                <PriceTile price={price} key={index} index={index} coinList={coinList}/>
                            </Grid>
                        ))
                    }
                </Grid>




                

            )
        }
    </AppContext.Consumer>
  )
}
