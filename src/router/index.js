import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ClientLogin from '@/views/ClientLogin.vue'
import ClientSignup from '@/views/ClientSignup.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage,
    meta: [
      {
        name: `description`,
        content: `This is the Home page`
      },
      {
        name: `author`,
        content: `Danny Ganza`
      },
    ]
  },
  {
    path: '/ClientLogin.vue',
    name: 'Client Login',
    component: ClientLogin,
    meta: [
      {
        name: `description`,
        content: `This is the Log in page`
      },
      {
        name: `author`,
        content: `Danny Ganza`
      },
    ]
  },
  {
    path: '/ClientSignup.vue', 
    name: 'Client SignUp',
    component: ClientSignup,
    meta: [
      {
        name: `description`,
        content: `This is the SignUp page`
      },
      {
        name: `author`,
        content: `Danny Ganza`
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
