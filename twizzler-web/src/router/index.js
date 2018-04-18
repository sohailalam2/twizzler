import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Tweets from '@/components/Tweets';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', alias: '/login', component: Login },
    { path: '/tweets', component: Tweets },
  ],
});
