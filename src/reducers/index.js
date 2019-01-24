import { combineReducers } from 'redux'

import userInfo from './userInfo'
import companyInformation from './companyInformation'

const reducers = combineReducers({
  userInfo,
  companyInformation
})

export default reducers
