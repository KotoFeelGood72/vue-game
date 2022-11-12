<template>
  <section class="products_block">
    <div class="section_in">
      <div class="products_block_main">
        <h2>{{title}}</h2>
        <div class="products_block_slider">
          <swiper
              :slides-per-view="4"
              :space-between="30"
              :modules="modules"
              @swiper="onSwiper"
              @slideChange="onSlideChange">

            <swiper-slide v-for="item in 10" :key="item">
              <products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590" :idProduct="item"/>
            </swiper-slide>
          </swiper>
        </div>
        <div class="products_slider_navigation">
          <div class="product_slider_prev" ref="prev" @click="swiper.slidePrev()">
            <button type="button"><img src="@/assets/i/prev.svg" alt=""></button>
          </div>
          <div class="product_slider_next" ref="next" @click="swiper.slideNext()">
            <button type="button"><img src="@/assets/i/next.svg" alt=""></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductsCard from "@/components/global/ProductsCard";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css/navigation';
import 'swiper/css';

export default {
  name: "ProductsBlock",
  props: {
    title: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductsCard
  },
  setup() {

    const swiper = ref();


    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      swiper,
      onSwiper: instance => swiper.value = instance,
      onSlideChange,
    };
  },
};
</script>

<style scoped lang="scss">
  .products_block_main {
    position: relative;
    margin-bottom: 8rem;
  }
  .products_block_main h2 {
    text-align: center;
    color: #705658;
    margin-bottom: 3rem;
  }
  .products_block_slider {
    padding-bottom: 3rem;
    border-bottom: .1rem solid #B7BCC0;
  }
  .products_slider_navigation {
    @include flex-center;
    div {
      width: 6rem;
      height: 6rem;
      border: .1rem solid #B7BCC0;
      border-top: 0;
      button {
        @include flex-center;
        width: 100%;
        height: 100%;
        img {
          width: 1.2rem;
          height: .5rem;
        }
      }
    }
  }
</style>