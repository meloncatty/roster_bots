import React, { Component } from 'react'
import { connect } from 'react-redux'
import getTeamName from '../../actions'
import './styles.css'

class RosterForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      teamName: ''
    }
  }

  handleOnChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.getTeamName(this.state.teamName)
    this.props.history.push('/players')
  }

  render () {
    return (
      <form className='roster-form' onSubmit={this.handleSubmit}>
        <label
          htmlFor='team-name'
          className='roster-form-label'>
            Create a Team
        </label>
        <input
          id='team-name'
          type='text'
          name='teamName'
          placeholder='Team Name'
          className='team-name-input'
          onChange={this.handleOnChange}
          required
        />
        <button
          type='submit'
          disabled={!this.state.teamName}
          className='submit-roster-button'
        >
            submit
        </button>
      </form>
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
