import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import HistoryItem from "./HistoryItem";
//import Logout from "../../components/Logout";

// Store
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class HistoryDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Order Details",
    headerStyle: { backgroundColor: "#abc" },
  });

  componentDidMount() {
    if (authStore.user) {
      if (CartStore.orders) {
        CartStore.fetchCartItems();
      }
    }
  }

  render() {
    console.log("cart item loading in history details...");
    let cartItems;

    if (CartStore.items) {
      const items = CartStore.items;

      if (items) {
        cartItems = items.map(item => (
          <HistoryItem cartitem={item} key={item.id} />
        ));
      }
    }
    return <List>{cartItems}</List>;
  }
}

export default withNavigation(observer(HistoryDetails));
