import React, { Component } from 'react'
import { observer } from 'mobx-react'

// NativeBase Components
import { Form, Item, Input, Button, Text } from 'native-base'

// Store
import authStore from '../../stores/authStore'

class Register extends Component {
  state = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: ''
  }

  handleRegister = () => {
    authStore.signupUser(this.state, this.props.navigation)
  }

  render () {
    return (
      <Form>
        <Item>
          <Input
            placeholder='Username'
            autoCapitalize='none'
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </Item>

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

        <Button full success onPress={this.handleRegister}>
          <Text>Login</Text>
        </Button>
        {/* <Text>{authStore.signinmsg}</Text> */}
      </Form>
    )
  }
}
export default observer(Register)
