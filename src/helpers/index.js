import faker from 'faker'

export const generateUUID = () => {
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const firstPart = []
  const secondPart = []
  while (firstPart.length < 3) {
    const randomIndex = Math.ceil(Math.random() * 26)
    firstPart.push(alpha[randomIndex])
  }
  while (secondPart.length < 4) {
    const randomIndex = Math.ceil(Math.random() * 9)
    secondPart.push(numeric[randomIndex])
  }
  return firstPart.join('').concat(secondPart.join(''))
}

export const checkDupes = (player, players) => {
  return players.find(
    person => (
      person.speed === player.speed &&
      person.strength === player.strength &&
      person.agility === player.agility &&
      person.name !== player.name
    )
  )
}

export const getAttributeTotal = stats => {
    const add = (x, y) => x + y
    return stats.reduce(add)
  }

export const generatePlayers = () => {
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
      stats.push(Math.floor(Math.random() * 33))
    }
    const total = getAttributeTotal(stats)

    if (total < 100) {
      const newPlayer = {
        name: player,
        speed: stats[0],
        agility: stats[1],
        strength: stats[2],
        id: generateUUID(),
        error: false
      }
      const isDupe = checkDupes(newPlayer, players)
      if (!isDupe) {
        players.push(newPlayer)
      }
    }
  })
  return players
}
