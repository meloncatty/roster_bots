import React from 'react'
import { connect } from 'react-redux'
import { StarterCards, SubstituteCards } from '../'
import './styles.css'

const PlayersContainer = props => {
  return (
    <main className='cards-container'>
      <h1>{props.teamName}</h1>
      <div>
        <h2>Starters</h2>
        <section className='starters-container'>
          <StarterCards />
        </section>
      </div>
      <div>
        <h2>Substitutes</h2>
        <section className='substitutes-container'>
          <SubstituteCards />
        </section>
      </div>
    </main>
  )
}

export const mapStateToProps = state => ({
  teamName: state.teamName
})

export default connect(mapStateToProps)(PlayersContainer)
