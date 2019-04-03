import { decorate, observable, action, computed } from 'mobx'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.100.206:8000/'
})

class CartStore {
  items = []
  totalamt = 0
  totalqty = 0
  resdata = null

  addItemToCart = async item => {
    const foundItem = this.items.find(cartItem => cartItem.name == item.name)
    if (foundItem) {
      // await instance.put(`api/ctrl_order/${item.id}/`, foundItem)
      foundItem.quantity++
    } else {
      // let res = await instance.post('api/ctrl_order/', item)
      this.items.push(item)
    }
    console.log("ADD ITEM TO CART", item.id)
    let res = await instance.post(`api/ctrl_order/${item.id}/`)
    this.resdata = res.data
    // this.totalamt = this.resdata.total
    // this.totalqty = this.resdata.quantity
  }

  removeItemFromCart (item) {
    this.items = this.items.filter(cartItem => cartItem !== item)
  }

  checkoutCart () {
    this.items = []
    // await instance.post('api/close_order/') //******
  }
  get quantity () {
    let quantity = this.totalqty
    // this.items.forEach(item => (quantity = quantity + item.quantity))
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
