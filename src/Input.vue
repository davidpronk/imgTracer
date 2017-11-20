<template>
  <div>
    <form @submit="addImage">
      <input name="path" type="text" value="https://stackoverflow.com/users/5521426/pronkert">
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
