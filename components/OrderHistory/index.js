import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { ScrollView, View, Button, Text } from 'react-native'

// NativeBase Components
import { List, Content } from 'native-base'

import { withNavigation } from 'react-navigation'

// Store

import cartStore from '../../stores/cartStore'
import authStore from '../../stores/authStore'

// Component
import TheOrder from './TheOrder'
import CartButton from '../CartButton'

class OrderHistory extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'History',
    headerLeft: null,
    headerStyle: { backgroundColor: '#abc' }
  })

  // componentDidMount () {}

  handleHome = () => {
    this.props.navigation.navigate('MainPage')
  }

  render () {
    const orders = cartStore.orderhistory
    let myOrders
    if (orders) {
      myOrders = orders.map(order => <TheOrder order={order} key={order.id} />)
    }
    return (
      <>
        <Content>
          <View>
            <ScrollView>
              <List>{myOrders}</List>
            </ScrollView>
          </View>
        </Content>
        <List>
          <Button full success onPress={this.handleHome} title='Home'>
            <Text>Home</Text>
          </Button>
        </List>
      </>
    )
  }
}

export default withNavigation(observer(OrderHistory))
