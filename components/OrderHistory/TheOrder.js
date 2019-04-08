import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  ScrollView
} from "native-base";

// Style
import styles from "./styles";

// Navigation
import { withNavigation } from "react-navigation";

class TheOrder extends Component {
  //   handlePress = () => {
  //     this.props.navigation.navigate("ItemDetail", {
  //       item: this.props.item
  //     });
  //   };

  render() {
    const { order } = this.props;
    return (
      <>
        <View style={styles.thumbnail} />
        <ListItem button onPress={this.handlePress} style={styles.listitem}>
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Text style={styles.text}>ID : {order.id}</Text>
              <Text note style={styles.text}>
                Date: {order.date}
              </Text>
              <Text note style={styles.text}>
                Amount: {order.orderSum}
              </Text>
            </CardItem>
          </Card>
        </ListItem>
      </>
    );
  }
}

export default withNavigation(TheOrder);
