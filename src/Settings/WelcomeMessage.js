import React from 'react'
import { AppContext } from '../App/AppProvider';

export default function WelcomeMessage() {
  return (
    <AppContext.Consumer>
      {({firstVisit})=>
      firstVisit ? 
      <div>Wellcome to Crypto Dashboard, please select coins to begin.{' '}</div> :
      null
    }
    </AppContext.Consumer>
  )
}
