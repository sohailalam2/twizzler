<style lang="scss" scoped>
  .Tweets {
    padding-top: 2rem;

    &__messages {
      width: 100%;
    }

    &__comment {
      position: fixed;
      bottom: 1rem;
      width: 100%;
    }

    &__vertical-scroll {
      height: 40rem;
      overflow-y: auto;
    }
  }
</style>

<template lang="pug">
  .Tweets
    .Tweets__messages.columns.is-centered
      .column.is-three-quarters.is-mobile
        .Tweets__vertical-scroll
          span(v-for="tweet in tweets")
            Tweet(:tweet="tweet", @like="onLike", @reply="onReply")
            hr
    .Tweets__comment.columns.is-centered
      .column.is-three-quarters.is-mobile
        article
          section.media
            .media-content
              .field: p.control: textarea.textarea(placeholder="Add a comment", :maxlength="maxLength", v-model="comment")
              .field: p.control
                span.is-secondary ({{ch}}/{{maxLength}})
                button.button.is-primary.is-pulled-right(@click="onCommentSubmit") Post Comment
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Tweet from './Tweet';

  export default {
    name: 'Tweets',

    components: {
      Tweet,
    },

    async created() {
      await this.getTweets();
    },

    data() {
      return {
        maxLength: 200,
        comment: '',
      };
    },

    computed: {
      ch() {
        return this.comment.length;
      },
      ...mapState('Tweets', ['tweets', 'error']),
    },

    methods: {
      onLike(id) {
        this.likeTweet(id);
      },
      onReply({ id, reply }) {
        this.replyTweet({ id, reply });
      },
      onCommentSubmit() {
        this.postTweet({ comment: this.comment });
        this.comment = '';
      },
      ...mapActions('Tweets', ['getTweets', 'postTweet', 'likeTweet', 'replyTweet']),
    },
  };
</script>
