<template>
  <catalog-view/>
  {{id}}
</template>

<script>
import CatalogView from '../CatalogView.vue'
export default {
  components: {CatalogView},
  data() {
    return{
      id: this.$route.params['id']
    }
  }
}
</script>

<style>

</style>