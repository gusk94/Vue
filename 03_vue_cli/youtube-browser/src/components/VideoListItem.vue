<template>
  <li @click="onClick" class="list-group-item">
    <img :src="thumbnailUrl" alt="youtube-thumbnail">
    <div class="media-body" v-html="video.snippet.title"></div>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: {
      type: Object,
      required: true,
    }
  },
  computed: {
    thumbnailUrl: function(){
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onClick: function(){
      this.$emit('selectVideo', this.video)
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }
  li:hovor {
    background-color: #eee;
  }
</style>