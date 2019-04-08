import { createStackNavigator } from "react-navigation";

import LolScreen from "../components/Lol";
import ItemList from "../components/ItemList";
import ItemDetail from "../components/ItemDetail";
import ItemCart from "../components/ItemCart";

const LolStack = createStackNavigator(
  {
    ItemList: ItemList,
    ItemDetail: ItemDetail,
    ItemCart: ItemCart,
  },
  {
    defaultNavigationOptions: {
      title: "TheShop",
    },
  }
);

export default LolStack;
