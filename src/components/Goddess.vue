<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,key) in imgSrcArr" :key="key" class="swiper-slide" :class="'key'+key+1">
          <div>
            <span class="date-title">{{(item.src)|toDate}}</span>
            <!-- <span class="page-title"><i>{{imgIndex}}</i>/{{imgSrcArr.length}}</span> -->
            <h3 class="ani slide-1" swiper-animate-effect="slideInLeft">{{item.text[0]}}</h3>
            <h3 class="ani slide-2" swiper-animate-effect="slideInRight">{{item.text[1]}}</h3>
            <!-- <h3 class="ani slide-2" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">{{item.text[1]}}</h3> -->
            <!-- <h3 class="animated slide-1" :class="{slideInLeft:key==imgIndex-1}">{{item.text[0]}}</h3>
                <h3 class="animated slide-2" :class="{slideInRight:key==imgIndex-1}">{{item.text[1]}}</h3> -->
            <img :data-src="'static/img/'+item.src" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="input-group">
      <label for="page">跳转至</label>
      <input type="number" id="page" name="page" v-model="page">
      <button @click="goPage">Go</button>
    </div>
  </div>
</template>
 
<script>
  import Swiper from "swiper";
  import "../../static/css/swiper.min.css";
  import "../../static/css/animate.css";
  import imgJson from "../../static/cfg/img.json";
  import {
    swiperAnimateCache,
    swiperAnimate,
    clearSwiperAnimate
  } from "../../static/js/swiper.animate.min.js";
  
  export default {
    name: "index",
    data() {
      return {
        imgIndex: 1,
        imgSrcArr: imgJson.imgArr,
        imgSrc: "",
        tabIndex: 0,
        page: 0
      };
    },
    mounted: function() {
      var self = this;
      this.swiperEle = new Swiper(".swiper-container", {
        slidesPerView: 1,
        effect: "coverflow",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 4,
          loadOnTransitionStart: true
        },
        on: {
          init: function() {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionStart: function() {
            swiperAnimate(this);
            this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');
            // console.log("end");
            // self.imgIndex = this.activeIndex;
          }
        }
      });
    },
    filters: {
      toDate: function(s) {
        return (
          s.slice(4, 8) +
          "/" +
          s.slice(8, 10) +
          "/" +
          s.slice(10, 12) +
          " " +
          s.slice(13, 15) +
          ":" +
          s.slice(15, 17) +
          ":" +
          s.slice(17, 19)
        );
      }
    },
    methods: {
      playAudio: function() {
        this.$parent.playAudio();
      },
      goPage: function() {
        let page = this.page;
        this.swiperEle.slideTo(this.page, 600, true);
      },
      toggleMute: function() {
        this.playAudio();
        this.mute = !this.mute;
      },
      showFull: function(index, event) {
        this.playAudio();
        this.imgIndex = index;
        this.imgSrc = event.target.src;
      },
      hideFull: function() {
        this.playAudio();
        this.imgSrc = "";
      },
      swipeLeft: function() {
        this.playAudio();
        this.imgSrc = "static/img/" + this.imgSrcArr[++this.imgIndex];
        console.log("swipe left");
      },
      swipeRight: function() {
        this.playAudio();
        this.imgSrc = "static/img/" + this.imgSrcArr[--this.imgIndex];
        console.log("swipe right");
      }
    }
  };
</script>

<style scoped lang="scss">
  .index {
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-flow: column;
    .input-group {
      display: flex;
      justify-content: center;
      padding: 6px;
      input,
      button,
      label {
        outline: none;
        background: transparent;
        line-height: 30px;
        font-size: 18px;
        color: #444;
      }
      label{
        padding: 0 4px;
      }
      input {
        width: 80px;
        padding-left: 10px;
        border: 1px solid #B47CEC;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: 0 0 2px #B47CEC;
        background-color: rgba(0,0,0,.2);
      }
      button {
        padding: 0 12px;
        border: 1px solid #B47CEC;
        background-image: linear-gradient(-45deg, #5B298C, #D4B2F7, #5B298C);
        background-color: #B47CEC;
        border-left: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        box-shadow: 0 0 2px #B47CEC;
      }
    }
  }
  
  .swiper-container {
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  
  .swiper-pagination.swiper-pagination-fraction {
    z-index: 2;
    position: absolute;
    display: inline-block;
    width: auto;
    bottom: 5px;
    padding: 0 6px;
    border-radius: 18px;
    line-height: 18px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    right: 10px;
    left: auto;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 500px;
    &>div {
      position: absolute;
      display: flex;
      align-items: center;
      box-shadow: 1px 1px 3px #999;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      width: 100%;
      height: 100%;
      max-width: 400px !important;
      .date-title,
      .page-title {
        z-index: 2;
        position: absolute;
        display: inline-block;
        left: 5px;
        bottom: 5px;
        padding: 0 6px;
        border-radius: 18px;
        line-height: 18px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
      }
      .page-title {
        left: auto;
        right: 10px;
      }
      img {
        // filter: blur(100px);
        float: left;
        width: 100%;
        height: 100%;
      }
      h3 {
        position: absolute;
        z-index: 2;
        box-sizing: border-box;
        width: 100%;
        padding: 0 16px;
        color: white;
        font-size: 22px;
        font-weight: normal;
        text-align: left;
        text-shadow: 0 0 3px #9633FF, 0 0 3px #9633FF, 0 0 3px #9633FF;
        &:hover {
          color: #000;
        }
        &.slide-1 {
          bottom: 68px;
        }
        &.slide-2 {
          bottom: 28px;
          text-align: right;
        }
      }
    }
  }
  
  .animated {
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
</style>
