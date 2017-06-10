<template lang="pug">
  .container
    .wrapper#register-wrapper
      section.register
        .row
          .col-md-6.col-md-push-3
            .panel.panel-primary
              .panel-heading
                .panel-title#register-title
                  i.fa.fa-cog 註冊
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
                  button.btn.btn-primary.pull-right 註冊
</template>

<style lang="sass">
  #register-wrapper
    margin-top: 50px
    padding-top: 50px
  
  #register-title
    font-weight: 700
    letter-spacing: 2px
</style>
