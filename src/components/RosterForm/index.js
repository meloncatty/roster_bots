import React, { Component } from 'react'

class RosterForm extends Component {
  constructor() {
    super()

    this.state = {
      teamName: ''
    }
  }

  render() {
    return (
      <form>
        <label for='team-name'>Team Name</label>
        <input id='team-name' type='text' name='teamName' placeholder='Champs' required/>
        <button type='submit'>Generate Team</button>
      </form>
    )
  }
}

export default RosterForm
