<template>
  <BreadcrumbPages title="Каталог"/>
  <section class="products_grid_w">
    <div class="section_in">
      <div class="products_grid_w_main">
        <div class="products_grid-sidebar">
          <CatalogList title="Каталог товаров"/>
        </div>
        <div class="products_grid">
          <div class="products_grid_head">
            <div class="products_grid_count">Найдено <span>7 товаров</span></div>
            <div class="products_grid_sort">
              <select>
                <option value="popular">По популярности</option>
                <option value="popular">По цене</option>
                <option value="popular">В наличии</option>
                <option value="popular">Нет в наличии</option>
              </select>
            </div>
          </div>
          <div class="products_grid_txt">
            <p>Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами.</p>
          </div>
          <ul class="products_tables">
            <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
            <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
            <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
            <li><products-card title="Номерки для игры мафия «Сицилия»" price="590"/></li>
            <li><products-card status="В наличии" title="Номерки для игры мафия «Сицилия»" price="590"/></li>
            <li><products-card title="Номерки для игры мафия «Сицилия»" price="590"/></li>
          </ul>
        </div>
      </div>
      <div class="products_grid_desc">
        <p>Рады приветствовать вас в интернет-магазине Mafia-Rekvizit.Ru! У нас вы можете купить разнообразный реквизит для игры в мафию: маски, карты, номерки, скатерти и многое другое. Товары в магазине представлены как в виде отдельных позиций, так и в виде готовых наборов. Необходимый реквизит в нашем каталоге найдут любители классической, спортивной и городской мафии.</p>
        <p>Недорогие наборы для игры в мафию, состоящие из карт и пластиковых масок, отлично подойдут для дружеской вечеринки в домашней обстановке или тайм-баре. Если вы открываете маф-клуб или просто планируете игать в мафию по классическим правилам, выбирайте профессиональные наборы. Реквизит в таких наборах рассчитан на более интенсивный режим эксплуатации, а маски на резинках обеспечивают соблюдение правильной «ночной» посадки игроков за столом.</p>
      </div>
    </div>
  </section>
  <upsell-product/>
</template>

<script>
import BreadcrumbPages from "@/components/layout/BreadcrumbPages";
import CatalogList from "@/components/CatalogList";
import ProductsCard from "@/components/global/ProductsCard";
import UpsellProduct from '@/components/global/UpsellProduct.vue'
export default {
  name: "CatalogView",
  components: {
    CatalogList,
    BreadcrumbPages,
    ProductsCard,
    UpsellProduct,
  }
}
</script>

<style lang="scss">
  .products_grid_w_main {
    @include flex-start;
    align-items: flex-start;
    margin-bottom: 6rem;

  .cat_list_w {
    background-color: $white;
    width: 100%;
    height: 100%;
    padding: 3.2rem 0 3.2rem 0;
    margin-right: 3rem;
    min-width: 30.3rem;
  }
  .cat_list_title {
    color: $lightRed;
    font-family: $font_3;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    padding-left: 2.7rem;
  }

  .cat_list {
    width: 100%;
    height: 100%;
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
  .products_grid_head {
    @include flex-space;
    margin-bottom: 3rem;
    background-color: $white;
    padding: 1.7rem 3.1rem;
    border-radius: .2rem;
    font-size: 1.6rem;
    span {
      font-family: $font_3;
      color: #12212D;
      opacity: .7;
    }

    select {
      border: none;
      font-size: 1.8rem;
      font-family: $font_2;
      cursor: pointer;
      option {
        font-size: 1.6rem;
        font-family: $font_2;
        border: none;
      }
    }
  }
  .products_tables {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 3rem;
  }
  .products_grid {
    max-width: 96.9rem;
  }
  .products_grid_txt {
    margin-bottom: 3rem;
  }
  .products_grid-sidebar {
    margin-right: 3rem;
    max-width: 30.3rem;
    width: 100%;
    height: 100%;
    position: sticky;
    top: 2rem;
    left: 0;
  }

  .products_grid_desc {
    margin-bottom: 6rem;
    p, ul, ol, span {
        font-size: 2rem;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
  }
</style>