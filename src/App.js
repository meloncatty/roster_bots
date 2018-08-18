import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { RosterForm, PlayersContainer } from './components'


const App = () => {
  return (
    <Fragment>
      <RosterForm />
      <Route path='/players' component={PlayersContainer}/>
    </Fragment>
  )
}

export default App
