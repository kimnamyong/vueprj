import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TodoView from '../views/TodoView.vue'
import NoticeView from '../views/NoticeView.vue'
import UserDetails from '../views/UserDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',    
    component: AboutView
  },
  {
    path: '/todo',
    name: 'todo',    
    component: TodoView
  },
  {
    path: '/notice',
    name: 'notice',    
    component: NoticeView
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
    // props를 사용하여 라우터에서 동적으로 전달된 데이터를 컴포넌트로 전달합니다.
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
