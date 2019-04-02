import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { ScrollView, View } from 'react-native'

// NativeBase Components
import { List, Content } from 'native-base'

// Store
import itemStore from '../../stores/itemStore'

// Component
import TheItem from './TheItem'
import CartButton from '../CartButton'

class ItemList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Item List',
    headerLeft: null,
    headerStyle: { backgroundColor: '#abc' },
    headerRight: <CartButton />
  })
  render () {
    const items = itemStore.items
    let myItems
    if (items) {
      myItems = items.map(item => <TheItem item={item} key={item.name} />)
    }
    return (
      <Content>
        <View>
          <ScrollView>
            <List>{myItems}</List>
          </ScrollView>
        </View>
      </Content>
    )
  }
}

export default observer(ItemList)
