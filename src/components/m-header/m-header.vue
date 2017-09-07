<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="less">
  @import '../../common/less/variable';
  @import '../../common/less/mixin';
  .m-header{
    position: relative;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon{
      margin-right: 9px;
      width: 30px;
      height: 32px;
      .bg-image('logo');
    }
    .text{
      line-height: 44px;
      font-size: @font-size-large;
      color: @color-theme;
    }
  }
</style>
