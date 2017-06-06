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
            history_total: 1,
            cover: "http://a3.att.hudong.com/35/50/19300542898388141672508205437_950.jpg"
          },
          {
            name: "花瓶2",
            target_price: 2000,
            history_total: 2,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1524948_708627092483370_815085189_n.jpg?oh=37981d1c4b5fdf85717ba5fab70ac8a1&oe=59DFF2AA"
          },
          {
            name: "花瓶3",
            target_price: 3000,
            history_total: 3,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1512538_708626979150048_290884037_n.jpg?oh=544cde1689145b2e08e5b8a5f5bdb588&oe=59A60A7F"
          },
          {
            name: "花瓶4",
            target_price: 4000,
            history_total: 4,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1551502_708626989150047_1865998111_n.jpg?oh=f7dca1c41af99f05a64779177bc98aa4&oe=59AA374A"
          },
          {
            name: "花瓶1",
            target_price: 1000,
            history_total: 1,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1554431_708627009150045_424928843_n.jpg?oh=97bc796f0392697064428c77887ac277&oe=59ABFC6B"
          },
          {
            name: "花瓶2",
            target_price: 2000,
            history_total: 2,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1174847_708627029150043_1662284940_n.jpg?oh=7ff425dea72fce26905ffa2090982791&oe=59B138C9"
          },
          {
            name: "花瓶3",
            target_price: 3000,
            history_total: 3,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1506819_708627042483375_996205601_n.jpg?oh=7335dddfa4749056c28d1fe5f52b1f6b&oe=59E30DF0"
          },
          {
            name: "花瓶4",
            target_price: 4000,
            history_total: 4,
            cover: "https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/1512550_708627072483372_1063704681_n.jpg?oh=cbe19af988f601ba48c90420244734c6&oe=59D9D5C9"
          }
        ]
      }
    }
  }
</script>

<style lang="sass">
  @import '../../sass/var.scss';
  
  .container
    .title
      border-left: 6px solid $color_red
      font-size: 24px
      font-weight 900
      padding-left: 15px
      margin-bottom: 15px
</style>
