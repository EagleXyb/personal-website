<template>
  <!-- 核心产品页面的根容器 -->
  <div class="core-products-container">
    <!-- 页面标题 -->
    <h1>核心产品</h1>
    <!-- 页面内容描述 -->
    <p>这里是核心产品页面内容。</p>
    <!-- 返回首页的链接 -->
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
/**
 * 核心产品页面的组件定义
 * @module CoreProducts
 */
export default {
  /**
   * 组件的名称
   * @type {string}
   */
  name: 'CoreProducts'
}
</script>

<style scoped>
.core-products-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh; /* 占满整个视口高度 */
  background-color: #e6f7ff; /* 设置背景颜色为浅蓝色 */
}
</style>