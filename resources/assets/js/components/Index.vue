<template lang="pug">
  div
    header.jumbotron
      .container
        h1 天下第一拍
        hr
        h4 拍拍都精采
    products
</template>

<script>
  import Products from './Products'

  export default {
    components: {
      'products': Products
    }
  }
</script>

<style lang="sass">
  header.jumbotron
    text-align: center
    background-image: url('http://imgs.ntdtv.com/pic/2016/10-14/p7748371a384009559.jpg')
    background-size: cover
    background-attachment: fixed
    .container
      color: white
      padding: 200px 0px
    hr
      max-width: 50px
      border: solid 2px #ff6e3a

    h4
      color: rgba(white, 0.5)
      font-weight: normal
</style>
