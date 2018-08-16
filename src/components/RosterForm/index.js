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
      <section>
        <h3>Create a team</h3>
        <form>
          <label htmlFor='team-name'>Team Name</label>
          <input
            id='team-name'
            type='text'
            name='teamName'
            placeholder='Champs'
            onChange={this.handleOnChange}
            required/>
          <button type='submit' disabled={!this.state.teamName}>submit</button>
        </form>
      </section>
    )
  }
}

export default RosterForm
