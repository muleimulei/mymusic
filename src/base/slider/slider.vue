<template>
  <div class="slider" ref="slider">
    <div ref="sliderGroup" class="slider-group">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script>
  export default{
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    mounted () {
      setTimeout(() => {
        this._setSliderWidth()
        this._initSlider()
      })
    },
    methods: {
      _setSliderWidth () {
        this.children = this.$refs.sliderGroup.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++){
          let child = this.children[i]
        }
      },
      _initSlider () {

      }
    }
  }
</script>

<style lang="less">
  
</style>
