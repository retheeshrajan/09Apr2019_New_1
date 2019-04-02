import { decorate, observable, action, computed } from 'mobx'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.100.206:8000/'
})

class CartStore {
  items = []
  orderno = 0

  addItemToCart = async item => {
    const foundItem = this.items.find(cartItem => cartItem.name == item.name)
    if (foundItem) {
      await instance.put('api/updateorderitem/cartid/', foundItem)
      foundItem.quantity++
    } else {
      let res = await instance.post('api/updateorderitem/cartid', item)
      this.items.push(res.data)
    }
  }

  removeItemFromCart (item) {
    this.items = this.items.filter(cartItem => cartItem !== item)
  }

  checkoutCart () {
    this.items = []
  }
  get quantity () {
    let quantity = 0
    this.items.forEach(item => (quantity = quantity + item.quantity))
    return quantity
  }
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed
})

export default new CartStore()
