<template lang="pug">
  .container
    .wrapper#prod_detail
      .page-header
        h2 產品類別
      .row
        .col-sm-5.col-md-4.xs-margin
          img#b_img(src="https://www.intw.com.tw/imgs/product/2016090500215321.jpg")
          .row
            .col-xs-4
              a.s_img.thumbnail
                img(src="https://www.intw.com.tw/imgs/product/2016090500215322.jpg")
            .col-xs-4
              a.s_img.thumbnail
                img(src="https://www.intw.com.tw/imgs/product/2016090500215321.jpg")
            .col-xs-4
              a.s_img.thumbnail
                img(src="https://www.intw.com.tw/imgs/product/2016090500215323.jpg")
            .col-xs-4
              a.s_img.thumbnail
                img(src="https://www.intw.com.tw/imgs/product/2016090500215424.jpg")
        .col-sm-7.col-md-8.product-description
          h2 產品1
          .time
            .time_left
              img(src="img/timer.png")
              span#str_time_left 9天03時16分43秒
            .end_time
              img(src="img/clock.png")
              span#str_end_time 2017-06-20 19:42
          .container-fluid
            .row
              .col-md-6.product-info
                .info
                  .item 目前出價
                  .value 10,000
                .info
                  .item 起標價格
                  .value 10,000
                .info
                  .item 出價次數
                  .value 1次出價
                .info
                  .item 出價增額
                  .value $0
                .info
                  .item 最高出價者
                  .value -
                .info
                  .item 商品狀況
                  .value 舊物
                .info
                  .item 付款方式
                  .value 銀行匯款、現場付清
                .info
                  .item 取貨方式
                  .value 限面交(優良買家除外)
                .info
                  .item 運費
                  .value 僅供優良買家自費運送
                .info
                  .item 商品所在地
                  .value 台北市
                .info
                  .item 商品編號
                  .value ABC123
              .col-md-6.product-order
                form
                  label.radio-inline.bid_type
                    input(type="radio", name="bid_type")
                    span 自動出價
                  label.radio-inline.bid_type
                    input(type="radio", name="bid_type")
                    span 直接出價
                  .form-group.bid_price_info
                    label.bid_type_msg
                    input.form-control(placeholder='請輸入出價金額')
                  button.btn.btn-primary.pull-right 我要出價
</template>

<script>
  $(function() {
    $('.s_img').click(function(){
      var img = $(this).find('img').attr('src');
      $('#b_img').attr('src', img);
    });
  });
</script>

<style lang="sass">
  #prod_detail
    padding-top: 30px
    #b_img
      width: 100%
    .time
      .time_left
        float: left
        width: 50%
        height: 64px
        line-height: 64px
        font-size: 22px
        font-weight: bold
        letter-spacing: 2px
        img
          width: 60px
          height: 60px
        #str_time_left
          padding-left: 2px
      .end_time
        float: left
        width: 50%
        height: 64px
        line-height: 64px
        font-size: 22px
        font-weight: bold
        letter-spacing: 2px
        img
          width: 60px
          height: 60px
        #str_end_time
          padding-left: 2px
    .info
      padding-top: 10px
      font-size: 16px
      .item
        float: left
        width: 30%
        font-weight: bold
      .value
        float: left
        width: 70%
    .product-order
      padding-top: 10px
      .bid_price_info
        background: #EBEEF2
        .bid_type_msg      
          height: 100px
</style>
