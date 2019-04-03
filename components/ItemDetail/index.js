import React, { Component } from 'react'
import { observer } from 'mobx-react'

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
} from 'native-base'

// Style
import styles from './styles'

// Store
import CartStore from '../../stores/cartStore'
import authStore from '../../stores/authStore'

// Components
import CartButton from '../CartButton'

class ItemDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item', {}).name,
    headerStyle: { backgroundColor: '#abc' },
    headerRight: <CartButton />
  })

  handleAdd = () => {
    if (authStore.user) {
      console.log('user - order begins')
      let item = this.props.navigation.getParam('item', {})
      console.log('ITEM DETAAAIL', item)
      let myitem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }
      console.log(`user - order begins - got items ${myitem}`)
      CartStore.addItemToCart(myitem)
    } else {
      console.log('user - need login to add item')
      this.props.navigation.navigate('Login')
    }
  }

  render () {
    const item = this.props.navigation.getParam('item', {})
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {item.name + '\n'}
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
    )
  }
}

export default observer(ItemDetail)
