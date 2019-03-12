<template>
  <div id="app">
    <div>
      <ly-header @head-tab="headChange"></ly-header>
      <router-view keep-alive='true' />
      <span @click="playMusic" class="music-icon" :class="{mute:mute}"></span>
      <div>
        <ly-header @head-tab="headChange"></ly-header>
        <router-view/>
      </div>
    </div>
</template>

<script>
  import lyHeader from './components/lyHeader';
  
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
      headChange: function(path) {
        console.log();
      },
      playMusic: function() {
        if (!this.audioMusic) {
          this.audioMusic = document.getElementById('music-audio');
        }
        this.audioMusic.currentTime = 0;
        this.audioMusic.play();
      },
      playAudio: function() {
        if (!this.audioClick) {
          this.audioClick = document.getElementById('click-audio');
        }
        if (this.mute) {
          return false;
        }
        this.audioClick.currentTime = 0;
        this.audioClick.play();
      },
    }
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
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  #app>div {
    display: flex;
    flex-flow: column;
  }
</style>