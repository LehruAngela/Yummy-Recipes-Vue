import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ViewCategory from '../views/ViewCategory.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Register}, 
    { path: '/login', component: Login},
    { path: '/categories', component: ViewCategory}
  ]
})

export default router;