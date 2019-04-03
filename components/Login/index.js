import React, { Component } from 'react'
import { observer } from 'mobx-react'

// NativeBase Components
import { Form, Item, Input, Button, Text } from 'native-base'

// Store
import authStore from '../../stores/authStore'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLogin = () => {
    authStore.loginUser(this.state, this.props.navigation)
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
        <Item last>
          <Input
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full success onPress={this.handleLogin}>
          <Text>Login</Text>
        </Button>
        <Text>{authStore.signinmsg}</Text>
      </Form>
    )
  }
}
export default observer(Login)
