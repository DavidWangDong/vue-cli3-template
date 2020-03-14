import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/user',
    children: [{
      path: 'user',
      name: 'user',
      component: () => import('@/views/user/index'),
      meta: { title: '用户中心' }
    }]
  },

  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1',
    name: 'menu',
    meta: { title: '一级菜单'},
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: () => import('@/views/menu1/index'),
        meta: { title: '子菜单1' }
      },
      {
        path: 'menu2',
        name: 'menu2',
        
        component: () => import('@/views/menu2/index'),
        meta: { title: '子菜单2'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
