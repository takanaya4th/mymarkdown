<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <button @click="googleLogin">Googleアカウントでログイン</button>
  </div>
</template>

<script>
  import * as firebase from 'firebase';
  export default {
    name: "home",
    data() {
      return {
        msg: "Welcome to MyMarkdown"
      };
    },
    methods: {
      googleLogin: function () {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      }
    }
  };
</script>

<style scoped>

</style>
