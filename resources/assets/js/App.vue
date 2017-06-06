<template lang="pug">
  div
    navbar
    router-view
    foobar
</template>

<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'

  export default {
    components: {
      'navbar': Navbar,
      'foobar': Footer
    }
  }

</script>

<style src="../sass/main.scss" lang="sass"></style>

<style lang="sass">
  div
    margin: 0
    padding: 0
</style>
