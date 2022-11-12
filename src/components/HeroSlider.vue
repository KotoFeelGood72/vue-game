<template>
  <div class="hero_slider">
    <swiper
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
      <swiper-slide>
        <div class="hero_slide_img">
          <img src="../assets/i/slide.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero_slide_img">
          <img src="../assets/i/slide.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="hero_slide_img">
          <img src="../assets/i/slide.jpg" alt="">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/css';

  export default {
  name: "HeroSlider",
  components: {
  Swiper,
  SwiperSlide,
},
  setup() {
  const onSwiper = (swiper) => {
  console.log(swiper);
};
  const onSlideChange = () => {
  console.log('slide change');
};
  return {
  onSwiper,
  onSlideChange,
};
},
};
</script>
<style lang="scss">

</style>