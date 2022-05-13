import React from 'react'
import { AppContext } from '../App/AppProvider';

export default function (props) {
  return (
    <AppContext.Consumer>
        {
            ({coinList,firstVisit,prices})=>{
                if(!coinList){
                    return <div>loading coins</div>
                }
                if(!firstVisit && !prices){
                    return <div>loading prices</div>
                }
                return <div>{props.children}</div>
            }
        }
    </AppContext.Consumer>
  )
}
