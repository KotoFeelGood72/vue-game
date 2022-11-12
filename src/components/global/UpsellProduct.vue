<template>
  <section class="upsell">
      <div class="section_in">
          <div class="upsell_main">
              <div class="upsell_title"><h4>Вы недавно смотрели</h4></div>
              <ul class="upsell_list">
                <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590" v-bind:sales="true" /></li>
                <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
                <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
                <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
              </ul>
          </div>
      </div>
  </section>
</template>

<script>
import ProductsCard from '@/components/global/ProductsCard.vue'
export default {
  components: {
    ProductsCard,
  }
}
</script>

<style lang="scss">
  .upsell {
    background-color: $white;
    padding-top: 5rem;
  }

  .upsell_title h4 {
    font-size: 2.6rem;
    color: $lightRed;
    margin-bottom: 2rem;
    font-family: $font_3;
  }

  .upsell_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
    grid-gap: .1rem;
    border: .1rem solid #B7BCC0;
    background-color: #B7BCC0;
    margin-bottom: 5.1rem;
  }
  
</style>