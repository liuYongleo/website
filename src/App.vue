<template>
  <div id="app">
    <div>
      <ly-header @head-tab="headChange"></ly-header>
      <router-view keep-alive='true' />
    </div>
  </div>
</template>

<script>
  import lyHeader from './components/lyHeader';
  import snowFall from '../static/js/snow'
  
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
