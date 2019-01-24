import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import {enqueueNewTurn} from '../actions/actionCreators'

const QueueTurn = props => {
  if (props.turnNumber) return null

  return (
    <View style={styles.TurnButton}>
      <Text>Get your turn for {props.companyName}</Text>
      <Button
        onPress={() => props.requestNewTurn(props.companyName, props.userEmail)}
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

const mapStateToProps = state => ({
  companyName: state.companyInformation.name,
  userEmail: state.userInfo.email
})

const mapDispatchToProps = dispatch => {
  return {
    requestNewTurn: (companyName, userEmail) => dispatch(enqueueNewTurn(companyName, userEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueueTurn)
