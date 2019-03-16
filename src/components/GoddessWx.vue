<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,key) in imgSrcArr" :key="key" class="swiper-slide" :class="'key'+key+1">
          <div>
            <!-- <span class="page-title"><i>{{imgIndex}}</i>/{{imgSrcArr.length}}</span> -->
            <h3>{{item[1]}}</h3>
            <img :data-src="'static/img/'+item[0]" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
 
<script>
import Swiper from "swiper";
import "../../static/css/swiper.min.css";
import "../../static/css/animate.css";
import imgJson from "../../static/cfg/wx.json";

export default {
  name: "wx",
  data() {
    return {
      imgSrcArr: imgJson.imgArr,
    };
  },
  mounted: function() {
    var self = this;
    var swiperEle = new Swiper(".swiper-container", {
      slidesPerView: 1,
      effect: "cube",
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
    });
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.index {
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-flow: column;
}

.swiper-container {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.swiper-pagination.swiper-pagination-fraction{
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
      left: 50%;
      transform: translate(-50%, 0);
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
      text-align: center;
      text-shadow: 0 0 3px #9633FF, 0 0 3px #9633FF, 0 0 3px #9633FF;
      bottom: 20px;
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