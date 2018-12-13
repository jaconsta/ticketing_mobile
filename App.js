import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

import Main from './src/MainComponent'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
