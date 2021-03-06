import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";
import Logout from "../../components/Logout";

// Store
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class ItemCart extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Cart",
    headerStyle: { backgroundColor: "#abc" },
    headerRight: <Logout />,
  });

  componentDidMount() {
    if (authStore.user) {
      if (CartStore.orders) {
        CartStore.fetchCartItems();
      }
    }
  }

  handleLogout = () => {
    console.log("HELLOOO");
    authStore.logout(this.props.navigation);

    //this.props.navigation.navigate("Login");
  };

  handleCheckOut = () => {
    CartStore.checkoutCart();
    this.props.navigation.navigate("ItemList");
  };

  render() {
    console.log("cart item loading in ITEM CART...");
    let cartItems;

    if (CartStore.items) {
      const items = CartStore.items;

      if (items) {
        cartItems = items.map(item => (
          <CartItem cartitem={item} key={item.id} />
        ));
      }
    }
    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handleCheckOut}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default withNavigation(observer(ItemCart));
