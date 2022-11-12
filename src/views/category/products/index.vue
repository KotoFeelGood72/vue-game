<template>
  <p>Good {{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id']
    }
  }
}
</script>

<style>

</style>