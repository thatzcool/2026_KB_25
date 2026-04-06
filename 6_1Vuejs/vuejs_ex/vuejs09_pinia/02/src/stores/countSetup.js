// stores/countSetup.js
// Pinia의 Setup Store 방식 예제입니다.
// ref, computed, function을 조합해 Composition API처럼 작성합니다.

import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useCountSetupStore = defineStore('count', () => {
  // state 역할을 하는 반응형 데이터
  const num = ref(0);

  // getter 역할을 하는 계산 값
  const doubleNum = computed(() => num.value * 2);

  // action 역할을 하는 함수
  function increment() {
    num.value += 1;
  }

  async function getJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Setup Store API Result:', data);
    return data;
  }

  // 외부 컴포넌트에서 사용할 값과 함수를 반드시 return 해야 합니다.
  return {
    num,
    doubleNum,
    increment,
    getJSON,
  };
});
