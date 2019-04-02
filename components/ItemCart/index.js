import React, { Component } from 'react'
import { observer } from 'mobx-react'

// NativeBase Components
import { Text, List, Button } from 'native-base'

// Component
import CartItem from './CartItem'

// Store
import CartStore from '../../stores/cartStore'

class ItemCart extends Component {
  handleCheckOut = () => {
    CartStore.checkoutCart()
    this.props.navigation.navigate('ItemList')
  }

  render () {
    const items = CartStore.items
    let cartItems
    if (items) {
      cartItems = items.map(item => <CartItem item={item} key={item.id} />)
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.handleCheckOut}>
          <Text>Checkout</Text>
        </Button>
      </List>
    )
  }
}

export default observer(ItemCart)
