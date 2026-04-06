<script setup>
// AboutView.vue
// Composition API 방식에서 Pinia store를 직접 사용하는 예제입니다.
// storeToRefs를 사용하면 state/getter를 구조 분해 할당해도 반응성이 유지됩니다.

import { storeToRefs } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';

// store 인스턴스 생성
const optionStore = useCountOptionStore();
const setupStore = useCountSetupStore();

// state/getter를 ref로 꺼내서 템플릿에서 반응형으로 사용
const { num, doubleNum } = storeToRefs(optionStore);
const { num: setupNum, doubleNum: setupDoubleNum } = storeToRefs(setupStore);

// action은 store 객체에서 직접 호출합니다.
function runOptionIncrement() {
  optionStore.increment();
}

function runSetupIncrement() {
  setupStore.increment();
}

async function loadData() {
  await optionStore.getJSON('https://jsonplaceholder.typicode.com/posts');
  await setupStore.getJSON('https://jsonplaceholder.typicode.com/posts');
}
</script>

<template>
  <section>
    <h1>About View</h1>
    <p>Option Store num: {{ num }}</p>
    <p>Option Store doubleNum: {{ doubleNum }}</p>

    <p>Setup Store num: {{ setupNum }}</p>
    <p>Setup Store doubleNum: {{ setupDoubleNum }}</p>

    <div class="button-group">
      <button @click="runOptionIncrement">Option Store 증가</button>
      <button @click="runSetupIncrement">Setup Store 증가</button>
      <button @click="loadData">두 Store API 호출</button>
    </div>
  </section>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
