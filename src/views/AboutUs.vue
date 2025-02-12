<template>
  <!-- 关于我们页面的根容器 -->
  <div class="about-us-container">
    <!-- 页面标题 -->
    <h1>关于我们</h1>
    <!-- 页面内容描述 -->
    <p>这里是关于我们页面内容。</p>
    <!-- 返回首页的链接 -->
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
/**
 * 关于我们页面的组件定义
 * @module AboutUs
 */
export default {
  /**
   * 组件的名称
   * @type {string}
   */
  name: 'AboutUs'
}
</script>

<style scoped>
.about-us-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh; /* 占满整个视口高度 */
  background-color: #e6f7ff; /* 设置背景颜色为浅蓝色 */
}
</style>