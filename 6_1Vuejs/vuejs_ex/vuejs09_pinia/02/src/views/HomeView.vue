<script>
// HomeView.vue
// Options API 컴포넌트에서 Pinia store를 mapState, mapActions로 연결하는 예제입니다.

import { mapActions, mapState } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';

export default {
  computed: {
    // countOption store의 num, doubleNum을 this.num, this.doubleNum으로 연결
    ...mapState(useCountOptionStore, ['num', 'doubleNum']),

    // countSetup store의 값을 다른 이름으로 매핑
    ...mapState(useCountSetupStore, {
      myNum: 'num',
      myDouble: 'doubleNum',
    }),
  },

  methods: {
    // countOption store의 action을 현재 컴포넌트 메서드처럼 사용
    ...mapActions(useCountOptionStore, ['increment', 'getJSON']),

    // countSetup store의 action을 다른 이름으로 매핑
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment',
      myJSON: 'getJSON',
    }),
  },
};
</script>

<template>
  <section>
    <h2>Home View</h2>

    <p>Option Store num: {{ num }}</p>
    <p>Option Store doubleNum: {{ doubleNum }}</p>

    <p>Setup Store num: {{ myNum }}</p>
    <p>Setup Store doubleNum: {{ myDouble }}</p>

    <div class="button-group">
      <button @click="increment">Option Store 증가</button>
      <button @click="myIncre">Setup Store 증가</button>
      <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">
        Option Store API 호출
      </button>
      <button @click="myJSON('https://jsonplaceholder.typicode.com/posts')">
        Setup Store API 호출
      </button>
    </div>
  </section>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
