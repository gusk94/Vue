import Vue from 'vue' // export  default 와 한 세트
import App from './App.vue'

new Vue({
    render: h => h(App)
}).$mount('#app')