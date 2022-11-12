<template>
  <footer class="footer">
    <div class="section_in">
      <div class="footer_main">
        <div class="footer_col_company">
          <div class="footer_logo">
            <a href="/">
              <img src="@/assets/i/logo_footer.png" alt="">
            </a>
          </div>
          <p>Добро пожаловать в интернет – магазин реквизита для игры в мафию Mafia Rekvizit!</p>
          <span>© Все права защищены 2022</span>
        </div>
        <div class="footer_col_catalog">
          <catalog-list title="Каталог"/>
        </div>
        <div class="footer_col_service">
          <p>Сервис и поддержка</p>
          <ul>
            <li><a href="/">О Магазине</a></li>
            <li><a href="/">Доставка и оплата</a></li>
            <li><a href="/">Скидки и акции</a></li>
            <li><a href="/">Личный кабинет</a></li>
            <li><a href="/">О Мафии</a></li>
          </ul>
        </div>
        <div class="footer_col_info">
          <div class="footer_phone">
            <a href="#">8 (064) 765-23-34</a>
          </div>
          <div class="footer_timework">ежедневно, 10:00-22:00</div>
          <div class="footer_email">
            <a href="/">shop@mafia-rekvizit.ru</a>
          </div>
          <ul class="footer_social_list">
            <li><a href="/"><img src="@/assets/i/vk.svg" alt=""></a></li>
            <li><a href="/"><img src="@/assets/i/in.svg" alt=""></a></li>
            <li><a href="/"><img src="@/assets/i/yu.svg" alt=""></a></li>
          </ul>
        </div>
        <div class="footer_col_action">
          <p>Скидка 10% на первую покупку за подписку</p>
          <div class="footer_action_form">
            <form action="">
              <div class="footer_input_w">
                <input type="text" placeholder="Email">
              </div>
              <div class="footer_btn_w">
                <button type="submit">Подписаться</button>
              </div>
            </form>
            <div class="footer_policy_txt">
              <p>Нажимая кнопку “Подписаться” вы соглашаетесь с <a href="/">Политикой конфиденциальности</a> сайта</p>
            </div>
          </div>
          <div class="footer_payment_method">
            <img src="@/assets/i/payment.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CatalogList from "@/components/CatalogList";
export default {
  name: "FooterMain",
  components: {CatalogList}
}
</script>

<style lang="scss">

.footer {
  background-color: $red;
  color: $white;
  a {
    color:$white
  }
}

.footer_main {
  @include flex-start;
  align-items: flex-start;
  padding: 3rem 0 2.3rem 0;

  .cat_list_title {
    font-size: 1.8rem;
    font-family: $font_3;
    margin-bottom: 1rem;
  }
  .footer_col_service {
    p {
      font-size: 1.8rem;
      font-family: $font_3;
      margin-bottom: 1rem;
    }
    ul {
      li {
        a {
          font-size: 1.4rem;
        }
        &:not(:last-child) {
          margin-bottom: .3rem;
        }
      }
    }
  }
  .footer_col_catalog {
    margin-right: 4.4rem;
    max-width: 17.4rem;
    width: 100%;
  }
  .cat_list {
    li {
      a {
        font-size: 1.4rem;
      }
      &:not(:last-child) {
        margin-bottom: .3rem;
      }
    }
  }
}
.footer_col_company {
  max-width: 21rem;
  margin-right: 4.2rem;
  font-size: 1.4rem;
  width: 100%;
  .footer_logo {
    width: 15.8rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
}

.footer_social_list {
  @include flex-start;
  li {
    width: 3.5rem;
    height: 3.5rem;
    &:not(:last-child) {
      margin-right: 1rem;
    }
    a {
      @include flex-center;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      overflow: hidden;
    }
  }
}
.footer_col_service {
  margin-right: 2.9rem;
  max-width: 21rem;
  width: 100%;
}
.footer_col_info {
  margin-right: 3.1rem;
  max-width: 22rem;
  width: 100%;
}
.footer_phone, .footer_email {
  margin-bottom: 1rem;
  a {
    font-size: 1.8rem;
    font-family: $font_3;
    margin-bottom: 1rem;
  }
}
.footer_timework {
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.footer_col_action {
  width: 100%;
  flex: 1;
  p {
    font-size: 1.8rem;
    font-family: $font_3;
    margin-bottom: 2rem;
  }
}
.footer_policy_txt {
  p {
    font-size: 1.4rem;
    font-family: $font_1;
  }
}
.footer_payment_method {
  width: 13.2rem;
}

.footer_action_form {
  form {
    @include flex-start;
    margin-bottom: 1.2rem;
    .footer_input_w {
      margin-right: 2.6rem;
    }
    input {
      @include app;
      color: $white;
      width: 100%;
      border-bottom: .1rem solid rgba(255, 255, 255, 0.39);
      padding: 1rem 0;
      &::-webkit-input-placeholder {
        color: $white;
        opacity: .7;
        font-family: $font_1;
      }
    }
  }
}
.footer_btn_w {
  button {
    @include app;
    border: .1rem solid $white;
    border-radius: $gl_radius;
    padding: 1rem 2.3rem;
    color: $white;
  }
}

</style>