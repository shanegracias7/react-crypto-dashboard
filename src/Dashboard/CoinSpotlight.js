import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Settings/CoinImage';
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SpotlightName = styled.h2`
  text-align: center; 
`

export default function(){
    return (
        <AppContext.Consumer>
            {
                ({currentFavorite,coinList})=>(
                    

                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        sx={{objectFit: "contain"}}
                        image={`http://cryptocompare.com/${
                            coinList[currentFavorite].ImageUrl
                            }`}
                        alt="coin"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {coinList[currentFavorite].CoinName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         {coinList[currentFavorite].Description.substring(1,500)+"..."}
                        </Typography>
                    </CardContent>
                    </Card>

                )
            }
        </AppContext.Consumer>
        
    )
}