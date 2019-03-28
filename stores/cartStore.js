import { decorate, observable, action, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart(item) {
    const foundItem = this.items.find(
      cartItem => cartItem.drink == item.drink && cartItem.option == item.option
    );
    if (foundItem) {
      foundItem.quantity++;
    } else {
      this.items.push(item);
    }
  }

  removeItemFromCart(item) {
    this.items = this.items.filter(cartItem => cartItem !== item);
  }

  checkoutCart() {
    this.items = [];
  }
  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed
});

export default new CartStore();
