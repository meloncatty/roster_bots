import React, { Component } from 'react'
import faker from 'faker'
import * as helpers from '../../helpers'
import roboAvatar from '../../assets/robot_avatar00.png'
import './styles.css'

class StarterCards extends Component {
  constructor() {
    super()

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.generatePlayers()
  }

  checkTotal = stats => {
    const add = (x, y) => x + y
    const total = stats.reduce(add)
    return total
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

  generatePlayers = () => {
    let playerNames = []
    let players = []

    while (playerNames.length < 10) {
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
      const total = this.checkTotal(stats)

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
    let total = this.checkTotal(stats)

    const person = this.state.players.find(person => person.name === player.name)
    if (total < 100) {
      person[e.target.name] = parseInt(e.target.value, 10)
      const isDupe = this.checkDupes(person)
      if (isDupe) {
        e.target.value = e.target.value === 0 ? 0 : parseInt(e.target.value, 10) - 1
        isDupe.error = true
        person.error = true
        this.forceUpdate()
      } else {
        const player = this.state.players.find(player => player.error)
        if (player) {
          player.error = false
        }
        person.error = false
        this.forceUpdate()
      }
    } else if (total >= 100) {
      e.target.value = parseInt(e.target.value, 10) - 1
      person[e.target.name] = parseInt(e.target.value, 10)
    }
  }

  handleNameChange = (e, player) => {
    const { value } = e.target
    player.name = value
  }

  render() {
    return this.state.players.map((player, index) => {
      return (
        <div className={player.error ? 'error' : 'player-card'} key={index}>
          <div className="player-card-heading">
            <h2 className="player-name">
              <input
              onChange={(e) => this.handleNameChange(e, player)}
              type='text'
              defaultValue={player.name}
              required
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

export default StarterCards
