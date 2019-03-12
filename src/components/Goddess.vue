<template>
  <div class="index">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item,key) in imgSrcArr" :key="key" class="swiper-slide" :class="'key'+key+1">
          <div>
            <span class="date-title">{{(item.src)|toDate}}</span>
            <span class="page-title"><i>{{imgIndex}}</i>/{{imgSrcArr.length}}</span>
            <h3 class="animated slide-1" :class="{slideInLeft:key==imgIndex-1}">{{item.text[0]}}</h3>
            <h3 class="animated slide-2" :class="{slideInRight:key==imgIndex-1}">{{item.text[1]}}</h3>
            <img :data-src="'static/img/'+item.src" class="swiper-lazy">
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
import imgJson from "../../static/img.json";

export default {
  name: "index",
  data() {
    return {
      imgIndex: 1,
      imgSrcArr: imgJson.imgArr,
      imgSrc: "",
      tabIndex: 0
    };
  },
  mounted: function() {
    var self = this;
    window.swiperEle = new Swiper(".swiper-container", {
      slidesPerView: 1,
      effect: "coverflow",
      // slidesPerColumn: 2,
      // spaceBetween: 3,
      // freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true
      },
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 4,
        loadOnTransitionStart: true
      },
      on: {
        slideNextTransitionStart: function() {
          console.log("end");
          self.imgIndex = this.activeIndex + 1;
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
  .text-area {
    flex-grow: 1;
    background-image: url("../assets/textbg.png");
    background-size: cover;
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
      font-size: 30px;
      font-weight: normal;
      text-align: left;
      &:hover {
        color: #000;
      }
      &.slide-1 {
        bottom: 80px;
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
