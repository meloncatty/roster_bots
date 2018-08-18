import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlayerCards } from '../../components/'
import './styles.css'
import * as helpers from '../../helpers'

class PlayersContainer extends Component {
  constructor () {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount () {
    this.setState({
      players: helpers.generatePlayers()
    })
  }

  checkNameDupes = player => {
    return this.state.players.find(
      person => person.name === player.name && person !== player
    )
  }

  handleAttributeChange = (e, player) => {
    const stats = Object.values(player).slice(1, 4)
    let total = helpers.getAttributeTotal(stats)

    const person = this.state.players.find(person => person.name === player.name)
    if (total < 100) {
      person[e.target.name] = parseInt(e.target.value, 10)

      this.setState({
        players: this.state.players
      })

      const isDupe = helpers.checkDupes(person, this.state.players)
      if (isDupe) {
        isDupe.error = true
        person.error = true

        this.setState({
          players: this.state.players
        })
      } else {
        this.state.players.forEach(player => {
          if (player.error) {
            player.error = false
          }
        })
        person.error = false

        this.setState({
          players: this.state.players
        })
      }
    } else {
      e.target.value = parseInt(e.target.value, 10) - 1
      person[e.target.name] = parseInt(e.target.value, 10)
      this.setState({
        players: this.state.players
      })
    }
  }

  handleNameChange = (e, player) => {
    const { value } = e.target
    player.name = value
    this.setState({
      players: this.state.players
    })
    const isDupe = this.checkNameDupes(player)
    if (isDupe) {
      isDupe.error = true
      player.error = true

      this.setState({
        players: this.state.players
      })
    }
  }

  render () {
    return (
      <div className='page-container'>
        <div className='team-name-header'>
          <h1>{this.props.teamName}</h1>
        </div>
        <div className='cards-content-container'>
          <div className='starters-container'>
            <h2>Starters</h2>
            <section className='starters-cards-container'>
              <PlayerCards
                players={this.state.players.slice(0, 10)}
                handleNameChange={this.handleNameChange}
                handleAttributeChange={this.handleAttributeChange}
              />
            </section>
          </div>
          <div className='substitutes-container'>
            <h2>Substitutes</h2>
            <section className='substitutes-cards-container'>
              <PlayerCards
                players={this.state.players.slice(10)}
                handleNameChange={this.handleNameChange}
                handleAttributeChange={this.handleAttributeChange}
              />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  teamName: state.teamName
})

export default connect(mapStateToProps)(PlayersContainer)
