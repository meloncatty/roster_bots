import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StarterCards, SubstituteCards } from '../'
import './styles.css'

class PlayersContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='cards-container'>
        <h1>{this.props.teamName}</h1>
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
}

export const mapStateToProps = state => ({
  teamName: state.teamName
})

export default connect(mapStateToProps)(PlayersContainer)
