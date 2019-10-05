import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue';
import HomeBody from './views/HomeBody.vue';
import AboutBody from './views/AboutBody.vue'
import ArchieveBody from './views/ArchieveBody.vue'
import ArticleShow from './views/ArticleShow.vue';
import Todo from './views/Todo.vue'
import Error from './views/Error.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path:'/',
          name:'home',
          component:HomeBody
        },
        {
          path:'/about',
          name:'about',
          component:AboutBody
        },
        {
          path:'/archieve',
          name:'article',
          component:ArchieveBody
        },
        {
          path:'/articles/:id',
          name:'article',
          props: true,
          component:ArticleShow
        },
        {
          path:'/tags/:id',
          name:'articleList',
          props: true,
          component:ArchieveBody
        },
        {
          path:'/todo',
          name:'todo',
          component:Todo
        }
      ]
    },
    {
      path: '*',
        name: 'notfount',
        component: Error
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})  

export default router