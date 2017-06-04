<template lang="pug">
  .container
    .wrapper#register-wrapper
      section.register
        .row
          .col-md-6.col-md-push-3
            .panel.panel-default
              .panel-heading
                strong 註冊
              .panel-body
                form
                  .form-group
                    label 姓名
                    input.form-control(placeholder='Enter your name')
                  .form-group
                    label 電子信箱
                    input.form-control(placeholder='Enter your email address')
                  .form-group
                    label 密碼
                    input.form-control(placeholder='Enter your password')
                  button.btn.btn-primary 註冊
</template>

<style lang="sass">
  #register-wrapper
    margin-top: 50px
    padding-top: 50px
</style>