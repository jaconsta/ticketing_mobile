import React from 'react'
import { View, StatusBar } from 'react-native'

const AppBar = props => {
    // StatusBar is not rendered on IOs currently and I think Android either
    return (
      <View>
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />
        <View style={{ backgroundColor:'#EE3239', height: 44 }}/>
      </View>
    )
}

export default AppBar
