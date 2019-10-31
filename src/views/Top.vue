<template>
  <div id="top">
    <Home v-if="!isLogin"></Home>
    <Editor v-if="isLogin" :user="userData"></Editor>
    <router-link :to="{ name: 'terms' }">利用規約</router-link>
  </div>
</template>

<script>
  import * as firebase from 'firebase';
  import Home from "../components/Home";
  import Editor from "../components/Editor";

  export default {
    name: 'top',
    components: {Editor, Home},
    data() {
      return {
        isLogin: false,
        userData: null
      }
    },
    created: function () {
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          this.isLogin = true;
          this.userData = user;
        } else {
          this.isLogin = false;
          this.userData = null;
        }
      });
    },
    comments: {
      Home: Home,
      Editor: Editor
    }
  }
</script>
<style lang="scss">
  #top{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
</style>

