import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { setInitialUserDetails } from '../actions/actionCreators'

class UserDataForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      errorMessage: false
    }
  }

  setUserProperty = field => value => {
    this.setState({[field]: value})
  }

  showErrorMessage () {
    this.setState({errorMessage: true})
  }

  fillUserInfo = () => {
    const {name, email} = this.state
    if (name === '' || email === '') return this.showErrorMessage()
    this.props.setInitialUserDetails(name, email)
  }

  renderErrorMessage = () => {
    if (this.state.errorMessage === false) return null
    return (<Text>All fields are required.</Text>)
  }

  render () {
    return (
      <View>
        <Text>Your personal information</Text>
        <TextInput
        onChangeText={this.setUserProperty('name')}
        value={this.state.name}
        placeholder={'Your name: Jhon Doe'}
        />
        <TextInput
        onChangeText={this.setUserProperty('email')}
        value={this.state.email}
        placeholder={'Your email: jhon.doe@wow.com'}
        />
        {this.renderErrorMessage()}
        <Button
          title="Next"
          color="#F3B749"
          onPress={this.fillUserInfo}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialUserDetails: (name, email) => dispatch(setInitialUserDetails(name, email))
  }
}

export default connect(null, mapDispatchToProps)(UserDataForm)
