<template>
  <section class="bread">
    <div class="section_in">
      <div class="bread_main">
        <ul class="bread_list">
          <li>Главная страница</li>
          <li>Таблички</li>
        </ul>
        <div class="bread_title">
          <h1>{{title}}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BreadcrumbPages",
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
  .bread_list {
    @include flex-start;
    padding: 2.6rem 0;
    margin-bottom: 2rem;
    position: relative;
    &:before {
      position: absolute;
      top: 0;
      left: -200%;
      width: 400%;
      height: 100%;
      background-color: $white;
      content: '';
      @include z-index(el);
    }

    li {
      position: relative;
      padding: 0 .7rem;
      &:after {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: .3rem;
        height: .3rem;
        content: '';
        background-color: $dark;
        right: 0;
        border-radius: 100%;
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  .bread_title {
    margin-bottom: 2rem;
    h1 {
      font-size: 3.5rem;
      color: $lightRed;
      font-family: $font_3;
    }
  }
</style>