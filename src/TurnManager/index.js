import React from 'react'
import { Text, View } from 'react-native'

import RoomTurn from './RoomTurn'
import TurnAssigned from './TurnAssigned'
import MyTurn from './MyTurn'

class TurnManager extends React.Component {
  render () {
    return (
      <View>
        <Text>Hello</Text>
        <TurnAssigned turnNumber={0}/>
        <MyTurn />
        <RoomTurn turnNumber={0}/>
      </View>
    )
  }
}

export default TurnManager
