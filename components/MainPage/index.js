import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, List, Container, Content } from "native-base";
import { StyleSheet } from "react-native";

// Store
import authStore from "../../stores/authStore";
import CartStore from "../../stores/cartStore";

class MainPage extends Component {
  handleItemList = () => {
    console.log("Products..");
    if (authStore.user) {
      this.props.navigation.navigate("ItemList");
    }
  };

  handleProfile = () => {
    if (authStore.user) {
      console.log("Profile..");
      this.props.navigation.navigate("Profile");
    }
  };

  handleMyCart = () => {
    console.log("My Cart..");
    if (authStore.user) {
      if (CartStore.orders) {
        this.props.navigation.navigate("ItemCart");
      }
    }
  };

  handleLogout = () => {
    console.log("Logout....");
    if (authStore.user) {
      authStore.logout(this.props.navigation);
    }
  };

  handleOrderHistory = () => {
    console.log("Your history....");
    if (authStore.user) {
      CartStore.fetchHistory(this.props.navigation);
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Button block success onPress={this.handleItemList}>
            <Text>View Product List</Text>
          </Button>
          <Button block warning onPress={this.handleProfile}>
            <Text>View Profile</Text>
          </Button>
          <Button block question onPress={this.handleMyCart}>
            <Text>View MyCart</Text>
          </Button>

          <Button block info onPress={this.handleOrderHistory}>
            <Text>My Order History</Text>
          </Button>

          <Button block danger onPress={this.handleLogout}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    padding: 20,
    marginTop: 100,
    alignContent: "center",
  },
});

export default withNavigation(observer(MainPage));
