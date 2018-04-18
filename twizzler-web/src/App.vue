<style lang="scss">
  @import "assets/styles/main";
</style>

<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  import constants from './constants';
  import AppHeader from './components/AppHeader';

  export default {
    name: 'App',

    components: {
      AppHeader,
    },

    mounted() {
      // Subscribe to server sent events, listen to different types of events and take actions
      if ('EventSource' in window) {
        const es = new EventSource(`${constants.API_URL}/tweets/stream`);

        es.addEventListener('tweet', event => this.addTweet(JSON.parse(event.data)));
        es.addEventListener('like', event => this.likeTweet(JSON.parse(event.data)));
        es.addEventListener('reply', event => this.replyTweet((JSON.parse(event.data))));
      }
    },

    methods: {
      ...mapMutations('Tweets', ['addTweet', 'likeTweet', 'replyTweet']),
    },
  };
</script>
