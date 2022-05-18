import React from 'react'
import styled ,{css} from 'styled-components'
import { SelectableTile } from '../Shared/Tile'
import { fontSize3,fontSizeBig } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'

const PriceTileStyled = styled(SelectableTile)`
    ${
        props=>props.compact && css`
            ${fontSize3}
        `
    }
`
const JustifyRight = styled.div`
    justify-self:right;
`
const TickerPrice = styled.div`
    ${fontSizeBig}
`
const PercentageChange = styled.div`
    color:green;
    ${props=>props.red && css`
    color:red;
    `}
`
const numberFormat = number =>{
    // converting int into string to slice it and the converte it back into number.
    return +(number+'').slice(0,7)
}

function ChangePercentage ({data}){
    return(
        <JustifyRight>
            <PercentageChange red={data.CHANGEPCT24HOUR<0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </PercentageChange>  
        </JustifyRight>
    )
}

function PriceTile({sym,data}){
    return(
        <PriceTileStyled>
            <CoinHeaderGridStyled>
                <div>{sym} </div>
                <ChangePercentage data={data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>{numberFormat(data.PRICE)}</TickerPrice>
        </PriceTileStyled>
    )
}

export default function ({price,index}) {
    let sym = Object.keys(price)[0]
    let data = price[sym]['USD']
    return (
         <PriceTile sym={sym} data={data}/>
  

    )
}
