import React, { Component } from 'react'
import faker from 'faker'
import roboAvatar from '../../assets/robot_avatar00.png'
import './styles.css'

class PlayerCards extends Component {
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

  generatePlayers = () => {
    let playerNames = []
    let players = []

    while (playerNames.length < 15) {
      let randomName = faker.name.findName()
      if (randomName.length < 16) {
        playerNames.push(randomName)
      }
    }

    playerNames.forEach(player => {
      let stats = []

      while (stats.length < 3) {
        stats.push(Math.floor(Math.random() * 50))
      }
      const total = this.checkTotal(stats)

      if (total < 100) {
        players.push({
          name: player,
          speed: stats[0],
          agility: stats[1],
          strength: stats[2],
        })

      }
    })
    this.setState({ players })
  }

  handleOnChange = (e, player) => {
    const stats = Object.values(player).slice(1)
    let total = this.checkTotal(stats)
    const person = this.state.players.find(person => person.name === player.name)

    if (total < 100) {
      person[e.target.name] = parseInt(e.target.value, 10)
    } else if (total >= 100) {
      e.target.value = parseInt(e.target.value, 10) - 1
      person[e.target.name] = parseInt(e.target.value, 10)
    }
  }

  render() {
    return this.state.players.map((player, index) => {
      return (
        <div className="player-card" key={index}>
          <div className="player-card-heading">
            <h2 className="player-name">
              {player.name}
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
                e => this.handleOnChange(e, player)
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
                e => this.handleOnChange(e, player)
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
                e => this.handleOnChange(e, player)
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

export default PlayerCards
