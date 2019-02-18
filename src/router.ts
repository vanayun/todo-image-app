import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo',
      component: () => import('./App.vue'),
    },
    {
      path: '/add',
      name: 'todo-add',
      component: () => import('./views/TodoAddPage.vue'),
    },
    {
      path: '/detail',
      name: 'todo-detail',
      props: true,
      component: () => import('./views/TodoDetailPage.vue'),
    },
  ],
});
