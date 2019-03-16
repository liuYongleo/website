import Vue from 'vue'
import Router from 'vue-router'
import Goddess from '@/components/Goddess'
import GoddessWx from '@/components/GoddessWx'
const VueTouch = require('vue-touch');

Vue.use(VueTouch, {name:'v-touch'})
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goddess',
      component: Goddess
    },
    {
      path: '/wx',
      name: 'wxgoddess',
      component: GoddessWx
    }
  ]
})
