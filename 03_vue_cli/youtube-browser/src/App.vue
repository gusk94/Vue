<template>
  <div class="container">
    <!-- step no.3 -->
    <!-- input 값이 바뀔때마다 -> oninput -> inputChange -> onInputChange -->
    <SearchBar @inputChange="onInputChange"/>
    <VideoDetail :video="selectedVideo"/>
    <VideoList :videos="videos" @selectVideo="onSelectVideo"/>
  </div>
</template>

<script>
import axios from 'axios'


// step no.1
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

// Vue
export default {
  name: 'App',
  // step no.2
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    // inputChange 이벤트 발생마다 실행
    onInputChange: function(inputValue){
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue
        }
      })
      .then(response=>{
        this.videos = response.data.items
      })
      .catch(error=>{
        console.log(error)
      })
    },
    onSelectVideo: function(video){
      this.selectedVideo = video
    }
  }
}
</script>

<style>

</style>