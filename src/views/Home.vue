<template>
  <!-- 首页的根容器 -->
  <div class="home-container">
    <!-- 轮播图 -->
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/images/slide1.png" alt="Slide 1">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slide2.png" alt="Slide 2">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slide3.png" alt="Slide 3">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slide4.png" alt="Slide 4">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/slide5.png" alt="Slide 5">
      </swiper-slide>
    </swiper>


    <!-- 导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>


    <!-- 网站设计简介区域 -->
    <div class="website-intro">
      <h2>网站设计简介</h2>
      <p>这是一个展示个人作品和项目的网站，采用了现代化的设计风格，旨在提供简洁、直观的用户体验。</p>
      <p>网站的主要功能包括：</p>
      <ul>
        <li>展示核心产品和服务</li>
        <li>介绍典型应用案例</li>
        <li>发布最新的新闻资讯</li>
        <li>提供关于我们的详细信息</li>
      </ul>
    </div>



    <!-- 其他内容 -->

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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.min.css';


export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 每次显示一个幻灯片
        spaceBetween: 30, // 幻灯片之间的间距
        loop: true, // 循环播放
        autoplay: {
          delay: 2500, // 自动播放延迟
          disableOnInteraction: false // 用户交互后不停止自动播放
        }
      }
    };
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 100vh; /* 占满整个视口高度 */
}

.swiper {
  width: 100%;
  height: 700px;
  background-color: #ffffff; /* 设置背景颜色为浅蓝色 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.swiper-slide img {
  width: 100%; /* 设置图片宽度为100% */
  height: 100%; /* 设置图片高度为100% */
  object-fit: cover; /* 保持图片比例并填充整个容器 */
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-button-prev {
  left: 10px;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"/></svg>');
}

.swiper-button-next {
  right: 10px;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"/></svg>');
}

.website-intro {
  position: absolute;
  top: 750px; /* 距离顶端750px */
  height: 800px; /* 高度800px */
  width: 100%;
  background-color: #ffffff; /* 设置背景颜色为白色 */
  padding: 20px;
  box-sizing: border-box;
}
</style>
