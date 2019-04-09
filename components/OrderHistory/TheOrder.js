import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import Moment from 'moment'
// NativeBase Components
import {
  List,
  Body,
  Right,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  ScrollView
} from 'native-base'

// Style
import styles from './styles'

// Navigation
import { withNavigation } from 'react-navigation'

class TheOrder extends Component {
  //   handlePress = () => {
  //     this.props.navigation.navigate("ItemDetail", {
  //       item: this.props.item
  //     });
  //   };

  render () {
    const { order } = this.props
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {order.id + '\n'}
              <Text note>Order Summary: {order.order_sum}</Text>
            </Text>
          </Left>
          <Right>
            <Text note>
              Order Date: {Moment(order.date).format('DD-MM-YYYY')}
            </Text>
          </Right>
        </ListItem>
      </List>
    )
  }
}

export default withNavigation(TheOrder)
