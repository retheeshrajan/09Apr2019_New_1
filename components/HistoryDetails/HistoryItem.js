import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import cartStore from "../../stores/cartStore";

class HistoryItem extends Component {
  render() {
    const { cartitem } = this.props;
    //console.log(this.props.cartitem)
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}>
            {" "}
            {cartitem.item.name}{" "}
          </Text>
          <Text note style={{ marginLeft: 16 }}>
            {cartitem.price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black" }}>{cartitem.quantity}</Text>
        </Body>
        <Right />
      </ListItem>
    );
  }
}

export default observer(HistoryItem);
