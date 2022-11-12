<template>
  <div class="saleCard_products">
    <a href="#">
      <div class="saleCard_content">
        <h3>{{cardTitle}}</h3>
        <div class="saleCard_price">{{cardPrice}}</div>
        <div class="saleCard_link">
          <a v-bind:href="cardLink">Подробнее</a>
        </div>
      </div>
      <div class="saleCard_img">
        <img v-bind:src="require('@/assets/i/mask.png')" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "saleCard",
  props: {
    cardTitle: String,
    cardPrice: Number,
    cardLink: String
  }
}
</script>

<style scoped lang="scss">
.saleCard_products {
  background-color: #E8E8E8;
  a {
    width: 100%;
    height: 100%;
    padding: 3rem 2.5rem 3rem 3rem;
    @include flex-start;
    align-items: flex-end;
    position: relative;
  }
}
.saleCard_content {
  h3 {
    font-size: 3rem;
    font-family: $font_3;
    color: #705658;
    margin-bottom: 2rem;
    max-width: 40rem;
  }
  .saleCard_price {
    font-size: 3rem;
    font-family: $font_3;
    color: $white;
    font-weight: 700;
    margin-bottom: 2rem;
    &:after {
      content: ' ₽';
    }
  }
  a {
    background-color: $red;
    font-size: 1.8rem;
    color: $white;
    padding: 1.6rem 6rem;
    border-radius: $gl_radius;
    display: inline-flex;
    width: auto;
  }
}

.saleCard_img {
  position: absolute;
  bottom: 4.7rem;
  right: 2.5rem;
  max-width: 27rem;
}


</style>