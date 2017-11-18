<template>
  <div>
    <form @submit="addImage">
      <input name="path" type="text">
      <button type="submit">Go!</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      addImage(event){
        event.preventDefault();
        this.$emit('pathEntered', event.target['path'].value);
      }
    }
  }
</script>
