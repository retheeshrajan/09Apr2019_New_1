import { decorate, observable, action, computed } from 'mobx'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://10.96.3.111:8000/'
})

class CartStore {
  items = []
  orders = null
  qtySum = 'Items '

  addItemToCart = async item => {
    // const foundItem = this.items.find(cartItem => cartItem.name == item.name)
    // if (foundItem) {
    //   // await instance.put(`api/ctrl_order/${item.id}/`, foundItem)
    //   foundItem.quantity++
    // } else {
    //   // let res = await instance.post('api/ctrl_order/', item)
    //   this.items.push(item)
    // }
    console.log('ADD ITEM TO CART', item.id)
    let res = await instance.post(`api/ctrl_order/${item.id}`)
    this.orders = res.data
    this.qtySum = this.orders.orderSum
    console.log(this.orders)
    // this.totalqty = this.resdata.quantity
    this.fetchCartItems()
  }

  fetchCartItems = async () => {
    try {
      console.log('wait for cart items....')
      let res = await instance.get('api/cart/')
      let items = res.data
      this.items = items
      this.loading = false
    } catch (err) {
      console.error(err)
    }
  }

  removeItemFromCart = async item => {
    // this.items = this.items.filter(cartItem => cartItem !== item)
    let res = await instance.post(`api/deletecart/${item.id}`)
    let items = res.data
    this.items = items
    this.loading = false
  }

  checkoutCar = async () => {
    // this.items = []
    let res = await instance.post(`api/chcekout/${this.orders.id}`)
    let items = res.data
    this.items = items
    this.loading = false
  }

  get quantity () {
    let quantity = this.qtySum
    // this.items.forEach(item => (quantity = quantity + item.quantity))
    return quantity
  }
}

decorate(CartStore, {
  items: observable,
  qtySum: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed
})

export default new CartStore()
