<template>
  <div class="index">
    <div class="tab-mode" :class="'tab-'+tabIndex">
      <div @click="tabChange(0)" :class="{active:tabIndex==0}">默认</div>
      <div @click="tabChange(1)" :class="{active:tabIndex==1}">小图</div>
      <div @click="tabChange(2)" :class="{active:tabIndex==2}">中图</div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,key) in imgSrcArr" class="swiper-slide">
          <span class="date-title">{{item|toDate}}</span>
          <!-- <img :src="'../assets/index/'+item" @click="showFull"> -->
          <img :data-src="'static/img/'+item" @click="showFull(key, $event)" class="swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="text-area">
    <!-- <div> -->
      <h1 class="animated bounceIn">文字内容</h1>
    </div>
    <transition name="fade">
      <v-touch v-if="imgSrc" id="full-screen" @tap="hideFull" @swipeleft="swipeLeft" @swiperight="swipeRight">
        <img :src="imgSrc">
        <h2><i>{{imgIndex+1}}</i> / {{imgSrcArr.length}}</h2>
        <h3 class="slideInLeft" :class="{animated:imgSrc}">文字</h3>
        <h3 class="slideInRight" :class="{animated:imgSrc}">文字</h3>
      </v-touch>
    </transition>
  </div>
</template>
 
<script>
  import Swiper from 'swiper';
  import '../../static/js/swiper.animate.min.js';
  import '../../static/css/swiper.min.css';
  import '../../static/css/animate.css';
  import imgJson from '../../static/img.json';
  
  export default {
    name: "index",
    data() {
      return {
        imgIndex: 0,
        imgSrcArr: imgJson.imgArr,
        imgSrc: '',
        tabIndex: 0
      };
    },
    mounted: () => {
      window.swiperEle = new Swiper('.swiper-container', {
        slidesPerView: 2,
        // slidesPerColumn: 2,
        spaceBetween: 3,
        // freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
          clickable: true,
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
        }
      })
    },
    filters: {
      toDate: function(s){
        return s.slice(4,8)+'/'+s.slice(8,10)+'/'+s.slice(10,12)+' '+s.slice(13,15)+':'+s.slice(15,17)+':'+s.slice(17,19);
      }
    },
    methods: {
      playAudio: function(){
        this.$parent.playAudio();
      },
      tabChange: function(index){
        this.playAudio();
        this.tabIndex = index;
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
        this.imgSrc = 'static/img/' + this.imgSrcArr[++this.imgIndex];
        console.log('swipe left');
      },
      swipeRight: function() {
        this.playAudio();
        this.imgSrc = 'static/img/' + this.imgSrcArr[--this.imgIndex];
        console.log('swipe right');
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
    .text-area{
      flex-grow: 1;
      background-image: url('../imgs/textbg.png');
      background-size: cover;
    }
  }
  
  #full-screen {
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 40px 0;
    background: rgba(0, 0, 0, .8);
    h2 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-weight: normal;
      font-size: 16px;
      line-height: 40px;
      color: white;
      i {
        font-size: 15px;
      }
    }
  }
  
  .tab-mode{
    display: flex;
    background: white;
      &:after{
        display: inline-block;
        content: '';
        width: 33.333%;
        height: 30px;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        background: black;
        transition: all .4s;
      }
      &.tab-1:after{
        left: 33.333%;
      }
      &.tab-2:after{
        left: 66.666%;
      }
    div{
      position: relative;
      z-index: 2;
      flex-grow: 1;
      line-height: 30px;
      color: #333;
        transition: all .4s;
      &.active{
        color: white;
      }
    }
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
    height: 260px;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 3px #999;
    img {
      filter: blur(20px);
    }
    .date-title {
      position: absolute;
      display: inline-block;
      left: 5px;
      bottom: 5px;
      padding: 0 6px;
      border-radius: 18px;
      line-height: 18px;
      font-size: 12px;
      background: rgba(0, 0, 0, .5);
      color: white;
    }
  }
  
  .swiper-slide img,
  #full-screen img {
    float: left;
    width: 100%;
    height: 100%;
    filter: blur(20px);
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
