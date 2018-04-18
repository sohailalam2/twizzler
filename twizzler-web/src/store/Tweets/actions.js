/* eslint-disable no-unused-vars */
import axios from 'axios';

export default {
  async getTweets({ commit }) {
    try {
      const { data } = await axios.get('/tweets');

      commit('tweets', data.data || []);
    } catch (e) {
      commit('error', e);
    }
  },

  async postTweet({ commit }, newTweet) {
    try {
      const { data } = await axios.post('/tweets', newTweet);

      // commit('addTweet', data.data);
    } catch (e) {
      commit('error', e);
    }
  },

  async likeTweet({ commit }, id) {
    try {
      const { data } = await axios.put(`/tweets/${id}/like`);

      // commit('likeTweet', data.data);
    } catch (e) {
      commit('error', e);
    }
  },

  async replyTweet({ commit }, { id, reply }) {
    try {
      const { data } = await axios.put(`/tweets/${id}/reply`, { reply });

      // commit('replyTweet', data.data);
    } catch (e) {
      commit('error', e);
    }
  },
};
