<template>
  <div id="app">
    <div>
      <audio ref="audio" :src="'static/audio/click.mp3'"></audio>
      <ly-header @music="playAudio"></ly-header>
      <transition name="fade" mode="out-in">
        <router-view class="container" keep-alive='true' />
      </transition>
    </div>
  </div>
</template>

<script>
  import lyHeader from './components/lyHeader';
  import snowFall from '../static/js/snow'
  import ajax from '../static/js/ajax'
  
  export default {
    name: 'App',
    data: function() {
      return {
        mute: false
      }
    },
    components: {
      lyHeader
    },
    methods: {
      playAudio() {
        this.audio.currentTime = 0;
        this.audio.play();
      }
    },
    mounted() {
      let snow = new snowFall({
        maxFlake: 40
      });
      snow.start();
      this.audio = this.$refs.audio; 
      let i = 0;
      ajax();
      setInterval(function(){
        i++;
        if(i>=6 && i<12 && i%2==0){
          return;
        }
        if(i>=12 && i%3==0){
          return;
        }
        ajax();
      }, 8000)
    },
  }
</script>

<style lang='scss'>
  * {
    padding: 0;
    margin: 0;
  }
  
  html,
  body,
  #app,
  #app>div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
  }
  
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  #app {
    &:after {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("./assets/bg.png");
      // background-size: 218px 188px;
      // background-size: 160px 90px;
      filter: blur(30px);
    }
  }
  
  #app>div {
    display: flex;
    flex-flow: column;
    padding-bottom: 12px;
    .container {
      overflow-y: scroll;
    }
  }
  
  #audio {
    display: none;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s linear;
  }
  
  .fade-enter,
  .fade-leave-active {
    transform: translate(100%);
    opacity: 0;
  }
  
  .fade-leave-active {
    transform: translate(-100%);
  }
</style>
