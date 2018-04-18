<template lang="pug">
  .ReplyModal.modal(:class="{'is-active' : shouldBeActive}")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Reply to Tweet
        button.delete(aria-label="close", @click="onClose")
      section.modal-card-body
        article.media
          .media-content
            .field: p.control: textarea.textarea(placeholder="Add a reply", :maxlength="maxLength", v-model="reply")
            .field: p.control
              span.is-secondary ({{ch}}/{{maxLength}})
      footer.modal-card-foot
        button.button.is-primary(@click="onReply") Reply
        button.button(@click="onClose") Cancel
</template>

<script>
  export default {
    name: 'ReplyModal',
    props: {
      isActive: false,
    },
    data() {
      return {
        reply: '',
        shouldBeActive: false,
      };
    },
    watch: {
      // show the reply modal based on shouldBeActive variable
      isActive() {
        this.shouldBeActive = this.isActive;
      },
    },
    computed: {
      maxLength() {
        return 200;
      },
      ch() {
        return this.reply.length;
      },
    },
    methods: {
      onClose() {
        this.shouldBeActive = false;
        this.$emit('close');
      },
      onReply() {
        this.shouldBeActive = false;
        this.$emit('reply', String(this.reply));
        this.reply = '';
      },
    },
  };
</script>
