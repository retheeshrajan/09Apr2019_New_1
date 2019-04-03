import { decorate, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.143/"
});

class ItemStore {
  items = null;
  item = null;
  loading = true;

  fetchAllItems = async () => {
    try {
      console.log("wait for items....");
      let res = await instance.get("api/list/");
      // let res = [
      //   {
      //     name: "pc",
      //     description: "pc computer",
      //     price: "400.000"
      //   },
      //   {
      //     name: "Laptop",
      //     description: "Mobile PC",
      //     price: "425.000"
      //   }
      // ];
      let items = res.data;

      // console.log(items);
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
