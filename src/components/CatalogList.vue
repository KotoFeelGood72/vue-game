<template>
  <div class="cat_list_w">
    <div class="cat_list_title">{{title}}</div>
    <ul class="cat_list">
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="{name: 'category', params: {id: item.id} }">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CatalogList',
  data() {
      return{
        items: [
          {
            title: 'Наборы для мафии',
            id: '1'
          },
          {
            title: 'Маски',
            id: '2'
          },{
            title: 'Номерки',
            id: '3'
          },{
            title: 'Карты',
            id: '4'
          },{
            title: 'Скатерти',
            id: '5'
          },{
            title: 'Сувениры',
            id: '6'
          },
        ]
      }
  },
  props: {
    title: String,
  },
}
</script>