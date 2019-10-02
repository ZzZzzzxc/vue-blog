import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue';
import HomeBody from './views/HomeBody.vue';
import AboutBody from './views/AboutBody.vue'
import ArchieveBody from './views/ArchieveBody.vue'
import ArticleShow from './views/ArticleShow.vue';

Vue.use(Router)

export default new Router({
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
          name:'archieve',
          component:ArchieveBody
        },
        {
          path:'/articles/:id',
          name:'article',
          props: true,
          component:ArticleShow
        }
      ]
    }
  ]
})
