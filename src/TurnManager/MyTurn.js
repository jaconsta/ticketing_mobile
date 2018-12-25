import React from 'react'
import { View, Text } from 'react-native'

import {subscribeToMyTurn} from '../services/sockets'

class MyTurn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }
  componentDidMount() {
    subscribeToMyTurn(this.showTurn)
  }

  showTurn = () =>{
    this.setState({show: true})
  }

  render () {
    const {show} = this.state
    if (!show) return null

    return (
      <View>
        <Text>Your turn</Text>
      </View>
    )
  }
}

  export default MyTurn
