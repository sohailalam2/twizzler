/* eslint-disable no-new */
import axios from 'axios';
import Vue from 'vue';

import App from './App';
import router from './router';
import constants from './constants';

Vue.config.productionTip = false;

// Axios configuration
axios.defaults.baseURL = constants.API_URL;


new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
