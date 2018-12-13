import React from 'react'
import { Button, View } from 'react-native'

const RoomTurn = props => {
  const requestNewTurn = () => {
    console.log('hi')
  }

  if (props.turnNumber) return null

  return (
    <View>
      <Button
        onPress={requestNewTurn}
        title="Get a new Turn"
        color="#841584"
        accessibilityLabel="Request service a new turn"
      />
    </View>
  )
}

export default RoomTurn
