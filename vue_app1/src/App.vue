<template>
  <div id="app">
    <h1> MyCounter1</h1>
    <MyCounter1 title="카운터1" description="첫번째 컴포넌트" />
    <MyCounter1 title="카운터2" description="두번째 컴포넌트" />
  </div>
</template>

<script>
import MyCounter1 from "./MyCounter1.vue"
export default {
  name: "App",
  components: {    MyCounter1  },
};
</script>

<style scoped>
#app {
border:1px solid;
text-align: center;
padding: 30px;
}
</style>
