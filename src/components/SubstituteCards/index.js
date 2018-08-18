import React, { Component } from 'react'
import faker from 'faker'
import * as helpers from '../../helpers'
import roboAvatar from '../../assets/robot_avatar00.png'

class SubstituteCards extends Component {
  constructor() {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.generatePlayers()
  }

  getAttributeTotal = stats => {
    const add = (x, y) => x + y
    return stats.reduce(add)
  }

  checkDupes = player => {
    return this.state.players.find(
      person => (
        person.speed === player.speed &&
        person.strength === player.strength &&
        person.agility === player.agility &&
        person.name !== player.name
      )
    )
  }

  checkNameDupes = player => {
    return this.state.players.find(
      person => person.name === player.name && person !== player
    )
  }

  generatePlayers = () => {
    let playerNames = []
    let players = []

    while (playerNames.length < 5) {
      let randomName = faker.name.findName()
      if (randomName.length < 16) {
        playerNames.push(randomName)
      }
    }

    playerNames.forEach(player => {
      let stats = []

      while (stats.length < 3) {
        stats.push(Math.floor(Math.random() * 33))
      }
      const total = this.getAttributeTotal(stats)

      if (total < 100) {
        const newPlayer = {
          name: player,
          speed: stats[0],
          agility: stats[1],
          strength: stats[2],
          id: helpers.generateUUID(),
          error: false
        }
        const isDupe = this.checkDupes(newPlayer)
        if (!isDupe) {
          players.push(newPlayer)
        }
      }
    })
    this.setState({ players })
  }

  handleAttributeChange = (e, player) => {
    const stats = Object.values(player).slice(1, 4)
    let total = this.getAttributeTotal(stats)

    const person = this.state.players.find(person => person.name === player.name)
    if (total < 100) {
      person[e.target.name] = parseInt(e.target.value, 10)

      this.setState({
        players: this.state.players
      })

      const isDupe = this.checkDupes(person)
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

  render() {
    return this.state.players.map((player, index) => {
      return (
        <div className={player.error ? 'error' : 'player-card'} key={index}>
          <div className="player-card-heading">
            <h2 className="player-name">
              <input
                type='text'
                defaultValue={player.name}
                onChange={e => this.handleNameChange(e, player)}
              />
            </h2>
            <div className="player-avatar-container">
              <img className="player-avatar" src={roboAvatar} alt='Team member avatar'/>
            </div>
          </div>
          <h3 className="player-attribute">
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
              defaultValue={player.speed}>
            </input>
          </h3>
          <h3 className="player-attribute">
            Agility:
            <input
              min='0'
              name='agility'
              onChange={
                e => this.handleAttributeChange(e, player)
              }
              className='player-attribute-input'
              type='number'
              defaultValue={player.agility}>
            </input>
          </h3>
          <h3 className="player-attribute">
            Strength:
            <input
              min='0'
              name='strength'
              onChange={
                e => this.handleAttributeChange(e, player)
              }
              className='player-attribute-input'
              type='number'
              defaultValue={player.strength}>
            </input>
          </h3>
        </div>
      )
    })
  }
}

export default SubstituteCards
