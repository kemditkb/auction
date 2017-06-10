<template lang="pug">
  .container
    .wrapper#login-wrapper
      section.login
        .row
          .col-md-6.col-md-push-3
            .panel.panel-primary
              .panel-heading
                .panel-title#login-title
                  i.fa.fa-sign-in 登入
              .panel-body
                form
                  .form-group
                    label 電子信箱
                    input.form-control(placeholder='Enter your email address')
                  .form-group
                    label 密碼
                    input.form-control(placeholder='Enter your password')
                  button.btn.btn-primary.pull-right 登入
</template>

<style lang="sass">
  #login-wrapper
    margin-top: 50px
    padding-top: 50px

  #login-title
    font-weight: 700
    letter-spacing: 2px
</style>