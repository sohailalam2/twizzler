import Vue from 'vue';
import Vuex from 'vuex';

import constants from '../constants';
import Tweets from './Tweets';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: constants.ENV !== 'production',
  modules: {
    Tweets,
  },
});

