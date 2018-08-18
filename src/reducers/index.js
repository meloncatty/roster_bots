import { combineReducers } from 'redux'

export const teamName = (state = '', action) => {
  switch (action.type) {
  case 'TEAM_NAME':
    return action.teamName
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  teamName
})

export default rootReducer
