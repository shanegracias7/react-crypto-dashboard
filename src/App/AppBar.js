import React from 'react'
import styled,{css} from 'styled-components';
import AppProvider, { AppContext } from './AppProvider';

const Logo = styled.div`
    font-size: 1.5em;
`
const Bar = styled.div`
    display:grid;
    grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElem = styled.div`
    cursor:pointer;
    ${props=>props.active&&css`
        color:blue;
        margin-bottom: 40px;
        text-shadow: 0px 0px 50px #ffffff;
    `}
`
function ControlButton({name}){
    return (
        <AppContext.Consumer>
            {({page,setPage})=>(
                <ControlButtonElem 
                    active = {page === name}
                    onClick = {()=>setPage(name)}
                >
                    {name}
                </ControlButtonElem> 
            )}
        </AppContext.Consumer>
    )
}

export default function AppBar() {
  return (
    <Bar>
        <Logo>cryptodashboard</Logo>
        <ControlButton/>
        <ControlButton name={"dashboard"}/>
        <ControlButton name={"settings"}/>
    </Bar>
  )
}