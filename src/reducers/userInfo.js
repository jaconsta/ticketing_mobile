import { SET_USER_INFO } from '../actions/actionTypes'

const intialUserInfo = {
  name: '',
  email: '',
}

export default (state=intialUserInfo, action) => {
  switch(action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        email: action.email
      }
    default:
      return state
  }
}
