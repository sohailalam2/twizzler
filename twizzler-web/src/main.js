/* eslint-disable no-new */
import axios from 'axios';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App';
import store from './store';
import router from './router';
import constants from './constants';

const unsync = sync(store, router);

Vue.config.productionTip = false;

// Axios configuration
axios.defaults.baseURL = constants.API_URL;

if (store.state.Tweets.token) {
  axios.defaults.headers.common.Authorization = `Bearer ${store.state.Tweets.token}`;
}

axios.interceptors.response.use(res => res, (error) => {
  if (error.response.status === 401) {
    store.commit('Tweets/clearToken');
    window.location.href = '/login';
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  unmount() {
    unsync();
  },
});
