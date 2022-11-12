<template>
  <header>
    <div class="section_in">
      <div class="header_main_w">
        <div class="header_main_top">
          <div class="header_logo_w">
              <div class="header_logo">
                <img src="../../assets/i/logo.png" alt="">
              </div>
            <div class="header_logo_slogan">Продажа товаров для Гиков</div>
          </div>
          <div class="header_col_right">
            <div class="header_search">
              <input type="search" placeholder="Поиск товаров">
              <button type="submit"><img src="../../assets/icons/search.svg" alt=""></button>
            </div>
            <div class="header_action">
              <ul v-on:click="dropVisible = !dropVisible" class="header_number" :class="{dropVisible}">
                <li>8 (064) 765-23-34</li>
                <transition-group name="fade">
                  <div class="number_dropdown" v-if="dropVisible">
                    <li><a href="#">8 (064) 765-23-34</a></li>
                    <li><a href="#">8 (064) 765-23-34</a></li>
                  </div>
                </transition-group>
              </ul>
              <div class="header_sing_w">
                <a href="#">Вход/Регистрация</a>
              </div>
            </div>
          </div>
        </div>
        <div class="header_main_bottom">
          <nav>
            <ul class="header_nav">
              <li><router-link to="/">Главная</router-link></li>
              <li><router-link :to="{name: 'shop'}">Все товары</router-link></li>
              <li><router-link to="/">Скидки и акции</router-link></li>
              <li><router-link to="/">О мафии</router-link></li>
              <li><router-link to="/">Доставка и оплата</router-link></li>
              <li><router-link to="/about">О нас</router-link></li>
              <li><router-link to="/">Контакты</router-link></li>
            </ul>
          </nav>
          <div class="header_cart_w">
            <div class="header_cart_img_w">
              <div class="header_cart_img">
                <img src="../../assets/icons/cart.svg" alt="">
              </div>
              <div class="header_cart_count">21</div>
            </div>
            <div class="header_cart_title">
              <p>Корзина</p>
              <div class="header_cart_total">144 323</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "header-main",
  data() {
    return {
      dropVisible: false,
    }
  }
}
</script>

<style scoped lang="scss">
header {
  overflow-x: hidden;
}
.header_main_top {
  @include flex-start;
  padding: 1rem 0;
}
.header_logo_w {
  margin-right: 10rem;
}
.header_logo_slogan {
  font-size: 1.4rem;
  color: $lightRed;
  white-space: nowrap;
}
.header_logo {
  width: 15.8rem;
}
.header_action {
  @include flex-end;
  width: 100%;
  max-width: 40rem;
}
.header_col_right {
  @include flex-start;
}
.header_col_right {
  width: 100%;
}
.header_search {
  width: 100%;
  border: .1rem solid $gray;
  position: relative;
  border-radius: $gl_radius;
  margin-right: 5.8rem;
  flex: 1;
  input {
    @include app;
    width: 100%;
    height: 100%;
    padding: 1.5rem 2rem;
    color: $gray;
  }
  button {
    @include app;;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    width: 1.7rem;
    height: 1.7rem;
    @include flex-center;
  }
}

.header_number {
  position: relative;
  cursor: pointer;
  margin-right: 3rem;
  border-right: .1rem solid $gray;
  padding-right: 3rem;
  font-family: $font_2;
  user-select: none;
  &:after {
    top: 50%;
    transform: translateY(-50%);
    content: '';
    position: absolute;
    right: 1.5rem;
    width: .3rem;
    height: .4rem;
    border-top: solid .3rem $dark;
    border-left: solid .3rem transparent;
    border-right: solid .3rem transparent;
  }
  .number_dropdown {
    position: absolute;
    top: calc(100% + 1rem);
    background-color: $white;
    padding: 1rem .7rem;
    width: 100%;
    left: -.7rem;
    border-radius: $gl_radius;
    li {
      &:not(:last-child) {
        margin-bottom: 1rem;
        border-bottom: .1rem solid rgba(66, 66, 66, 0.18);
        padding-bottom: 1rem;
      }
    }
    a {
      font-size: 1.8rem;
    }
  }
}
.dropVisible {
  &:after {
    top: 43%;
    border-top: none;
    border-bottom: solid .3rem $dark;
  }
}
.header_sing_w {
  font-family: $font_2;
}
.header_main_bottom {
  position: relative;
  @include flex-space;
  padding: 2.5rem 0;
  a {
    color: $white;
  }
  &:before {
    position: absolute;
    top: 0;
    left: -100%;
    width: 500%;
    content: '';
    background-color: $red;
    height: 100%;
    @include z-index(el);
  }
}
.header_nav {
  @include flex-start;
  li {
    &:not(:last-child) {
      margin-right: 4rem;
    }
    a {
      font-size: 1.8rem;
      font-family: $font_2;
    }
  }
}
.header_cart_w {
  @include flex-start;
}

.header_cart_img {
  &_w {
    position: relative;
    margin-right: 2rem;
  }
  width: 3.5rem;

}
.header_cart_count {
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 1rem;
  font-family: $font_3;
  background: #9E9E9E;
  box-shadow: -.6rem .2rem 1.5rem rgba(57, 92, 60, 0.365291);
  width: 2rem;
  height: 2rem;
  @include flex-center;
  border-radius: 100%;
  color: $white;
}

.header_cart_title {
  color: $white;
  p {
    opacity: .7;
    font-size: 1.4rem;
    margin-bottom: .5rem;
  }
  .header_cart_total {
    font-size: 1.8rem;
    font-family: $font_2;
    &:after {
      content: ' руб.';
    }
  }
}

</style>