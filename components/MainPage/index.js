import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, List } from "native-base";

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
      if (CartStore.orders.id) {
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
      <List>
        <Button full success onPress={this.handleItemList}>
          <Text>View Product List</Text>
        </Button>
        <Button full warning onPress={this.handleProfile}>
          <Text>View Profile</Text>
        </Button>
        <Button full danger onPress={this.handleMyCart}>
          <Text>View MyCart</Text>
        </Button>

        <Button full warning onPress={this.handleOrderHistory}>
          <Text>My Order History</Text>
        </Button>

        <Button full danger onPress={this.handleLogout}>
          <Text>Logout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(MainPage));
