import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2 } from '../Shared/Styles'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { AppContext } from '../App/AppProvider'
import _ from 'lodash';
import fuzzy from 'fuzzy' 
import { Input } from '@mui/material';

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
function filterCoins(e,setFilteredCoins,coinList){
    let inputValue = e.target.value;
    if (!inputValue){
        setFilteredCoins(null)
        return;
    }
    handleFilter(inputValue,coinList,setFilteredCoins)

}

const handleFilter = _.debounce((inputValue,coinList,setFilteredCoins)=>{
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
                        setFilteredCoins(filteredCoin)          

                    },300);
export default function Search() {
  return (
      <AppContext.Consumer>
          {    
            ({setFilteredCoins,coinList})=>(<>
            <Input
                startAdornment={
                    <InputAdornment position="start">
                    <SearchIcon/>
                    </InputAdornment>
                }
                onKeyUp={(e)=>filterCoins(e,setFilteredCoins,coinList)}
                sx={{width: '100%'}}
                placeholder='search for your favorite coins'
            />
            
            </>)
          }
      </AppContext.Consumer>
    
  )
}
