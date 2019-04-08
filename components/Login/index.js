import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleLogin = () => {
    if (this.state.username && this.state.password) {
      authStore.loginUser(this.state, this.props.navigation);
    }
  };

  handleRegister = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    if (authStore.user) {
      this.props.navigation.navigate;
    }
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full success onPress={this.handleLogin}>
          <Text>Login</Text>
        </Button>
        <Button full warning onPress={this.handleRegister}>
          <Text>Register user</Text>
        </Button>
        <Text>{authStore.signinmsg}</Text>
      </Form>
    );
  }
}
export default observer(Login);
