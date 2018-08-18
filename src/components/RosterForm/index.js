import React, { Component } from 'react'
import { connect } from 'react-redux';
import getTeamName from '../../actions'

class RosterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamName: ''
    }
  }

  handleOnChange = e => {
    const { value, name } = e.target
    this.setState({ [name] : value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.getTeamName(this.state.teamName)
    this.props.history.push('/players')
  }

  render() {
    return (
      <section>
        <h3>Create a team</h3>
        <form onSubmit={this.handleSubmit}>
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

export const mapStateToProps = state => ({
  teamName: state.teamName
})

export const mapDispatchToProps = dispatch => ({
  getTeamName: name => dispatch(getTeamName(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(RosterForm)
