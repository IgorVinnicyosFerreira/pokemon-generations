import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('@/layouts/default/index.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Gerações de Jogos'
        }
      },
      {
        name: 'game-details',
        path: '/:name',
        component: () => import('@/views/game-details/index.vue'),
        meta: {
          title: 'Detalhes do Jogo'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
