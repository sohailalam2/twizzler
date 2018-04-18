<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .Tweet {
    &__replies {
      margin-left: 10em;
    }

    a {
      color: $primary;
    }

    .testimonial-quote {
      font-size: 16px;
    }

    .testimonial-quote blockquote {
      /* Negate theme styles */
      border: 0;
      margin: 0;
      padding: 0;

      background: none;
      color: gray;
      font-family: Georgia, serif;
      font-size: 1.2em;
      font-style: italic;
      line-height: 1.4 !important;
      margin: 0;
      position: relative;
      text-shadow: 0 1px white;
      z-index: 0;
    }

    .testimonial-quote blockquote * {
      box-sizing: border-box;
    }

    .testimonial-quote blockquote p {
      color: #75808a;
      line-height: 1.4 !important;
    }

    .testimonial-quote blockquote p:first-child:before {
      content: '\201C';
      color: $primary;
      font-size: 1.2em;
      font-weight: 700;
      opacity: .3;
      position: absolute;
      top: -.4em;
      left: -.2em;
      text-shadow: none;
      z-index: -300;
    }

    .testimonial-quote cite {
      color: gray;
      display: block;
      font-size: .8em;
    }

    .testimonial-quote cite span {
      color: #5e5e5e;
      font-size: 0.8em;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      text-shadow: 0 1px white;
    }

    .testimonial-quote {
      position: relative;
    }

    .testimonial-quote .quote-container {
      /*padding-left: 160px;*/
    }

    .testimonial-quote.right .quote-container {
      padding-left: 0;
      padding-right: 160px;
    }

    .testimonial-quote.right cite {
      text-align: right;
    }
  }
</style>


<template lang="pug">
  .Tweet
    article.media(v-if="tweet")
      .media-content
        .content.testimonial-quote.group
          .quote-container
            blockquote: p {{tweet.comment}}
            cite: span {{tweet.name}}
            br
            a(v-if="!isReply", @click="onLike"): i.fa.fa-thumbs-up &nbsp; ({{tweet.likes}})
            a(v-if="!isReply", @click="onReply") &nbsp; &nbsp; Reply

        span(v-if="tweet.replies" v-for="reply in tweet.replies")
          Tweet.Tweet__replies(:tweet="reply", :isReply="true")
    // ---------------------------------
    // Reply Modal Window
    // ---------------------------------
    ReplyModal(:isActive="showReplyModal", @close="onReplyModalClose", @reply="onReplyModalSubmit")
</template>

<script>
  import ReplyModal from './ReplyModal';

  export default {
    name: 'Tweet',

    components: {
      ReplyModal,
    },

    props: {
      tweet: {
        type: Object,
        required: true,
      },
      isReply: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        showReplyModal: false,
      };
    },

    methods: {
      onLike() {
        this.$emit('like', this.tweet.id);
      },
      onReply() {
        this.showReplyModal = true;
      },
      onReplyModalClose() {
        this.showReplyModal = false;
      },
      onReplyModalSubmit(reply) {
        this.showReplyModal = false;
        this.$emit('reply', { id: this.tweet.id, reply });
      },
    },
  };
</script>
