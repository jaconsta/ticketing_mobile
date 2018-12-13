import React from 'react'
import { View, StatusBar } from 'react-native'

const AppBar = props => {
    // StatusBar is not rendered on IOs currently
    return (
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={{ backgroundColor:'#79B45D', height: 44 }}/>
      </View>
    )
}

export default AppBar
