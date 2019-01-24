import React from 'react'
import { Button, View, StyleSheet } from 'react-native'

import {separateTurn} from '../services/sockets'

const RoomTurn = props => {
  const requestNewTurn = () => {
    separateTurn()
  }

  if (props.turnNumber) return null

  return (
    <View style={styles.TurnButton}>
      <Button
        onPress={requestNewTurn}
        title="Get a new Turn"
        color="#F3B749"
        accessibilityLabel="Request service a new turn"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  TurnButton: {
    marginTop: 20
    // color: 'blue',
    // fontWeight: 'bold',
    // fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


export default RoomTurn
