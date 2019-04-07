import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Register extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  handleRegister = () => {
    console.log("begin register..");
    if (authStore.user) {
      console.log("logout user...");
      authStore.logout();
    }
    console.log("calling signupUser...");
    authStore.signupUser(this.state, this.props.navigation);
    console.log("end signupUser...");
  };

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </Item>

        <Item>
          <Input
            placeholder="firstname"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="lastname"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>

        <Button full success onPress={this.handleRegister}>
          <Text>Signup</Text>
        </Button>
        {/* <Text>{authStore.signinmsg}</Text> */}
      </Form>
    );
  }
}
export default observer(Register);
