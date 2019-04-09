import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { Button, Text, Icon } from 'native-base'
import { observer } from 'mobx-react'

// Stores
import CartStore from '../../stores/cartStore'
import authStore from '../../stores/authStore'
import styles from './styles'

class CartButton extends Component {
  componentDidMount () {
    // if (CartStore.orders) {
    //   CartStore.qtySum = CartStore.orders.order_sum
    // } else {
    //   CartStore.qtySum = ' '
    // }
    if (authStore.user) {
      CartStore.fetchOrder()
    }
  }

  handleCartItems = () => {
    if (authStore.user) {
      if (CartStore.orders) {
        this.props.navigation.navigate('ItemCart')
      }
    }
  }

  render () {
    return (
      <Button light transparent onPress={() => this.handleCartItems()}>
        <Text style={styles.text}>
          {CartStore.quantity + ' '}
          <Icon
            type='FontAwesome'
            name='opencart'
            style={{ color: 'blue', fontSize: 25 }}
          />
        </Text>
      </Button>
    )
  }
}

export default withNavigation(observer(CartButton))
