import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, Text, View, ScrollView, Button } from "native-base";
import Logout from "../../components/Logout";
// Store
import authStore from "../../stores/authStore";

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Profile",
    headerStyle: { backgroundColor: "#abc" },
    headerRight: <Logout />,
  });

  state = {
    first_name: "",
    lastn_ame: "",
    email: "",
  };

  componentDidMount() {
    console.log("mount profile..");
    if (authStore.user) {
      console.log("getting profile...");
      if (authStore.profile) {
        this.setState({ first_name: authStore.profile.first_name });
        this.setState({ last_name: authStore.profile.last_name });
        this.setState({ email: authStore.profile.email });
      }
    }
  }

  handleUpdateProfile = () => {
    if (authStore.user) {
      this.props.navigation.navigate("UpdateProfile");
    }
  };

  render() {
    return (
      <Content>
        <View>
          <Text>First Name : {this.state.first_name}</Text>
          <Text>Last Name : {this.state.last_name}</Text>
          <Text>Email : {this.state.email}</Text>
          <Button full danger onPress={this.handleUpdateProfile}>
            <Text>Update profile</Text>
          </Button>
        </View>
      </Content>
    );
  }
}
export default observer(Profile);
