//셋업 스토어
import { defineStore } from 'pinia';
import { computed, ref } from 'vue'; // 셋업 스토어 방식 : 게터를 정의하려면 computed함수를 사용한다.

export const useCountSetupStore = defineStore('countSetup', () => {
  const num = ref(10);
  const json = ref(null);

  const increment = () => {
    num.value++;
  };

  const getJson = (url) => {
    increment(); //다른 액션 호출
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        json.value = json;
      });
  };

  const doubleNum = computed(() => {
    num.value * 2;
  });
  const doubleNumPlusOne = computed(() => doubleNum.value + 1);

  return { num, doubleNum, doubleNumPlusOne, json, increment, getJson };
});
