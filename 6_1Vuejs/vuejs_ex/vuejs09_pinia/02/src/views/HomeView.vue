<script>
import { mapState } from 'pinia';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {},
  methods: {},
};
</script>
<template>
  <h2>num: {{ num }}</h2>

  <h2>doubleNum: {{ doubleNum }}</h2>
  <!-- 또는  {{ myDouble }}-->
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
    getJSON
  </button>
</template>
