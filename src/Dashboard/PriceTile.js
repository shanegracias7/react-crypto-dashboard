import React from 'react'
import styled ,{css} from 'styled-components'
import { SelectableTile } from '../Shared/Tile'
import { fontSizeBig,greenBoxShadow } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'
import { AppContext } from '../App/AppProvider'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader } from '@mui/material'

const PriceTileStyled = styled(SelectableTile)`
    ${
        props=>props.currentFavorite && css`
            ${greenBoxShadow}
            pointer-events:none;
        `
    }
`
const JustifyRight = styled.div`
    justify-self:right;
`
const TickerPrice = styled.div`
    ${fontSizeBig}
`
const PercentageChange = styled.div`
    color:green;
    ${props=>props.red && css`
    color:red;
    `}
`
const numberFormat = number =>{
    // converting int into string to slice it and the converte it back into number.
    return +(number+'').slice(0,7)
}

function ChangePercentage ({data}){
    return(
        <JustifyRight>
            <PercentageChange red={data.CHANGEPCT24HOUR<0}>
                {numberFormat(data.CHANGEPCT24HOUR)}%
            </PercentageChange>  
        </JustifyRight>
    )
}

function PriceTile({sym,data,currentFavorite,setCurrentFavorite,coin}){
    return(
        <PriceTileStyled currentFavorite={currentFavorite} onClick={setCurrentFavorite}>



        <Card sx={{ display: 'flex',mb:1,justifyContent:'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <CoinHeaderGridStyled>
                    <div>{sym} </div>
                    <ChangePercentage data={data}/>
                </CoinHeaderGridStyled>
                <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{objectFit: "contain",width:70}}
                image={`http://cryptocompare.com/${
                    coin.ImageUrl
                    }`}
                alt="Live from space album cover"
            />
        </Card>










            
            
        </PriceTileStyled>
    )
}

export default function ({price,index,coinList}) {
    let sym = Object.keys(price)[0]
    let data = price[sym]['USD']
    return (
        <AppContext.Consumer>
            {
                ({currentFavorite,setCurrentFavorite})=>(
                    <PriceTile 
                        sym={sym} 
                        data={data} 
                        currentFavorite={currentFavorite === sym}
                        coin = {coinList[sym]}
                        setCurrentFavorite={()=>setCurrentFavorite(sym)}
                    />
                )
                    
                
            }
        </AppContext.Consumer>
         
  

    )
}







