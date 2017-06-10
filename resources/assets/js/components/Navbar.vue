<template lang="pug">
  nav.navbar.navbar-default.navbar-fixed-top
    .container
      .navbar-header
        a.navbar-brand(href='#') 天下第一拍
      ul.nav.navbar-nav
        li.dropdown
          a.dropdown-toggle(data-toggle="dropdown", href="#") 最新公告
            span.caret
          ul.dropdown-menu
            li
              a(href="#") 全部公告
            li
              a(href="#") 公司訊息
            li
              a(href="#") 媒體報導
        li.dropdown
          a.dropdown-toggle(data-toggle="dropdown", href="#") 商品競拍
            span.caret
          ul.dropdown-menu
            li
              a(href="#") 古董文物
            li
              a(href="#") 書畫美術
            li
              a(href="#") 寶石
      ul.nav.navbar-nav.navbar-right
        li
          a(href="#") 登入
        li.dropdown
          a.dropdown-toggle(data-toggle="dropdown", href="#")
            i.fa.fa-user.fa-lg.fa-fw
            span.caret
          ul.dropdown-menu
            li
              a(href="#")
                i.fa.fa-child.fa-fw 個人檔案
            li
              a(href="#")
                i.fa.fa-sign-out.fa-fw 登出
</template>

<script>
  /*
  $(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".navbar").removeClass("navbar-top");
    else
        $(".navbar").addClass("navbar-top");
  });
  */
</script>

<style lang="sass">
  @import '../../sass/var.scss';

</style>
