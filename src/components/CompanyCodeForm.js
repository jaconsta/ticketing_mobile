import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { getCompanyInformationFromCode } from '../actions/actionCreators'

class CompanyCodeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      companyCode: '',
      showError: false
    }
  }

  setCompanyValue = companyCode => {
    this.setState({companyCode})
  }

  fillCompanyInfo = () => {
    const { companyCode } = this.state
    if (companyCode === '') return this.showError()
    this.props.getCompanyInformationFromCode(companyCode)
  }

  showError = () => {
    this.setState({showError: true})
  }

  render() {
    return (
      <View>
        <Text>The company code</Text>
        <TextInput
          value={this.state.companyCode}
          onChangeText={this.setCompanyValue}
          placeholder='ASDF123'
        />
        {this.state.showError ? (<Text>Add a company Code</Text>) : null}
        <Button
          title='Next'
          color="#F3B749"
          onPress={this.fillCompanyInfo}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCompanyInformationFromCode: (code) => dispatch(getCompanyInformationFromCode(code))
  }
}

export default connect(null, mapDispatchToProps)(CompanyCodeForm)
