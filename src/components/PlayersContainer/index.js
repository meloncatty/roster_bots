import React from 'react'
import { StarterCards, SubstituteCards } from '../'
import './styles.css'

const PlayersContainer = () => {
  return (
    <main className='cards-container'>
      <h2>Starters</h2>
      <section className='starters-container'>
        <StarterCards />
      </section>
      <h2>Substitutes</h2>
      <section className='substitutes-container'>
        <SubstituteCards />
      </section>
    </main>
  )
}

export default PlayersContainer
