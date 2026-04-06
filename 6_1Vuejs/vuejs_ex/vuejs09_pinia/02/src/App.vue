<script setup>
// App.vue
// 최상위 레이아웃 컴포넌트입니다.
// RouterLink는 메뉴 이동용 링크, RouterView는 현재 경로에 맞는 페이지가 렌더링되는 자리입니다.

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <h1>Vue Router + Pinia 예제</h1>

    <!-- 상단 메뉴 영역 -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <!-- 현재 주소(path)에 맞는 페이지 컴포넌트가 이 위치에 출력됩니다. -->
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

a.router-link-active {
  color: #42b883;
}
</style>
