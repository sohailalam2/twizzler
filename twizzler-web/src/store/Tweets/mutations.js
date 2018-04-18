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

  tweets(state, tweets) {
    Vue.set(state, 'tweets', tweets);
  },

  addTweet(state, newTweet) {
    state.tweets.push(newTweet);
  },

  likeTweet(state, tweet) {
    const found = state.tweets.filter(t => t.id === tweet.id)[0];

    Vue.set(found, 'likes', tweet.likes);
  },

  replyTweet(state, tweet) {
    const found = state.tweets.filter(t => t.id === tweet.id)[0];

    Vue.set(found, 'replies', tweet.replies);
  },

};
