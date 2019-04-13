import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import Myhome from './views/Myhome.vue'
<<<<<<< HEAD
import Detail from './views/Detail.vue'

//路由懒加载，点击一个加载一个
// let Home=()=>import('./views/Home.vue');
// let Classify=()=>import('./views/Classify.vue');
// let Cart=()=>import('./views/Cart.vue');
// let Myhome=()=>import('./views/Myhome.vue');
// let Detail=()=>import('./views/Detail.vue');
=======
// import Ajax from './views/Ajax.vue'
import Detail from './views/Detail.vue'
>>>>>>> d93c51217efaa84e1ef1e2eee7958be4ab0cbcf6
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
<<<<<<< HEAD
      },
      // 只缓存你想缓存的某些页面
      // meta:{   
      //   keepAlive:true
      // }
=======
      }
>>>>>>> d93c51217efaa84e1ef1e2eee7958be4ab0cbcf6
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
