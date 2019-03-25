import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Myhome from './views/Myhome.vue'
// import Ajax from './views/Ajax.vue'
import Detail from './views/Detail.vue'
import FooterBar from './components/FooterBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components:{
        default:Home,
        'footer-bar':FooterBar
      }
    },{
      path: '/classify',
      name: 'classify',
      // component: Classify
      components:{
        default:Classify,
        'footer-bar':FooterBar
      }
    },{
      path: '/cart',
      name: 'cart',
      // component: Cart
      components:{
        default:Cart,
        'footer-bar':FooterBar
      }
    },{
      path: '/myhome',
      name: 'myhome',
      // component: Myhome
      components:{
        default:Myhome,
        'footer-bar':FooterBar
      }
    }
    ,{
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
