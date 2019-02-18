import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/todo',
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/TodoListView.vue'),
    },
    {
      path: '/todo/:id',
      name: 'todo-detail',
      props: true,
      component: () => import('./views/TodoDetailView.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
