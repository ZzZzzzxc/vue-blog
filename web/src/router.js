import Vue from 'vue'
import Router from 'vue-router'
// import Layout from './views/Layout.vue';
// import HomeBody from './views/HomeBody.vue';
// import AboutBody from './views/AboutBody.vue'
// import ArchieveBody from './views/ArchieveBody.vue'
// import ArticleShow from './views/ArticleShow.vue';
// import Todo from './views/Todo.vue'
// import Error from './views/Error.vue'

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
      // component: Layout,
      component: () => import(/* webpackChunkName: "layout" */ './views/Layout.vue'),
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
        }
      ]
    },
    {
      path: '*',
        name: 'notfount',
        // component:Error,
        component: () => import(/* webpackChunkName: "layout" */ './views/Error.vue'),
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