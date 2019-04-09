import { createStackNavigator } from "react-navigation";

import LolScreen from "../components/Lol";
import ItemList from "../components/ItemList";
import ItemDetail from "../components/ItemDetail";
import ItemCart from "../components/ItemCart";
import MainScreen from "../components/MainPage";
import LoginScreen from "../components/Login";
import OrderHistory from "../components/OrderHistory";
// import HistoryDetails from "../components/HistoryDetails";

const LolStack = createStackNavigator(
  {
    ItemList: ItemList,
    ItemDetail: ItemDetail,
    ItemCart: ItemCart,
    MainPage: MainScreen,
    Login: LoginScreen,
    // HistoryDetails: HistoryDetails,
  },
  {
    defaultNavigationOptions: {
      title: "TheShop",
    },
  }
);

export default LolStack;
