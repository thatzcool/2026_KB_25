// main.js
// 애플리케이션의 시작점입니다.
// 1) Vue 앱을 생성하고
// 2) Router를 등록하고
// 3) Pinia를 등록한 뒤
// 4) #app 요소에 실제 화면을 마운트합니다.

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Vue 애플리케이션 인스턴스 생성
const app = createApp(App);

// 전역 상태 관리용 Pinia 인스턴스 생성
const pinia = createPinia();

// 라우터 등록: URL 변화에 따라 페이지 컴포넌트를 바꿔 보여줍니다.
app.use(router);

// Pinia 등록: 모든 컴포넌트에서 store를 사용할 수 있게 합니다.
app.use(pinia);

// public/index.html의 <div id="app"></div>에 앱을 연결합니다.
app.mount('#app');
