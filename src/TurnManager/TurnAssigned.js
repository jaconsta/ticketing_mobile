import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

class TurnAssigned extends React.Component {
  render () {
    const { turnNumber } = this.props
    if (turnNumber === null || turnNumber < 1) return null
    return (
      <View style={styles.turnContainerStyle}>
        <View><Text style={styles.turnNumberStyle}>{turnNumber}</Text></View>
        <View><Text>My turn</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  turnContainerStyle: {
    textAlign: 'center',
    paddingBottom: 30
  },
  turnNumberStyle: {
    fontSize: 240
  }
})

export default TurnAssigned
