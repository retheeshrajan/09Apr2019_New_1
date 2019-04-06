import React, { Component } from 'react'
import { observer } from 'mobx-react'

// NativeBase Components
import { Form, Item, Input, Button, Text } from 'native-base'

// Store
import authStore from '../../stores/authStore'

class UpdateProfile extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: ''
  }

  handleProfile = () => {
    authStore.updateProfile(this.state, this.props.navigation)
  }

  render () {
    return (
      <Form>
        <Item>
          <Input
            placeholder='firstname'
            autoCapitalize='none'
            onChangeText={firstname => this.setState({ firstname })}
          />
        </Item>
        <Item>
          <Input
            placeholder='lastname'
            autoCapitalize='none'
            onChangeText={lastname => this.setState({ lastname })}
          />
        </Item>
        <Item last>
          <Input
            placeholder='email'
            autoCapitalize='none'
            onChangeText={email => this.setState({ email })}
          />
        </Item>

        <Button full success onPress={this.handleProfile}>
          <Text>Update</Text>
        </Button>
        {/* <Text>{authStore.signinmsg}</Text> */}
      </Form>
    )
  }
}
export default observer(UpdateProfile)
