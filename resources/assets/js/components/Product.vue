<template lang="pug">
  router-link(:to="{path: '/product_detail'}")
    .productbox
      .top
        .cover(:style="bg_css")
        .productbtn
          i.fa.fa-hand-o-up
      .bottom
        h1.producttitle {{ product.name }}
        .texts
          .pricerow
            .price 起標價格
              span.orangle NT${{ product.target_price }}
          .nowpeople 出價次數
            span.orangle {{ product.history_total }}次
        .orangebar
</template>

<script>
	export default {
		props: ['product'],
    computed: {
      bg_css: function() {
        return {"background-image": "url('" + this.product.cover + "')"}
      }
    }
	}
</script>

<style lang="sass">
  @import '../../sass/var.scss';

  .productbox
    margin: 10px
    background-color: white
    box-shadow: 0px 0px 12px rgba(0,0,0,0.2)
    border-radius: 5px
    cursor: pointer
    &:hover
      .top .productbtn
        bottom: 10px
      .cover
        transform: scale(1.13)

    .top
      height: 180px
      position: relative
      overflow: hidden
      .cover
        width: 100%
        height: 100%
        position: absolute
        background-size: cover
        left: 0
        top: 0
        border-radius: 5px 5px 0px 0px
        transition: 0.3s
      .productbtn
        width: 42px
        height: 42px
        border-radius: 50%
        position: absolute
        left: 15px
        bottom: -50px
        background-color: #fff
        color: #EB5E00
        box-shadow: 0px 0px 12px rgba(0,0,0,0.2)
        cursor: pointer
        transition: bottom 0.3s
        i
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%, -50%)
          font-size: 22px
        &:hover
          background-color: $color_dark_orange
          color: white

    .bottom
      height: 144px
      padding: 15px
      position: relative
      .producttitle
        font-size: 25px
        margin-top: 0px
      .texts
        font-size: 15px
        letter-spacing: 1px
        .orangle
          padding-left: 5px
          color: #ff6e3a
        .pricerow
          margin-bottom: 10px
      .orangebar
        height: 5px
        width: 100%
        position: absolute
        bottom: 0px
        left: 0px
        background-color: $color_dark_orange
        border-radius: 0px 0px 5px 5px
</style>
