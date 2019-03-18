<template>
  <div class="tab-mode" :class="'tab-'+tabIndex">
    <div>
      <div :class="{active:tabIndex==0}" @click="headChange('/', 0)">goddess</div>
      <div :class="{active:tabIndex==1}" @click="headChange('/camera', 1)">camera</div>
      <div :class="{active:tabIndex==2}" @click="headChange('/wx', 2)">wx pic</div>
    </div>
  </div>
</template>
 
<script>
  export default {
    props: [],
    data: function() {
      return {
        tabIndex: 0
      }
    },
    created: function() {
      if (this.$route.name == 'goddess') {
        this.tabIndex = 1;
      } else if (this.$route.name == 'wxgoddess') {
        this.tabIndex = 2;
      }
    },
    methods: {
      headChange: function(path, index) {
        this.$emit('music');
        this.tabIndex = index;
        this.$router.push(path);
      }
    }
  };
</script>

<style scoped lang="scss">
  .tab-mode {
    box-shadow: 0 0 6px #999;
  }
  
  .tab-mode>div {
    line-height: 40px;
    height: 40px;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 10px;
    display: flex;
    background: rgba(0, 0, 0, .3);
    border-radius: 30px;
    box-shadow: 0 0 3px inset #666;
    overflow: hidden;
    div {
      flex-grow: 1;
      position: relative;
      z-index: 2;
      font-size: 28px;
      // font-weight: bold;
      color: white;
      // text-shadow: 0 0 3px #9633FF, 0 0 4px #9633FF, 0 0 5px #9633FF;
      text-align: center;
      transition: all .4s;
      &.active {
        background: rgba(0, 0, 0, .2);
        color: #9633FF;
        text-shadow: 0 0 3px #fff, 0 0 4px #fff, 0 0 5px #fff;
      }
    }
  }
</style>
