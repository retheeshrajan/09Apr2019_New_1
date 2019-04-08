// import { Component } from 'react'
import jwt_decode from "jwt-decode";
import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";

import cartStore from "./cartStore";

const instance = axios.create({
  baseURL: "http://192.168.100.143/"
});

class AuthStore {
  user = null;
  profile = null;
  signinmsg = "";

  signupUser = async (userData, history) => {
    try {
      console.log("1");
      console.log("Userdata: ", userData);
      const res = await instance.post("api/register/", userData);
      console.log("2");
      const user = res.data;
      this.loginUser(userData, history);
    } catch (err) {
      console.log(err);
    }
  };

  updateProfile = async (userData, history) => {
    try {
      console.log("inside update profile - authStore..");
      console.log("userData in updateProfile: " + userData.first_name);

      const res = await instance.put("api/userupdate/", userData);
      console.log("done update..");
      let profile = res.data;
      this.profile = profile;
      this.loading = false;
      history.replace("Profile");
    } catch (err) {
      console.log(err);
    }
  };

  getProfile = async () => {
    try {
      console.log("reaching profile....." + this.user.user_id);
      const res = await instance.get("api/userupdate/");
      console.log("loading done profile.");
      let profile = res.data;
      this.profile = profile;
      this.loading = false;
      // history.navigate('Profile')
      console.log(this.profile.first_name);
    } catch (err) {
      console.log(err);
    }
  };

  loginUser = async (userData, history) => {
    try {
      console.log("login_1");
      console.log("userData: " + userData.username);
      console.log(res);
      const res = await instance.post("api/login/", userData);
      if (res) {
        console.log("login_2" + res.data);
        const user = res.data;
        this.setUser(user.token);
        if (this.user) {
          this.getProfile();
          history.replace("MainPage");
          //history.navigate('Profile')
        } else {
          this.signinmsg = "Login failed!";
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };

  logout = history => {
    console.log("logout begin....");
    this.setUser();
    history.replace("Login");
  };

  setUser = async token => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      await AsyncStorage.setItem("myToken", token);
    } else {
      console.log("logout begin...in else without token");
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      cartStore.qtySum = " ";
      this.user = null;
    }
  };

  get myProfile() {
    let myProfile = this.profile;

    return myProfile;
  }
}

decorate(AuthStore, {
  user: observable,
  profile: observable,
  signinmsg: observable,
  myProfile: computed
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
