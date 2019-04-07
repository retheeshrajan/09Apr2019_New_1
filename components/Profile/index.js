import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, Text, View, ScrollView, Spinner, Button } from "native-base";
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
    myProfile: null,
  };

  componentDidMount() {
    //   if (authStore.profile) {
    //     // authStore.getProfile(authStore.user)
    //     this.setState({ first_name: authStore.profile.first_name })
    //     this.setState({ last_name: authStore.profile.last_name })
    this.setState({ myProfile: authStore.myProfile });
    //   }
  }

  handleLogout = () => {
    if (authStore.user) {
      authStore.logout();
      this.props.navigation.navigate("Login");
    }
  };

  handleUpdateProfile = () => {
    if (authStore.user) {
      this.props.navigation.navigate("UpdateProfile");
    }
  };

  render() {
    // if (!authStore.profile) {
    //   return <Spinner />
    // }
    this.setState({ myProfile: authStore.myProfile });

    return (
      <Content>
        <View>
          <ScrollView>
            <Text>First Name : {this.state.myProfile.first_name}</Text>
            <Text>Last Name : {this.state.myProfile.last_name}</Text>
            <Text>Email : {this.state.myProfile.email}</Text>
            <Button full danger onPress={this.handleUpdateProfile}>
              <Text>Update profile</Text>
            </Button>
          </ScrollView>
        </View>
      </Content>
    );
  }
}
export default observer(Profile);
