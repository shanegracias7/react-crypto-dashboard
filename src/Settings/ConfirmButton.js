import React from 'react'
import styled,{css} from 'styled-components';
import AppProvider, { AppContext } from '../App/AppProvider';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: blue;
    cursor: pointer;
`
const CenterDiv = styled.div`
    display:grid;
    justify-content:center;
`
export default function() {
    return (
        <CenterDiv>
            <AppContext.Consumer>
                {({confirmFavorites})=>(
                        <ConfirmButtonStyled
                            onClick={confirmFavorites}
                        >
                            confirm favorites
                        </ConfirmButtonStyled>
                    )
                }
            </AppContext.Consumer>
        </CenterDiv>
        
    )
}
