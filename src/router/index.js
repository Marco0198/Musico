import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Event from '../views/pages/Event.vue'
import Contact from '../views/pages/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
