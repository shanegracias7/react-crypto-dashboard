import { Divider, Icon, Paper } from '@mui/material';
import React from 'react'
import styled,{css} from 'styled-components';
import { AppContext } from './AppProvider';
import PaidIcon from '@mui/icons-material/Paid';

const Logo = styled.div`
    font-size: 1.5em;
    display:grid;
    grid-template-columns: auto auto;
    align-items: center;
`
const Bar = styled.div`
    display:grid;
    grid-template-columns: 200px auto 100px 100px;
`
const ControlButtonElem = styled.div`
    cursor:pointer;
    ${props=>props.active&&css`
        color:darkblue;
        text-shadow: 0px 0px 50px #ffffff;
    `}
    ${props=>props.hidden&&css`
        display:none;
    `}
`
function ControlButton({name}){
    return (
        <AppContext.Consumer>
            {({firstVisit, page,setPage})=>(
                <ControlButtonElem 
                    active = {page === name}
                    onClick = {()=>setPage(name)}
                    hidden ={firstVisit && name === "dashboard"}
                >
                    {name}
                </ControlButtonElem> 
            )}
        </AppContext.Consumer>
    )
}

export default function AppBar() {
  return (
    <>
        <Paper elevation={5} sx={{ mb: 2, p: 2 }}>
            <Bar>
                <Logo><PaidIcon/>crypto dashboard</Logo>
                <ControlButton/>
                <ControlButton name={"dashboard"}/>
                <ControlButton name={"settings"}/>
            </Bar>
        </Paper>
    </>
    
  )
}
