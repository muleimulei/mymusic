import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import recommend from 'components/recommend/recommend'
import singer from 'components/singer/singer'
import search from 'components/search/search'
import rank from 'components/rank/rank'

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '*',
      redirect: '/recommend'
    }
  ]
})
