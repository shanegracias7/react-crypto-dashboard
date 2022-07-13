import React from 'react'
import { AppContext } from '../App/AppProvider';
import LoadingSkeleton from '../Shared/LoadingSkeleton'
import Loading from './Loading';

export default function (props) {
  return (
    <AppContext.Consumer>
        {
            ({coinList,firstVisit,prices})=>{
                if(!coinList){
                    return <Loading message='Loading..(might take a while for the first attempt)'/>
                }
                if(!firstVisit && !prices){
                    return <Loading message='Loading..'/>
                }
                return <div>{props.children}</div>
            }
        }
    </AppContext.Consumer>
  )
}
