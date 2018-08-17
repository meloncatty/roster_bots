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

  generatePlayers = () => {
    let playerNames = []
    let players = []

    while (playerNames.length < 15) {
      let randomName = faker.name.findName()
      if (randomName.length < 16) {
        playerNames.push(randomName)
      }

      let checkTotal = []

      while (checkTotal.length < 3) {
        checkTotal.push(Math.floor(Math.random() * 50))
      }
      const add = (x, y) => x + y
      const total = checkTotal.reduce(add)

      if (total < 100) {
        players.push({
          name: randomName,
          speed: checkTotal[0],
          agility: checkTotal[1],
          strength: checkTotal[2],
        })
      }

      this.setState({ players: players })
    }
  }

  render() {
    return this.state.players.map(player => {
      return (
        <div className="player-card">
          <div className="player-card-heading">
            <h2 className="player-name">
              {player.name}
            </h2>
            <div className="player-avatar-container">
              <img className="player-avatar" src={roboAvatar} />
            </div>
          </div>
          <h3 className="player-attribute">
            Speed:
            <input
              onChange={this.handleOnChange}
              className='player-attribute-input'
              type='number'
              defaultValue={player.speed}>
            </input>
          </h3>
          <h3 className="player-attribute">
            Agility:
            <input
              className='player-attribute-input'
              type='number'
              defaultValue={player.agility}>
            </input>
          </h3>
          <h3 className="player-attribute">
            Strength:
            <input
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
