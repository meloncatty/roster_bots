import React, { Component } from 'react'
import * as helpers from '../../helpers'
import roboAvatar from '../../assets/robot_avatar00.png'

class StarterCards extends Component {
  constructor () {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount () {
    this.setState({
      players: helpers.generatePlayers(5)
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

      const isDupe = helpers.checkDupes(person)
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
    return this.state.players.map((player, index) => {
      return (
        <div className={player.error ? 'error' : 'player-card'} key={index}>
          <div className='player-card-heading'>
            <h2 className='player-name'>
              <input
                onChange={(e) => this.handleNameChange(e, player)}
                type='text'
                defaultValue={player.name}
                required
              />
            </h2>
            <div className='player-avatar-container'>
              <img className='player-avatar' src={roboAvatar} alt='Team member avatar' />
            </div>
          </div>
          <h3 className='player-attribute'>
            Speed:
            <input
              min='0'
              name='speed'
              disabled={false}
              onChange={
                e => this.handleAttributeChange(e, player)
              }
              className='player-attribute-input'
              type='number'
              defaultValue={player.speed} />
          </h3>
          <h3 className='player-attribute'>
            Agility:
            <input
              min='0'
              name='agility'
              onChange={
                e => this.handleAttributeChange(e, player)
              }
              className='player-attribute-input'
              type='number'
              defaultValue={player.agility} />
          </h3>
          <h3 className='player-attribute'>
            Strength:
            <input
              min='0'
              name='strength'
              onChange={
                e => this.handleAttributeChange(e, player)
              }
              className='player-attribute-input'
              type='number'
              defaultValue={player.strength} />
          </h3>
        </div>
      )
    })
  }
}

export default StarterCards
