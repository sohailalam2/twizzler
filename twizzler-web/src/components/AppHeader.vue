<template lang="pug">
  .AppHeader
    nav.navbar.is-primary
      .navbar-brand
        router-link.navbar-item(to="/")
          i.fa.fa-smile-o.fa-2x &nbsp; Twizzler
        .navbar-burger.burger(data-target="navbarMenuBurger", :class="{'is-active': isBurgerActive}", @click="toggleBurger")
          span
          span
          span
      #navbarMenuBurger.navbar-menu(:class="{'is-active': isBurgerActive}")
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.bdtw-button.button.is-primary(href="https://sohailalam.in/")
                  span: i.fa.fa-user-circle
                  span.has-text-weight-bold &nbsp; About Me
              p.control
                a.bdtw-button.button.is-primary(href="https://github.com/sohailalam2/twizzler")
                  span: i.fa.fa-github
                  span.has-text-weight-bold &nbsp; Fork
              p.control(v-if="token")
                a.bdtw-button.button.is-info(@click="onLogout")
                  span: i.fa.fa-sign-out
                  span.has-text-weight-bold &nbsp; Logout
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'AppHeader',

    data() {
      return {
        isBurgerActive: false,
      };
    },

    computed: {
      ...mapState('Tweets', ['token']),
    },

    methods: {
      toggleBurger() {
        this.isBurgerActive = !this.isBurgerActive;
      },
      onLogout() {
        this.clearToken();
        this.$router.push('/login');
      },
      ...mapMutations('Tweets', ['clearToken']),
    },
  };
</script>
