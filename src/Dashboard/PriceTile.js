import React from 'react'
import styled ,{css} from 'styled-components'
import { SelectableTile } from '../Shared/Tile'
import { fontSize3,fontSizeBig,greenBoxShadow } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'
import { AppContext } from '../App/AppProvider'

const PriceTileStyled = styled(SelectableTile)`
    ${
        props=>props.currentFavorite && css`
            ${greenBoxShadow}
            pointer-events:none;
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

function PriceTile({sym,data,currentFavorite,setCurrentFavorite}){
    return(
        <PriceTileStyled currentFavorite={currentFavorite} onClick={setCurrentFavorite}>
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
        <AppContext.Consumer>
            {
                ({currentFavorite,setCurrentFavorite})=>(
                    <PriceTile 
                        sym={sym} 
                        data={data} 
                        currentFavorite={currentFavorite === sym}
                        setCurrentFavorite={()=>setCurrentFavorite(sym)}
                    />
                )
                    
                
            }
        </AppContext.Consumer>
         
  

    )
}
