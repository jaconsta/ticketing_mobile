import React from 'react'
import { Text, View } from 'react-native'

import RoomTurn from './RoomTurn'
import TurnAssigned from './TurnAssigned'
import MyTurn from './MyTurn'

import {myAssignedTurn} from '../services/sockets'

class TurnManager extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      turnNumber: 0
    }
  }

  componentDidMount() {
    myAssignedTurn(this.setMyTurnNumber)
  }

  setMyTurnNumber = turnNumber => {
    this.setState({turnNumber})
  }

  render () {
    const { turnNumber } = this.state
    return (
      <View>
        <TurnAssigned turnNumber={turnNumber}/>
        <MyTurn />
        <RoomTurn turnNumber={turnNumber}/>
      </View>
    )
  }
}

export default TurnManager
