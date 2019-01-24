import React from 'react'

import { View, Text, StatusBar } from 'react-native'
import AppBar from './AppBar'
import UserDataForm from './components/UserDataForm'
import CompanyCodeForm from './components/CompanyCodeForm'
import QueueTurn from './components/QueueTurn'
import TurnManager from './TurnManager'

class MainComponent extends React.Component {
  render () {
    return (
        <View>
          <AppBar />
          <UserDataForm />
          <CompanyCodeForm />
          <QueueTurn />
        </View>
    )
  }
}

export default MainComponent
