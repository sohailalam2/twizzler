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
  import constants from '../constants';

  export default {
    name: 'Login',

    computed: {
      loginLink() {
        return `${constants.API_URL}/auth/login`;
      },
    },
  };
</script>
