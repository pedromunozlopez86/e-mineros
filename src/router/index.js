import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PaginaError from '../views/PaginaError.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Repuestos from '../views/Repuestos.vue'
import Productos from '../views/Productos.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'

// import firebase from "firebase"
import store from '../store/index.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  { path: "*", component: PaginaError },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin ,
    meta: {
      login : true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
   {
    path: '/repuestos',
    name: 'Repuestos',
    component: Repuestos
  },
  {
    path: '/nosotros',
    name: 'Nosootros',
    component: Nosotros
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500)
  let user = store.state.user
  let requiresAuth = to.matched.some(route => route.meta.login)
  if (!user && requiresAuth){
    console.log("redirect al login!")
    next("login");
  // }  else if (user && !requiresAuth){
  //   console.log('login válido!')
  //   next('admin');
  }else next();
});

export default router
