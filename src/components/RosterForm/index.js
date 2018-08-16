import React, { Component } from 'react'

class RosterForm extends Component {
  constructor() {
    super()

    this.state = {
      teamName: ''
    }
  }

  handleOnChange = e => {
    const { value, name } = e.target
    this.setState({ [name] : value })
  }

  handleOnSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <label for='team-name'>Team Name</label>
        <input
          id='team-name'
          type='text'
          name='teamName'
          placeholder='Champs'
          onChange={this.handleOnChange}
          required/>
        <button type='submit' disabled={!this.state.teamName}>Generate Team</button>
      </form>
    )
  }
}

export default RosterForm
