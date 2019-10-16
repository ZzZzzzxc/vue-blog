import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path:'/',
          name:'home',
          // component:HomeBody
          component: () => import(/* webpackChunkName: "layout" */ './views/HomeBody.vue'),
        },
        {
          path:'/about',
          name:'about',
          // component:AboutBody
          component: () => import(/* webpackChunkName: "layout" */ './views/AboutBody.vue'),
        },
        {
          path:'/archieve',
          name:'article',
          // component:ArchieveBody
          component: () => import(/* webpackChunkName: "layout" */ './views/ArchieveBody.vue'),
        },
        {
          path:'/articles/:id',
          name:'article',
          props: true,
          // component:ArticleShow
          component: () => import(/* webpackChunkName: "layout" */ './views/ArticleShow.vue'),
        },
        {
          path:'/tags/:id',
          name:'articleList',
          props: true,
          // component:ArchieveBody
          component: () => import(/* webpackChunkName: "layout" */ './views/ArchieveBody.vue'),
        },
        {
          path:'/todo',
          name:'todo',
          // component:Todo
          component: () => import(/* webpackChunkName: "layout" */ './views/Todo.vue'),
        },
        {
          path:'/friend',
          name:'friend',
          // component:Todo
          component: () => import(/* webpackChunkName: "layout" */ './views/Friend.vue'),
        },
      ]
    },
    {
      path: '*',
        name: 'notfount',
        // component:Error,
        component: () => import(/* webpackChunkName: "notfount" */ './views/Error.vue'),
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