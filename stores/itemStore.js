import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.206:8000/",
});

class ItemStore {
  items = null;
  item = null;
  loading = true;

  fetchAllItems = async () => {
    try {
      console.log("wait for items....");
      let res = await instance.get("api/list/");
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
  loading: observable,
});

let itemStore = new ItemStore();

itemStore.fetchAllItems();

export default itemStore;
