<template lang="pug">
  .container
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
          }
        ]
      }
    }
  }
</script>