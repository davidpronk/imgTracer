<template>
    <div>
      <h1>Image Tracer</h1>
      <h2>{{enteredPath}}</h2>
      <image-input @pathEntered="enteredPath = $event"></image-input>
      <image-output :imgPath="enteredPath"></image-output>
    </div>
</template>

<script>
  import Input from './Input.vue';
  import Image from './Image.vue';

  export default {
    props: [],
    data() {
      return {
        enteredPath: ''
      }
    },
    components: {
      'image-input': Input,
      'image-output': Image
    }
  }
</script>
