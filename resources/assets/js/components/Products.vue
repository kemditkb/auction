<template lang="pug">
  .container
    .title 古董
    .row
      .col-sm-3(v-for="product in products")
        my-product(:product="product")
</template>

<script>
  import Product from './Product.vue'

  export default {
    components: {
      'my-product': Product
    },
    data() {
      return {
        products: [
          {
            name: "花瓶1",
            target_price: 1000,
            history_total: 1
          },
          {
            name: "花瓶2",
            target_price: 2000,
            history_total: 2
          },
          {
            name: "花瓶3",
            target_price: 3000,
            history_total: 3
          },
          {
            name: "花瓶4",
            target_price: 4000,
            history_total: 4
          },
          {
            name: "花瓶1",
            target_price: 1000,
            history_total: 1
          },
          {
            name: "花瓶2",
            target_price: 2000,
            history_total: 2
          },
          {
            name: "花瓶3",
            target_price: 3000,
            history_total: 3
          },
          {
            name: "花瓶4",
            target_price: 4000,
            history_total: 4
          }
        ]
      }
    }
  }
</script>

<<style lang="sass">
  @import '../../sass/var.scss';
  
  .container
    .title
      border-left: 6px solid $color_red
      font-size: 24px
      font-weight 900
      padding-left: 15px
      margin-bottom: 15px
</style>
