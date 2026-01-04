import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

// Import pages
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import ProjectCrca from './pages/projects/Crca.vue';
import ProjectLucre from './pages/projects/Lucre.vue';
import Publications from './pages/Publications.vue';
import Docs from './pages/Docs.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/crca', component: ProjectCrca },
  { path: '/projects/lucre', component: ProjectLucre },
  { path: '/publications', component: Publications },
  { path: '/docs', component: Docs },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

