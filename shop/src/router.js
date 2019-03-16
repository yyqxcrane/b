import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Myhome from './views/Myhome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/classify',
      name: 'classify',
      component: Classify
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },{
      path: '/myhome',
      name: 'myhome',
      component: Myhome
    }
  ]
})
