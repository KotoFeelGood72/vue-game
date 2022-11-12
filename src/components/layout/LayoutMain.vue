<template>
  <header-main/>
  <div class="wrapper">
    <div class="base">
      <slot></slot>
    </div>
    <footer-main/>
  </div>
</template>

<script>

import HeaderMain from "@/components/header/HeaderMain";
import FooterMain from "@/components/footer/FooterMain";
export default {
  name: "LayoutMain",
  components: {FooterMain, HeaderMain}
}
</script>

<style>
  #app {
    overflow-x: hidden!important;
    width: 100%;
    height: 100%;
  }
</style>