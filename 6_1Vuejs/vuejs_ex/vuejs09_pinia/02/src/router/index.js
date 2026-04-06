// router/index.js
// URL 주소와 화면 컴포넌트를 연결하는 라우터 설정 파일입니다.

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // 브라우저의 history API를 사용하여 깔끔한 URL을 만듭니다.
  history: createWebHistory(import.meta.env.BASE_URL),

  // path: 실제 주소, name: 라우트 이름, component: 연결할 화면 컴포넌트
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      // lazy loading 예시
      // about 페이지에 처음 진입할 때만 해당 파일을 불러옵니다.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
