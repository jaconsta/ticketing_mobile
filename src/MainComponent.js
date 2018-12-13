import React from 'react'

import { View, Text, StatusBar } from 'react-native'
import AppBar from './AppBar'
import TurnManager from './TurnManager'

class MainComponent extends React.Component {
  render () {
    return (
        <View>
          <AppBar />
          <TurnManager />
        </View>
    )
  }
}

export default MainComponent
