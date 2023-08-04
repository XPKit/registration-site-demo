import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import AuthCallbackView from '../views/AuthCallbackView.vue';
import VisitorDetailsView from '../views/VisitorDetailsView.vue';
import ThanksView from '../views/ThanksView.vue';
import FaqsView from '../views/FaqsView.vue';
import ContactView from '../views/ContactView.vue';
import TermsView from '../views/TermsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/auth-callback',
      name: 'auth-callback',
      component: AuthCallbackView
    },
    {
      path: '/visitor-details',
      name: 'visitor-details',
      component: VisitorDetailsView
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ThanksView
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqsView
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/terms-and-conditions',
      name: 'terms',
      component: TermsView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
