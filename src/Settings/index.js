import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'
import {Grid, List,ListItem, Typography} from '@mui/material';
import { Box } from '@mui/system'
import StarsIcon from '@mui/icons-material/Stars';


export default function() {
  return (
      <Page name={"settings"}>
        <List sx={{ width: '100%' }} >
            <ListItem sx={{ width: '100%',  bgcolor: 'primary.dark' }}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{marginLeft:1 , mb:1}} color='white'>Favorites</Typography>
                <CoinGrid topSection/>
              </Box> 
            </ListItem>

            <ListItem sx={{ width: '100%',  bgcolor: 'white'}}>
              <WelcomeMessage/>
            </ListItem>

            <ListItem sx={{ width: '100%',  bgcolor: 'white'}}> 
              <Grid container spacing={4} sx={{alignItems:'center',mb:2}}>
                <Grid item xs={2} >
                  <ConfirmButton/>          
                </Grid> 
                <Grid item xs={10} >
                  <Search/>         
                </Grid>  
              </Grid>
            </ListItem>

            <ListItem sx={{ width: '100%',  bgcolor: 'primary.dark' }}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{marginLeft:1 , mb:1}} color='white'>All Coins</Typography>
                <CoinGrid/>
              </Box> 
            </ListItem>
        </List>
            
      </Page>

  )
}
