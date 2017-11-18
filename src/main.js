import Vue from 'vue';
import App from './App.vue';
import ImageTracer from './ImageTracer.vue';

Vue.component('image-tracer', ImageTracer);

new Vue({
  el: '#app',
  render: h => h(App)
});
