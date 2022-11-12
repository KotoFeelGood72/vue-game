<template>
  <layout-main>
    <router-view/>
  </layout-main>
</template>



<style lang="scss">

  //.section_in {
  //  max-width: $page_width;
  //  margin: 0 auto;
  //  width: 100%;
  //}
</style>
<script>
import LayoutMain from "@/components/layout/LayoutMain";
export default {
  components: {LayoutMain}
}
</script>