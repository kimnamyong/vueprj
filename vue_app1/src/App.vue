<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/notice">Notice</router-link> |
      <router-link to="/user/5">UserDetails</router-link>
    </nav>
    <MyText v-on:text="showText"/>
    {{text}}
    <router-view />
  </div>
</template>

<script>
import MyText from "./MyText.vue";

export default {
  data(){
    return{
      text:""
    }
  },
  methods: {
    showText(value){
      this.text=value;
    }
  },
  components:{MyText}

};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
