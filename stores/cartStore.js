import { decorate, observable, action, computed } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.143/"
});

class CartStore {
  items = [];
  orders = null;
  qtySum = " ";
  orderhistory = null;

  clearData = () => {
    console.log("I am clearing data..1");
    this.items = [];
    this.orders = null;
    this.qtySum = "";
  };

  addItemToCart = async item => {
    // const foundItem = this.items.find(cartItem => cartItem.name == item.name)
    // if (foundItem) {
    //   // await instance.put(`api/ctrl_order/${item.id}/`, foundItem)
    //   foundItem.quantity++
    // } else {
    //   // let res = await instance.post('api/ctrl_order/', item)
    //   this.items.push(item)
    // }
    try {
      console.log("ADD ITEM TO CART", item.id);
      let res = await instance.post(`api/ctrl_order/${item.id}`);
      this.orders = res.data;
      this.qtySum = this.orders.order_sum;
      // console.log(this.orders)
      // this.totalqty = this.resdata.quantity
      //await this.fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  fetchOrder = async () => {
    try {
      let res = await instance.get("api/order/");
      this.orders = res.data;
      if (this.orders) {
        this.qtySum = this.orders.order_sum;
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchHistory = async history => {
    try {
      let res = await instance.get("api/history/");
      this.orderhistory = res.data;
      history.replace("OrderHistory");
      // if (this.orders) {
      //   this.qtySum = this.orders.order_sum;
      // }
    } catch (error) {
      console.error(error);
    }
  };

  fetchCartItems = async () => {
    try {
      //console.log("order id" + this.orders.id);
      if (this.orders.id) {
        console.log("wait for cart items...." + this.orders.id);
        let res = await instance.get(`api/cart/${this.orders.id}`);
        // let res = await instance.get(`api/cartitems/${this.orders.id}`);
        let cartitems = res.data;
        this.items = cartitems;
        console.log("loaded cart items....");
      }
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  removeItemFromCart = async item => {
    // this.items = this.items.filter(cartItem => cartItem !== item)
    try {
      console.log("deleting item; please wait.....for item" + item.id);
      await instance.delete(`api/deletecart/${item.id}`);
      //let items = res.data;
      //this.items = items;
      console.log("item deleted");
      this.fetchCartItems();
      this.quantity;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  checkoutCart = async () => {
    // this.items = []
    try {
      const chkout = 1;
      console.log("checking out : " + this.orders.id);
      await instance.put(`api/checkout/${this.orders.id}`, { status: 1 });
      //let items = res.data;
      this.items = [];
      this.orders = {};
      this.qtySum = "";
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  get quantity() {
    let quantity = this.qtySum;
    // this.items.forEach(item => (quantity = quantity + item.quantity))
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  qtySum: observable,
  orders: observable,
  orderhistory: observable,
  // addItemToCart: action,
  // removeItemFromCart: action,
  // checkoutCart: action,
  quantity: computed
});

export default new CartStore();
