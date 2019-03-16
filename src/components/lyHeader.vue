<template>
  <div class="tab-mode" :class="'tab-'+tabIndex">
    <div :class="{active:tabIndex==0}" @click="headChange('/', 0)">camera</div>
    <div :class="{active:tabIndex==1}" @click="headChange('/wx', 1)">wx pic</div>
  </div>
</template>
 
<script>  
  export default {
    props: [],
    data: function(){
      return {
        tabIndex: 0
      }
    },
    mounted: function(){
      if(this.$route.name == 'wxgoddess'){
        this.tabIndex = 1;
      }
    },
    methods: {
      headChange: function(path, index){
        this.tabIndex = index;
        this.$emit('head-tab', path);
        this.$router.push(path);
      }
    }
  };
</script>

<style scoped lang="scss">
  .tab-mode{
    line-height: 40px;
    height: 40px;
    flex-grow: 0;
    display: flex;
    background: #C70302;
      &:after{
        display: inline-block;
        content: '';
        width: 50%;
        height: 40px;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        background-image: url(../assets/headbg.png);
        background-size: 100% 100%;
        transition: all .4s;
      }
      &.tab-1:after{
        left: 50%;
      }
    div{
      flex-grow: 1;
      color: white;
      text-align: center;
      position: relative;
      z-index: 2;
      color: #333;
      font-size: 22px;
        transition: all .4s;
      &.active{
        color: #17ca14;
      }
    }
  }
</style>
