import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2 } from '../Shared/Styles'
import { AppContext } from '../App/AppProvider'
import _, { result } from 'lodash';
import fuzzy from 'fuzzy' 

const SearchGrid = styled.div`
    display:grid;
    grid-template-columns: 100px 1fr;
    padding-bottom:20px;
`
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid; 
  height: 25px; 
  color: #1163c9;
  place-self: center left; 
`
function filterCoins(e,setFilteredCoin,coinList){
    let inputValue = e.target.value;
    if (!inputValue){
        setFilteredCoin(null)
        return;
    }
    handleFilter(inputValue,coinList,setFilteredCoin)

}

const handleFilter = _.debounce((inputValue,coinList,setFilteredCoin)=>{
                        //get all coin symbol
                        let coinSymbols = Object.keys(coinList)
                        //get all coins names
                        let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
                        //join to strings
                        let allStringSearch = coinSymbols.concat(coinNames)
                        let fuzzyResult = fuzzy
                                            .filter(inputValue,allStringSearch,{})
                                            .map(result => result.string)
                        
                        let filteredCoin = _.pickBy(coinList,(result,symKey)=>{
                            let coinName = result.CoinName
                            return (_.includes(fuzzyResult,symKey))||(_.includes(fuzzyResult,coinName))
                        })
                        setFilteredCoin(filteredCoin)          

                    },300);
export default function Search() {
  return (
      <AppContext.Consumer>
          {
              ({setFilteredCoin,coinList})=>(
                    <SearchGrid>
                        <h2>search</h2>
                        <SearchInput onKeyUp={(e)=>filterCoins(e,setFilteredCoin,coinList)}/>
                    </SearchGrid>
              )
          }
      </AppContext.Consumer>
    
  )
}
