import React from 'react'
import faker from 'faker'

let playerNames = []
let players = []

const generatePlayers = () => {
  while (playerNames.length < 15) {
    let randomName = faker.name.findName()
    playerNames.push(randomName)

    let checkTotal = []

    while (checkTotal.length < 3) {
      checkTotal.push(Math.floor(Math.random() * 45))
    }
    const add = (x, y) => x + y
    const total = checkTotal.reduce(add)

    if (total < 100) {
      players.push({
        name: randomName,
        speed: checkTotal[0],
        agility: checkTotal[1],
        strength: checkTotal[2]
      })
    }
  }
}

const PlayerCards = () => {
  generatePlayers()
  return players.map(player => {
    return (
      <div>
        <h2>Name: {player.name}</h2>
        <h3>Speed: {player.speed}</h3>
        <h3>Agility: {player.agility}</h3>
        <h3>Strength: {player.strength}</h3>
      </div>
    )
  })
}

export default PlayerCards
