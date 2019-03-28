import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import React from "react";
import CoffeeList from "../components/CoffeeList";
import CoffeeDetail from "../components/CoffeeDetail";
import CoffeeCart from "../components/CoffeeCart";
import LoginScreen from "../components/Login";
import { Icon } from "native-base";
const ProfileStack = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail,
    CoffeeCart: CoffeeCart,
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "CoffeeList",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
