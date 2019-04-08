import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";

// Stores
import CartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CartButton extends Component {
  handleCartItems = () => {
    if (authStore.user) {
      if (CartStore.orders) {
        this.props.navigation.navigate("ItemCart");
      }
    }
  };

  render() {
    return (
      <Button light transparent onPress={() => this.handleCartItems()}>
        <Text>
          {CartStore.quantity + " - "}
          <Icon
            type="FontAwesome"
            name="coffee"
            style={{ color: "white", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(CartButton));
