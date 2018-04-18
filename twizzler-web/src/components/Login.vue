<style lang="scss" scoped>
  .Login {
    margin-top: 10rem;

    &__button {
      width: 100%;
    }
  }
</style>

<template lang="pug">
  .Login
    .columns
      .column.is-one-third
      .column
        .card
          .card-image
            figure.image.is-4by3: img(src="@/assets/img/github.png" alt="github image")
          .card-content
            a.button.Login__button.is-primary.is-outlined.is-large(:href="loginLink")
              span.icon.is-medium: i.fa.fa-github
              span Login with GitHub
      .column
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import constants from '../constants';

  export default {
    name: 'Login',

    async created() {
      const urlToken = this.$route.query.token;

      if (urlToken) {
        this.setToken(urlToken);
        this.$router.push('/tweets');
      } else if (this.token) {
        setTimeout(() => this.$router.push('/tweets'), 1000);
      }
    },

    computed: {
      loginLink() {
        return `${constants.API_URL}/auth/login`;
      },

      ...mapState('Tweets', ['token']),
    },

    methods: {
      ...mapMutations('Tweets', ['setToken']),
    },
  };
</script>
