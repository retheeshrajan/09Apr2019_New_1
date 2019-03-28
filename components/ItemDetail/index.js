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
    drink: "Cappuccino",
    option: "Small"
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("item", {}).name,
    headerRight: <CartButton />
  });

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    let item = {
      ...this.state,
      quantity: 1
    };
    CartStore.addItemToCart(item);
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
