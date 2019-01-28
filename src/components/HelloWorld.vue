<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in 100" class="swiper-slide">
          <img @click="showFull" src="../assets/index/1.jpg">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div>
      <h1 class="animated bounceIn">测试文字</h1>
    </div>
    <transition name="fade">
      <div id="full-screen" @click="hideFull" v-if="imgSrc">
        <img :src="imgSrc">
        <h3 class="slideInLeft" :class="{animated:imgSrc}">文字</h3>
        <h3 class="slideInRight" :class="{animated:imgSrc}">文字</h3>
      </div>
    </transition>
  </div>
</template>
 
<script>
  import Swiper from 'swiper';
  import '../add/swiper.animate.min.js';
  import '../add/swiper.min.css';
  import '../add/animate.css';
  
  export default {
    name: "index",
    data() {
      return {
        imgSrc: ""
      };
    },
    mounted: () => {
      new Swiper('.swiper-container', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 6,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          clickable: true,
        },
      })
    },
    methods: {
      showFull: function(event) {
        this.imgSrc = event.target.src;
      },
      hideFull: function() {
        this.imgSrc = "";
      }
    }
  };
</script>

<style scoped lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  
  html,
  body,
  #app,
  #full-screen,
  .index {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  #full-screen {
    z-index: 100;
  }
  
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .swiper-container {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 230px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-shadow: 1px 1px 3px #999;
  }
  
  .swiper-slide img,
  #full-screen img {
    float: left;
    width: 100%;
    height: 100%;
  }
  
  #full-screen h3 {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    padding: 0 16px;
    color: white;
    font-size: 40px;
    text-align: left;
    &:hover {
      color: #000;
    }
    &.slideInLeft {
      top: 100px;
    }
    &.slideInRight {
      top: 300px;
      text-align: right;
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  
  .fade-enter,
  .fade-leave {
    transform: translate3d(60px, 0, 0);
    opacity: 0;
  }
  
  .faderight-enter-active,
  .faderight-leave-active {
    transition: all 1.8s;
  }
  
  .faderight-enter,
  .faderight-leave {
    transform: translate3d(400px, 0, 0);
    opacity: 0;
  }
</style>
