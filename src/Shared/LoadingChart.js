import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'



export default function LoadingChart({message="Loading..."}) {
  return (
        <Box display={'flex'} justifyContent='center' alignItems={'center'} height='100vh'>
            <CircularProgress size={100} color='secondary'/>
            <Typography variant='h4' sx={{justifyContent:'center', position:'fixed',top:'60%'}}>{message}</Typography>
        </Box>

  )
}
