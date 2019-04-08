import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import React from "react";

import LoginScreen from "../components/Login";
import { Icon } from "native-base";
import RegisterScreen from "../components/Profile/Register";
import UpdateProfileScreen from "../components/Profile/updateprofile";
import MainScreen from "../components/MainPage";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    UpdateProfile: UpdateProfileScreen,
    MainPage: MainScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "WhatTheShop",
    },
    headerStyle: { backgroundColor: "#00ff00" },
  }
);

export default ProfileStack;
