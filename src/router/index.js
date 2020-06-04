import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Orders from '../components/user/Orders'
import Item from '../components/items/Item'
import ListItem from '../components/items/ListItem'
import NewItem from '../components/items/NewItem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item
  },
  {
    path: '/new',
    name: 'New',
    component: NewItem
  }, {
    path: '/list',
    name: 'List',
    component: ListItem
  }, {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/auth/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/auth/Registration')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
