import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//Store
import CartStore from "../../stores/cartStore";

// Components
import CartButton from "../CartButton";

class ItemDetail extends Component {
  state = {
    name: "",
    price: "",
    quantity: 1
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("item", {}).name,
    headerStyle: { backgroundColor: "#abc" },
    headerRight: <CartButton />
  });

  // changeName = value => {
  //   this.setState({
  //     name: value
  //   });
  // };

  // changePrice = value => {
  //   this.setState({
  //     price: value
  //   });
  // };

  handleAdd = () => {
    let myitem = {
      name: this.props.navigation.getParam("item", {}).name,
      price: this.props.navigation.getParam("item", {}).price,
      image: this.props.navigation.getParam("item", {}).image,
      quantity: 1
    };
    CartStore.addItemToCart(myitem);
  };

  render() {
    const item = this.props.navigation.getParam("item", {});
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {item.name + "\n"}
                <Text note>{item.description}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: item.image }} />
            </Right>
          </ListItem>

          <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(ItemDetail);
