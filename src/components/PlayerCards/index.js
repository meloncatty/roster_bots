import React from 'react'
import roboAvatar from '../../assets/robot_avatar00.png'
import './styles.css'

const PlayerCards = props => {
  const { players } = props
  return players.map((player, index) => {
    return (
      <div className={player.error ? 'error' : 'player-card'} key={index}>
        <div className='player-card-heading'>
          <h2 className='player-name'>
            <input
              onChange={(e) => props.handleNameChange(e, player)}
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
              e => props.handleAttributeChange(e, player)
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
              e => props.handleAttributeChange(e, player)
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
              e => props.handleAttributeChange(e, player)
            }
            className='player-attribute-input'
            type='number'
            defaultValue={player.strength} />
        </h3>
      </div>
    )
  })
}

export default PlayerCards
