import React from 'react'
import { View, Text } from 'react-native'

class MyTurn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
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
