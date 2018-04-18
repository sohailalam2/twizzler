/* eslint-disable no-param-reassign */
import axios from 'axios';
import Vue from 'vue';

export default {

  error(state, error) {
    Vue.set(state, 'error', error);
  },

  setToken(state, token) {
    Vue.set(state, 'token', token);
    localStorage.setItem('token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  clearToken(state) {
    Vue.set(state, 'token', null);
    window.localStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = null;
  },

};
