<template>
  <!-- 关于我们页面的根容器 -->
  <div>
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
