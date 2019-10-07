import Vue from "vue";
import Router from "vue-router";

import Login from './views/Login.vue'

import Main from "./views/Main.vue";

import Todo from './views/Todo.vue'

import TagEdit from "./views/TagEdit.vue";
import TagList from "./views/TagList.vue";

import ArticleEdit from './views/ArticleEdit.vue'
import ArticleList from './views/ArticleList.vue'

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

import AboutMeEdit from './views/AboutMeEdit.vue'
Vue.use(Router);

const router =  new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: Login,meta: { isPublic: true } },
    {
      path: "/",
      name: "main",
      redirect: '/todo',
      component: Main,
      children: [

        { path: "/todo", component: Todo },

        { path: "/tags/create", component: TagEdit },
        { path: "/tags/edit/:id", component: TagEdit, props: true },
        { path: "/tags/list", component: TagList },

        { path: '/articles/create', component: ArticleEdit },
        { path: '/articles/edit/:id', component: ArticleEdit, props: true },
        { path: '/articles/list', component: ArticleList },

        { path: '/admin_users/create', component: AdminUserEdit },
        { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true },
        { path: '/admin_users/list', component: AdminUserList },

        { path: '/about/edit', component: AboutMeEdit, props: true },

      ]
    }
  ]
});
//路由守卫
router.beforeEach((to, from ,next) => {
  //判断路由去的页面是否可以公开访问
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router