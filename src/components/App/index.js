import React from 'react'
import { Route } from 'react-router-dom'
import { RosterForm, PlayersContainer } from '../../containers'
import './styles.css'

const App = () => {
  return (
    <section className='app-main'>
      <Route path='/' exact component={RosterForm} />
      <Route path='/players' exact component={PlayersContainer} />
    </section>
  )
}

export default App
