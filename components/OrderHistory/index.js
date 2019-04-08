import React, { Component } from "react";
import { observer } from "mobx-react";
import { ScrollView, View } from "react-native";

// NativeBase Components
import { List, Content } from "native-base";

// Store

import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

// Component
import TheOrder from "./TheOrder";
import CartButton from "../CartButton";

class OrderHistory extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Item List",
    headerLeft: null,
    headerStyle: { backgroundColor: "#abc" },
    headerRight: <CartButton />
  });

  componentDidMount() {}

  render() {
    const orders = cartStore.orderhistory;
    let myOrders;
    if (orders) {
      myOrders = orders.map(order => <TheOrder order={order} key={order.id} />);
    }
    return (
      <Content>
        <View>
          <ScrollView>
            <List>{myOrders}</List>
          </ScrollView>
        </View>
      </Content>
    );
  }
}

export default observer(OrderHistory);
