import Vue from 'vue'
import VueRouter from 'vue-router'


import Principal from '../views/Principal.vue'
import Login from '../views/Login.vue'
import Consulta from '../views/Consulta.vue'
import Esprinter from '../views/Esprinter.vue'
import Empresas from '../views/Empresas.vue'
import Home from '../views/Home.vue'
import Recibidos from '../views/Recibidos.vue'
import Emitidos from '../views/Emitidos.vue'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'principal',
      component: Principal
    },
    {
      path: '/login',   
      component: Login
    },
    {
      path: '/consulta',
      component: Consulta
    },
    {
      path: '/esprinter',
      component: Esprinter
    },
    {
      path: '/empresas',
      component: Empresas
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/recibidos',
      component: Recibidos
    },
    {
      path:'/emitidos',
      component: Emitidos
    }

  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router