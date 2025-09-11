import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path:'/register',
    name:'Register',
    component: FirebaseRegisterView
  },
  {
    path:'/signin',
    name:'SignIn',
    component: FirebaseSigninView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router