import "shitajicss/docs/css/shitaji.min.css";
import "./scss/style.scss"
import Vue from 'vue'
import App from './App.vue'
import router from './router';

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF5xdo1mQ2MpjQsSqC-hTy1NdnLq4IKns",
  authDomain: "mymarkdown-30c26.firebaseapp.com",
  databaseURL: "https://mymarkdown-30c26.firebaseio.com",
  projectId: "mymarkdown-30c26",
  storageBucket: "mymarkdown-30c26.appspot.com",
  messagingSenderId: "947460544132",
  appId: "1:947460544132:web:c40cbefe7ca3a95f9754d1",
  measurementId: "G-D5GT7FHLRB"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
