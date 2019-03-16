<template>
  <div class="index">
    <transition appear appear-active-class="animated jello">
      <h2><span class="bg-img"></span></h2>
    </transition>
    <div class="bg-img bg-img-pic">
      <img :src="'static/img/mmexport1548517741498.jpg'">
    </div>
    <!-- <transition appear appear-active-class="animated bounceInLeft"> -->
    <div v-for="(item,key) in meetJson" :key="key">
      <h3 v-if="item.name"><span>{{item.name}}：</span>{{item.text}}</h3>
      <h3 v-else class="active">
        <p class="title">致女神：</p>
        <p v-for="(i,k) in item.textArr"><span v-if="i.em">{{i.em}}</span>{{i.text}}</p>
      </h3>
    </div>
    <!-- </transition> -->
  </div>
</template>
 
<script>
  import '../../static/css/animate.css'
  import meetJson from '../../static/cfg/meet.json'
  export default {
    name: "index",
    data() {
      return {
        meetJson,
        title: '对女神的了解'
      };
    },
    mounted: function() {
  
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
    text-align: left;
    padding-top: 10px;
    .bg-img-pic{
      position: absolute;
      right: 15px;
      top: 53px;
      width: 128px;
      height: 132px;
      overflow: hidden;
      img{
        float: left;
        width: 200px;
        height: 300px;
        margin-left: -10px;
        margin-top: -20px;
      }
    }
    h2 {
      text-align: center;
      .bg-img {
        display: inline-block;
        width: 160px;
        height: 50px;
        background-image: url('../assets/title.png');
        background-size: 100% 100%;
      }
    }
    h3 {
      span {
        font-size: 16px;
      }
      font-size: 14px;
      padding: 4px 12px;
      line-height: 22px;
      @for $i from 1 through 10 {
        &:nth-of-type(#{$i}) {
          animation-delay: .1s * $i;
        }
      }
      &.active {
        padding: 6px 12px;
        p {
          padding: 2px 0;
          text-indent: 2em;
          span {
            background-color: rgba(0, 0, 0, .3);
            color: #eee;
            padding: 0 2px;
          }
          &.title {
            padding-top: 4px;
            line-height: 22px;
            // text-align: center;
            text-indent: 0;
            font-size: 18px;
          }
        }
      }
    }
  }
</style>