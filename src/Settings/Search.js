import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2 } from '../Shared/Styles'
import { AppContext } from '../App/AppProvider'
import _ from 'lodash';

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
    handleFilter(inputValue,coinList,setFilteredCoin)

}

const handleFilter = _.debounce((inputValue,coinList,setFilteredCoin)=>{
                        console.log(inputValue)
                    },500);
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
