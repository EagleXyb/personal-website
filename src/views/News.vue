<template>
  <!-- 新闻资讯页面的根容器 -->
  <div>
    <!-- 页面标题 -->
    <h1>新闻资讯</h1>
    <!-- 页面内容描述 -->
    <p>这里是新闻资讯页面内容。</p>
    <!-- 返回首页的链接 -->
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
/**
 * 新闻资讯页面的组件定义
 * @module News
 */
export default {
  /**
   * 组件的名称
   * @type {string}
   */
  name: 'News'
}
</script>
