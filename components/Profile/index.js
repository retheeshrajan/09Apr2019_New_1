import React, { Component } from "react";
import { observer } from "mobx-react";
import { StyleSheet, Image } from "react-native";

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

  //   render() {
  //     return (
  //       <Content>
  //         <View>
  //           <Text>First Name : {this.state.first_name}</Text>
  //           <Text>Last Name : {this.state.last_name}</Text>
  //           <Text>Email : {this.state.email}</Text>
  //           <Button full danger onPress={this.handleUpdateProfile}>
  //             <Text>Update profile</Text>
  //           </Button>
  //         </View>
  //       </Content>
  //     );
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://bootdey.com/img/Content/avatar/avatar1.png",
              }}
            />

            <Text style={styles.name}>
              {this.state.first_name} {this.state.last_name}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.textInfo}>
              {this.state.first_name} {this.state.last_name}
            </Text>

            <Text style={styles.textInfo}>{this.state.email}</Text>

            <Button
              style={styles.button}
              full
              danger
              onPress={this.handleUpdateProfile}
            >
              <Text>Update profile</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1E90FF",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: "#696969",
  },
  button: {
    marginTop: 20,
  },
});

export default observer(Profile);
