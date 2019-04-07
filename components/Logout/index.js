import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, List } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Logout extends Component {
  handleLogout = () => {
    console.log("HELLOOO");
    authStore.logout(this.props.navigation);

    //this.props.navigation.navigate("Login");
  };
  render() {
    return (
      <List>
        <Button full danger onPress={this.handleLogout}>
          <Text>Logout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(Logout));
