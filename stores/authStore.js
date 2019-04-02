// import { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { decorate, observable } from 'mobx'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

class AuthStore {
  user = null
  profile = null

  signupUser = async (userData, history) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/register/',
        userData
      )
      const user = res.data
      this.loginUser(userData, history)
    } catch (err) {
      console.log(err)
    }
  }

  getProfile = async userData => {
    try {
      let res = await axios.get('http://localhost:8000/user/')
      let profile = res.data
      this.profile = profile
      this.loading = false
    } catch (err) {
      console.log(err)
    }
  }

  loginUser = async (userData, history) => {
    try {
      const res = await axios.post('http://localhost:8000/api/login/', userData)
      const user = res.data
      this.setUser(user.token)
      history.navigate('ItemList')
    } catch (err) {
      console.error(err)
    }
  }

  checkForToken = async () => {
    const token = await AsyncStorage.getItem('myToken')
    if (token) {
      const currentTime = Date.now() / 1000
      const user = jwt_decode(token)
      if (user.exp >= currentTime) {
        this.setUser(token)
      } else {
        this.logout()
      }
    }
  }

  logout = () => {
    this.setUser()
  }

  setUser = async token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`
      const decodedUser = jwt_decode(token)
      this.user = decodedUser
      await AsyncStorage.setItem('myToken', token)
    } else {
      await AsyncStorage.removeItem('myToken')
      delete axios.defaults.headers.common.Authorization
      this.user = null
    }
  }
}

decorate(AuthStore, {
  user: observable
})

const authStore = new AuthStore()
authStore.checkForToken()

export default authStore
