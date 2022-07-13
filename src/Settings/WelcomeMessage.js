import { Paper, Typography } from '@mui/material';
import React from 'react'
import { AppContext } from '../App/AppProvider';

export default function WelcomeMessage() {
  return (
    <AppContext.Consumer>
      {({firstVisit})=>
      firstVisit ? 
      <Paper sx={{ mb: 2, p: 2 ,width: '100%'}}>
        <Typography variant="h6"  color='white'>All Coins</Typography>
        Wellcome to Crypto Dashboard, please select coins to begin.{' '}
      </Paper>:
      null
    }
    </AppContext.Consumer>
  )
}
