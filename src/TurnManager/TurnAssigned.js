import React from 'react'
import { Button, View, Text } from 'react-native'

class TurnAssigned extends React.Component {
  render () {
    const { turnNumber } = this.props
    if (turnNumber === null) return null
    return (
      <View>
        <View><Text>{turnNumber}</Text></View>
        <View><Text>My turn</Text></View>
      </View>
    )
  }
}

export default TurnAssigned
