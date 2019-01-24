import { SET_COMPANY_DATA } from '../actions/actionTypes'

const intialCompanyInfo = {
  _id: null,
  name: '',
  code: '',
}

export default (state=intialCompanyInfo, action) => {
  switch(action.type) {
    case SET_COMPANY_DATA:
      return {
        ...state,
        _id: action._id,
        name: action.name,
        code: action.code
      }
    default:
      return state
  }
}
