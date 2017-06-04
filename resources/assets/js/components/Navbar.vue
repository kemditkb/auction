<template lang="pug">
  nav.navbar.navbar-default.navbar-fixed-top.navbar-top
    .container
      .navbar-header
        a.navbar-brand(href='#') 天下第一拍
      .navbar-collapse.collapse
        .nav.navbar-nav.navbar-right
          li
            a(href='#') 登入
          li
            a(href='#') 登出
</template>

<script>
  $(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".navbar").removeClass("navbar-top");
    else
        $(".navbar").addClass("navbar-top");
  });
</script>

<style lang="sass">
  nav.navbar
    transition: 0.5s

  nav.navbar.navbar-default.navbar-fixed-top.navbar-top
    background-color: transparent
    a
      color: white
      transition: 0.5s
      &:hover
        color: #ff6e3a
</style>
