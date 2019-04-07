import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Store
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class ItemCart extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Cart",
    headerStyle: { backgroundColor: "#abc" },
    headerRight: (
      <Button full danger onPress={this.handleLogout}>
        <Text>Logout</Text>
      </Button>
    ),
  });

  componentDidMount() {
    CartStore.fetchCartItems();
  }

  handleLogout = () => {
    authStore.logout(this.props.navigation);

    //this.props.navigation.navigate("Login");
  };

  handleCheckOut = () => {
    CartStore.checkoutCart();
    this.props.navigation.navigate("ItemList");
  };

  render() {
    const items = CartStore.items;
    console.log("cart item loading in ITEM CART...");
    let cartItems;
    if (items) {
      cartItems = items.map(item => <CartItem cartitem={item} key={item.id} />);
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

export default observer(ItemCart);
