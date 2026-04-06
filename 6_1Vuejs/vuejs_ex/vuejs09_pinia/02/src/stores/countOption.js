// stores/countOption.js
// Pinia의 Options API 방식 store 예제입니다.
// state, getters, actions를 객체 형태로 나누어 작성합니다.

import { defineStore } from 'pinia';

export const useCountOptionStore = defineStore('countOption', {
  // state: store가 관리하는 데이터
  state: () => ({
    num: 0,
  }),

  // getters: state를 가공해서 반환하는 계산 속성
  getters: {
    doubleNum: (state) => state.num * 2,
  },

  // actions: state를 변경하거나 비동기 작업을 처리하는 함수
  actions: {
    increment() {
      this.num += 1;
    },

    async getJSON(url) {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Option Store API Result:', data);
      return data;
    },
  },
});
