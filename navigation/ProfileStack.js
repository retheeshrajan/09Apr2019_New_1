import { createStackNavigator } from 'react-navigation'

import ProfileScreen from '../components/Profile'
import React from 'react'
import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemDetail'
import ItemCart from '../components/ItemCart'
import LoginScreen from '../components/Login'
import { Icon } from 'native-base'

const ProfileStack = createStackNavigator(
  {
    ItemList: ItemList,
    ItemDetail: ItemDetail,
    ItemCart: ItemCart,
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'WhatTheShop'
    },
    headerStyle: { backgroundColor: '#00ff00' }
  }
)

export default ProfileStack
