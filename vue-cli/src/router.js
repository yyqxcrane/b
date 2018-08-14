import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/movie/movie.vue'
import Music  from './views/music/music.vue'
import Book from './views/book/book.vue'
import Photo from './views/photo/photo.vue'
import Musictable  from './views/music/musictable.vue'
import Photodetail from './views/photo/photodetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path:'/music',
      name:'music',
      component:Music,
    },
    {
      path:'/book',
      name:'book',
      component:Book,
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo,
    },
    {
      path:'/musictable',
      name:'musictable',
      component:Musictable,
    },
    {
      path:'/photodetail',
      name:'photodetail',
      component:Photodetail,
    },
  ]
})
