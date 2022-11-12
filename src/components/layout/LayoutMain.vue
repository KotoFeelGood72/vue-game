<template>
  <header-main/>
  <slot></slot>
</template>

<script>

import HeaderMain from "@/components/header/HeaderMain";
export default {
  name: "Layout",
  components: {HeaderMain}
}
</script>

<style scoped>

</style>