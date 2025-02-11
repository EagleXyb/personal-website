<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">首页</router-link>  
      <router-link to="/core-products">核心产品</router-link>  
      <router-link to="/typical-applications">典型应用</router-link>  
      <router-link to="/news">新闻资讯</router-link>  
      <router-link to="/about-us">关于我们</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  background-color: rgba(128, 128, 128, 0.5); /* 灰色透明背景色 */
  position: fixed; /* 固定在窗口上方 */
  top: 0; /* 距离顶部0像素 */
  left: 0; /* 距离左侧0像素 */
  width: 100%; /* 宽度占满整个窗口 */
  height: 98px; /* 设置导航栏高度为98px */
  z-index: 1000; /* 确保导航栏在其他元素之上 */
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-family: "Microsoft YaHei", sans-serif; /* 设置字体为微软雅黑 */
  font-size: 16px; /* 设置字体大小为16px */
}

.navbar a:hover {
  text-decoration: none;
}
</style>
