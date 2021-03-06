import Vue from 'vue'
import Router from 'vue-router'
import Teams from '@/components/Teams'
import Matches from '@/components/Matches'
import Players from '@/components/Players'
import Seasons from '@/components/Season'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/matches',
      name: 'Matches',
      component: Matches
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/',
      name: 'Seasons',
      component: Seasons
    }
  ]
})
