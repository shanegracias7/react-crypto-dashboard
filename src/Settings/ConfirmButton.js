import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {fontSize1,greenBoxShadow,color3} from '../Shared/Styles'
import {SendIcon} from '@mui/icons-material';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1}
    padding: 5px;
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}

    }
`
const CenterDiv = styled.div`
    display:grid;
    justify-content:center;
`
export default function() {
    return (
            <AppContext.Consumer>
                {({confirmFavorites})=>(    
                        <Button size="small" variant="contained"  color="success" sx={{width:'100%'}} onClick={confirmFavorites} >Proceed</Button>
                    )
                }
            </AppContext.Consumer>      
    )
}
