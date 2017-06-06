<template lang="pug">
  .container
    #myCarousel.carousel.slide(data-ride='carousel')
      ol.carousel-indicatiors
        li.active(data-target='#myCarousel', data-slide-to='0')
        li(data-target='#myCarousel', data-slide-to='1')

      .carousel-inner
        .item.active
          img(src='https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/1537886_709093932436686_13250153_o.jpg?oh=515a005c50894f7fb0bf5087523920da&oe=59B0E366')
        .item
          img(src='https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/17358995_207234599759123_2482567383044054483_o.jpg?oh=36da8fb8fed92ea6c076450e65bd61c0&oe=59A81B32')

      a.left.carousel-control(href='#myCarousel', data-slide='prev')
        span.glyphicon.glyphicon-chevron-left
        span.sr-only 上一頁
      a.right.carousel-control(href='#myCarousel', data-slide='next')
        span.glyphicon.glyphicon-chevron-right
        span.sr-only 下一頁
</template>

<style lang="sass">
  li
    list-style-type: none

  .carousel-inner
    .item img
      width: 100%
      height: 300px
</style>
