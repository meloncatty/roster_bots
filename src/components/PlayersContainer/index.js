import React from 'react'
import {StarterCards, SubstituteCards} from '../'

const PlayersContainer = () => {
  return (
    <main>
      <section>
      <h1>Starters</h1>
      <StarterCards />
      <h1>Substitutes</h1>
      <SubstituteCards />
      </section>
    </main>
  )
}

export default PlayersContainer
