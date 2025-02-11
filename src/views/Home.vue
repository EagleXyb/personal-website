<template>
  <!-- 首页的根容器 -->
  <div class="home-container">
    <!-- 页面标题 -->
    <h1>欢迎来到我的个人网站</h1>
    <!-- 页面内容描述 -->
    <p>这里是首页内容。</p>
    <!-- 导航到核心产品页面的链接 -->
    <router-link to="/core-products">查看核心产品</router-link>
    <!-- 导航到典型应用页面的链接 -->
    <router-link to="/typical-applications">查看典型应用</router-link>
    <!-- 导航到新闻资讯页面的链接 -->
    <router-link to="/news">查看新闻资讯</router-link>
    <!-- 导航到关于我们页面的链接 -->
    <router-link to="/about-us">关于我们</router-link>
  </div>
</template>

<script>
/**
 * 首页的组件定义
 * @module Home
 */
export default {
  /**
   * 组件的名称
   * @type {string}
   */
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh; /* 占满整个视口高度 */
}
</style>
