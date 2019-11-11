<template>
  <div>
    <ul class="list-group">
      <VideoListItem v-for="video in videos" :key="video.id.videoId" :video="video" @selectVideo="onSelectVideo"/>
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  methods: {
    onSelectVideo: function(video){
      this.$emit('selectVideo', video)
    }
  }
}
</script>

<style>

</style>