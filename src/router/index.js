import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: require('components/recommend/recommend')
    },
    {
      path: '/singer',
      component: require('components/singer/singer')
    },
    {
      path: '/search',
      component: require('components/search/search')
    },
    {
      path: '/rank',
      component: require('components/rank/rank')
    }
  ]
})
