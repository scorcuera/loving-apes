import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:name',
    name: 'Edit',
    component: Edit,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
