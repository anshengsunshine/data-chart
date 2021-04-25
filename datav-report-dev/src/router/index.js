import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import(/* webpackChunkName: "bmap" */ '@/views/BMap')
  },
  {
    path: '/2',
    name: 'Liqquidfill',
    component: () => import(/* webpackChunkName: "bmap" */ '@/views/Liqquidfill')
  },
]

const router = new VueRouter({
  routes
})

export default router
