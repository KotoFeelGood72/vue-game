<template>
  <section class="hero">
    <div class="section_in">
      <div class="hero_main">
        <catalog-list title="Каталог товаров"/>
        <hero-slider/>
      </div>
    </div>
  </section>
  <section class="hitProducts">
    <products-block title="Хиты продаж"></products-block>
  </section>
  <section class="newProducts">
    <products-block title="Новинки"></products-block>
  </section>
  <section class="saleProducts">
    <div class="section_in">
      <div class="saleProducts_main">
        <ul class="saleProducts_list">
          <li><sale-card card-title="Маска для мафии “Чикаго” уже в продаже" card-price="590"/></li>
          <li><sale-card card-title="Маска для мафии “Чикаго” уже в продаже" card-price="590"/></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="saleProducts">
    <products-block title="Товары со скидками"></products-block>
  </section>
  <section class="contentBlock">
    <div class="section_in">
      <div class="contentBlock_main">
        <h4>Тут должен быть заголовок</h4>
        <div class="contentBlock_txt">
          <p>Рады приветствовать вас в интернет-магазине Mafia-Rekvizit.Ru! У нас вы можете купить разнообразный реквизит для игры в мафию: маски, карты, номерки, скатерти и многое другое. Товары в магазине представлены как в виде отдельных позиций, так и в виде готовых наборов. Необходимый реквизит в нашем каталоге найдут любители классической, спортивной и городской мафии.</p>
            <p>Недорогие наборы для игры в мафию, состоящие из карт и пластиковых масок, отлично подойдут для дружеской вечеринки в домашней обстановке или тайм-баре. Если вы открываете маф-клуб или просто планируете игать в мафию по классическим правилам, выбирайте профессиональные наборы. Реквизит в таких наборах рассчитан на более интенсивный режим эксплуатации, а маски на резинках обеспечивают соблюдение правильной «ночной» посадки игроков за столом.</p>
            <p>Реквизит для мафии в интернет-магазине Mafia-Rekvizit.Ru вы можете приобрести в технической упаковке, если хотите сэкономить при покупке. А за небольшую доплату мы отправляем его в красивой подарочной упаковке.</p>
            <p>Большую часть реквизита, представленного в магазине, мы производим самостоятельно. Поэтому наш товар всегда есть в наличии. Любой реквизит или набор для игры в мафию из нашего каталога может быть адаптирован под ваши требования и изготовлен на заказ. Если вам нужен реквизит с вашим логотипом, из определенных материалов или определенного размера, обращайтесь — сделаем!</p>
            <p>Также в нашем магазине представлена различная сувенирная продукция мафиозной тематики: ручки, значки, кружки, майки и т. д. Доставку производим по России и странам СНГ!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ProductsBlock from "@/components/global/ProductsBlock";
import HeroSlider from "@/components/HeroSlider";
import CatalogList from "@/components/CatalogList";
import SaleCard from "@/components/global/saleCard";

export default {
  name: 'HomeView',
  components: {
    CatalogList,
    HeroSlider,
    ProductsBlock,
    SaleCard
  }
}
</script>

<style lang="scss">
  .hero_main {
    @include flex-space;
    align-items: flex-start;
    height: 50.4rem;
    margin: 3rem 0 8.1rem 0;

    .cat_list_w {
      background-color: $white;
      width: 100%;
      height: 100%;
      padding: 3.2rem 0 3.2rem 0;
      margin-right: 3rem;
    }
    .cat_list_title {
      color: $lightRed;
      font-family: $font_3;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      padding-left: 2.7rem;
    }

    .cat_list {
      li {
        a {
          @include flex-start;
          position: relative;
          z-index: 1;
          padding: 1.5rem 2.7rem;
          &:after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: '';
            background: $gradient;
            @include z-index(el);
            opacity: 0;
            border-radius: 0 .2rem .2rem 0;
            transition: all .3s ease;
          }
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: .5rem;
            height: 100%;
            content: '';
            background: $gradient;
            @include z-index(el);
            border-radius: 0 .2rem .2rem 0;
            opacity: 0;
            transition: all .3s ease;
          }
          &:hover {
            &:after {
              opacity: .1;
            }
            &:before {
              opacity: 1;
            }
          }
        }
      }
    }

  }
  .hero_slider {
    max-width: 96.7rem;
    height: 100%;
  }
  .saleProducts_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
    grid-gap: 3rem;
  }
  .saleProducts_main {
    margin-bottom: 8rem;
  }
  .contentBlock_main {
    margin-bottom: 6rem;
    h4 {
      font-size: 3rem;
      font-family: $font_3;
      color: #705658;
      margin-bottom: 2rem;
    }
    .contentBlock_txt {
      p, ul, ol, span {
        font-size: 2rem;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
</style>
