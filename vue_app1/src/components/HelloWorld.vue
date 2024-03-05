<template>
  <div>
    <h1>안녕하세요</h1>
    <p>      {{message}}    </p>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String
  }
}
</script>

<style scoped>
p{ color:blue}
</style>
