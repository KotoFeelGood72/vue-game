<template>
  <div class="products_card_in">
    <div class="products_card_head">
      <div class="products_card_status" :class="status ? 'green_status': 'red_status'">{{status ? 'В наличии': 'Нет в наличии'}}</div>
      <div class="products_card_top" v-if="sales">Новинка</div>
    </div>
    <div class="products_card_img">
      <router-link :to="{name: 'single-product', params: {link: title} }"><img :src="require('@/assets/i/products_1.jpg')" alt="Products"></router-link>
    </div>
    <div class="products_card_content">
      <h3>{{title}}</h3>
      <div class="products_card_details">
        <div class="products_card_price">Цена <span>{{price}}</span></div>
        <div class="products_card_buy"><a href="#">Купить</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
  props: {
    status: String,
    imgUrl: String,
    title: String,
    price: Number,
    sales: Boolean,
  },
  data() {
    return {
      link: this.$route.params['link']
    }
  }
}
</script>

<style scoped lang="scss">
  .products_card_in {
    background-color: $white;
    padding: 2rem 2rem 1.1rem 2rem;
  }
  .green_status {
    color: #4DA455;
  }
  .red_status {
    color: #D0021B;
  }

  .products_card_img {
    width: 100%;
    height: 17rem;
    margin-bottom: 2rem;
    img {
      object-fit: cover;
    }
  }
  .products_card_content {
    h3 {
      font-size: 1.6rem;
      font-family: $font_2;
      font-weight: 500;
      opacity: .7;
      margin-bottom: 1rem;
    }
  }
  .products_card_details {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    grid-gap: 3rem;
    align-items: center;
  }
  .products_card_buy {
    @include flex-end;
    a {
      @include flex-end;
      color: $red;
      padding: 1rem 2rem;
      border-radius: $gl_radius;
      border: .1rem solid $red;
      display: inline-flex;
    }
  }
  .products_card_price {
    font-size: 1.6rem;
    font-family: $font_3;
    color: #12212DB2;
    span {
      color: #705658;
      &:after {
        content: ' ₽';
        font-family: $font_3;
        font-weight: 700;
      }
    }
  }

  .products_card_head {
    @include flex-space;
    margin-bottom: 1rem;
    min-height: 3.4rem;

    .products_card_top {
      font-size: 1.6rem;
      background-color: #75D67E;
      color: $white;
      padding: .5rem 1rem;
    }
  }
</style>