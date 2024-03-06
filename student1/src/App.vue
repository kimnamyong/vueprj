<template>
  <h1>테스트 결과는 console에 출력됨</h1>
</template>

<script>
import { test1, test2 } from './test_axios3';

export default {
  name: 'App',
  mounted() {
    test1();
    test2();
  }
}
</script>

<style>
</style>
