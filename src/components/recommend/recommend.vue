<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul></ul>
    </div>
  </div>
</template>

<script>
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'components/api/recommend'
  import {ERR_OK} from 'components/api/config'
  export default{
    created () {
      this._getRecommend()
    },
    data () {
      return {
        recommends: []
      }
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    },
    components: {
      Slider
    }
  }
</script>

<style lang="less">
    
</style>
