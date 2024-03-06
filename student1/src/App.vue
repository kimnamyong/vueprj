<template>
  <input type="text" v-model="student.studentNo" placeholder="학번" /><br>
  <input type="text" v-model="student.name" placeholder="이름" /><br>
  {{ student }}
</template>

<script>
//import { test1, test2 } from './test_axios3';

export default {
  name: 'App',
  data() {
    return {
      student: {}
    }
  }
}
</script>

<style></style>
