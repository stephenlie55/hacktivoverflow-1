import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },{
      path: '/postQuestion',
      name: 'askForm',
      component: () => import(/* webpackChunkName: "askForm" */ './views/PostQuestion.vue')
    },{
      path: '/question/:questionId',
      name: 'question',
      component: () => import(/* webpackChunkName: "question" */ './views/Question.vue')
    },{
      path: '/tag/:tag',
      name: 'tag',
      component: () => import(/* webpackChunkName: "home" */ './views/Tag.vue'),
    }
  ]
})
