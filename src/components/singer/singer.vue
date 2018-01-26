<template>
  <div>
    <loading v-show="!singers.length"></loading>
  </div>
</template>

<script>
  import {getSingers} from 'components/api/singers'
  import loading from 'base/loading/loading'
  import {ERR_OK} from 'components/api/config'
  export default{
    data () {
      return {
        singers: []
      }
    },
    mounted () {
      setTimeout(() => {
        this._getSingers()
      }, 20)
    },
    methods: {
      _getSingers () {
        getSingers().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = res.data.list
          }
        })
      }
    },
    components: {
      loading
    }
  }
</script>

<style>
    
</style>
