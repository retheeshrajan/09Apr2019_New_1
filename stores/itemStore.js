import { decorate, observable } from "mobx";
import axios from "axios";

class ItemStore {
  items = null;
  item = null;
  loading = true;

  fetchAllItems = async () => {
    try {
      let res = await axios.get("http://127.0.0.1:8000/api/list/");
      let items = res.data;
      this.items = items;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(ItemStore, {
  items: observable,
  item: observable,
  loading: observable
});

let itemStore = new ItemStore();
itemStore.fetchAllItems();

export default itemStore;
