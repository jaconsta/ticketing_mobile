import {
  SET_USER_INFO,
  SET_COMPANY_DATA,
  SET_MY_QUEUE_TURN
} from './actionTypes'

import { company } from '../services/rest/'
import { enqueueTurn, myAssignedTurn } from '../services/sockets'


export const setInitialUserDetails = (name, email) => {
  return {
    type: SET_USER_INFO,
    name,
    email
  }
}

export const setCompanyData = company => {
  return {
    type: SET_COMPANY_DATA,
    ...company
  }
}

export const setMyAssignedTurn = turnNumber => {
  return {
    type: SET_MY_QUEUE_TURN,
    turnNumber
  }
}

export const getCompanyInformationFromCode = code => dispatch => {
  return company.getCompanyFromCode(code)
    .then(({companies}) => {
      dispatch(setCompanyData(companies[0]))
    })
}

export const enqueueNewTurn = (name, company) => dispatch => {
  enqueueTurn(() => dispatch(myAssignedTurn))
}
