import React from 'react'
import styled from 'styled-components';
import AppProvider, { AppContext } from '../App/AppProvider';
import {fontSize1,greenBoxShadow,color3} from '../Shared/Styles'

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
