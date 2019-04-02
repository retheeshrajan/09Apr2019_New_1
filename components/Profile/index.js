import React, { Component } from 'react'
import { observer } from 'mobx-react'

// NativeBase Components
import { Content, Text } from 'native-base'

// Store
import authStore from '../../stores/authStore'

class Profile extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: ''
  }

  componentDidUpdate (prevProps) {
    if (this.props.userID !== prevProps.userID) {
      authStore.getProfile(this.props.userID)
    }
  }

  handleLogout = () => {
    if (authStore.user) {
      authStore.logout()
      this.props.navigation.navigate('ItemList')
    }
  }

  render () {
    const profilestr = authStore.profile
    return (
      <Content>
        <View>
          <ScrollView>
            <Text>First Name : {profilestr.first_name}</Text>
            <Text>Last Name : {profilestr.last_name}</Text>
            <Text>Email : {profilestr.email}</Text>
          </ScrollView>
        </View>
      </Content>
    )
  }
}
export default observer(Profile)
