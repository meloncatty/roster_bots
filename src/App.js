import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { RosterForm, PlayersContainer } from './components'

const App = () => {
  return (
    <Fragment>
      <Route path='/' exact component={RosterForm} />
      <Route path='/players' exact component={PlayersContainer} />
    </Fragment>
  )
}

export default App
