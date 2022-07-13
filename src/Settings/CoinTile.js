import React from 'react'
import { AppContext } from '../App/AppProvider'
import { SelectableTile ,DeletableTile,DisabledTile} from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'
import CoinImage from './CoinImage'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'


function clickCoinHandler(topSection, coinKey, addCoin,removeCoin){
    return topSection ?
            ()=>{removeCoin(coinKey)}:
            ()=>{addCoin(coinKey)}
}

export default function ({coinKey,topSection}) {  
    return (
        <AppContext.Consumer>
            {
                ({coinList,addCoin,removeCoin,isInFavorites})=>{
                    let coin = coinList[coinKey];                    
                    let TileClass = SelectableTile
                    if(topSection){
                        TileClass = DeletableTile
                    }
                    else if(isInFavorites(coinKey)){
                        TileClass = DisabledTile
                    }
                    return (
                        <TileClass >

                            <Card sx={{ maxWidth: 345 }} elevation={5}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    sx={{objectFit: "contain",bgcolor:'primary.light'}}
                                    image={`http://cryptocompare.com/${
                                        coin.ImageUrl
                                        }`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                    {coin.CoinName}
                                    </Typography> 
                                    {
                                        topSection?
                                        <Button size="small" variant="outlined" color="error" onClick={clickCoinHandler(topSection, coinKey, addCoin,removeCoin)}>Remove</Button>
                                        : <Button size="small" variant="outlined" color="success" onClick={clickCoinHandler(topSection, coinKey, addCoin,removeCoin)}>Add</Button>
                                    }
                                       
                                </CardContent>
                                </Card>
                        </TileClass>
                    )
                }
            }
        </AppContext.Consumer>
    )
}
