<template>
  <div id="app">
    <h1>MyText</h1>
    <MyText   
      v-on:text="showText"
    />
    {{text}}
  </div>
</template>

<script>
import MyText from "./MyText.vue";
export default {
  name: "App",
 data(){
    return{
      text :""
    }
  },
  methods: {
    showText(value){
      this.text=value;
    }
  },
 
  components: { MyText },
};
</script>

<style scoped>
#app {
  border: 1px solid;
  text-align: center;
  padding: 30px;
}
</style>
