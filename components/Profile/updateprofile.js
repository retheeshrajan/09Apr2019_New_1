import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class UpdateProfile extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
  };

  handleProfile = () => {
    if (authStore.user) {
      console.log("handleProfile..");
      authStore.updateProfile(this.state, this.props.navigation);
    }
  };

  render() {
    return (
      <Form>
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

        <Button full success onPress={this.handleProfile}>
          <Text>Update</Text>
        </Button>
        {/* <Text>{authStore.signinmsg}</Text> */}
      </Form>
    );
  }
}
export default observer(UpdateProfile);
