<template>
  <div class="recommend">
    <scroll :data="discList" class="recommend-content">
      <div>
        <div>
          <div class="slider-wrapper" v-if="recommends.length">
            <slider>
              <div v-for="item in recommends">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" alt="">
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list" >
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in discList" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt="">
              </div>
              <div class="text">
                <h2 class="name">{{item.creator.name}}</h2>
                <p class="desc">{{item.dissname}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Slider from 'base/slider/slider'
  import {getRecommend, getDiscList} from 'components/api/recommend'
  import {ERR_OK} from 'components/api/config'
  import Scroll from 'base/scroll/scroll'
  import loading from 'base/loading/loading'

  export default{
    created () {
      this._getRecommend()
      this._getDiscList()
    },
    data () {
      return {
        recommends: [],
        discList: []
      }
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getContent (data) {
        return JSON.parse(data.substring(data.indexOf('(') + 1, data.length - 1))
      },
      _getDiscList () {
        getDiscList().then((res) => {
          let content = this._getContent(res.data)
          if (content.code === ERR_OK) {
            this.discList = content.data.list
          }
        })
      }
    },
    components: {
      Slider,
      Scroll,
      loading
    }
  }
</script>

<style lang="less">
  @import '../../common/less/variable';
  @import '../../common/less/mixin';
  .recommend{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content{
      position: fixed;
    bottom: 0;
    top: 88px;
    width: 100%;
    overflow: hidden;
    .recommend-list{
      .list-title{
        text-align: center;
        height: 65px;
        line-height: 65px;
        font-size: @font-size-medium;
        color: @color-theme;
      }
      .item{
          display: flex;
          box-sizing: border-box;
          padding: 0 20px 20px 20px;
          .icon{
            flex-basis: 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: @font-size-medium;
            .name{
              margin-bottom: 10px;
              color: @color-text;
            }
            .desc{
              color: @color-text-d;
            }
          }
      }
    }
    }
  }
</style>
