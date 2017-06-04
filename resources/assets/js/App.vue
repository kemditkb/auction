<template lang="pug">
  div
    navbar
    router-view
</template>

<script>
  import Navbar from './components/Navbar'

  export default {
    components: {
      'navbar': Navbar
    }
  }

</script>

<style src="../sass/main.scss" lang="sass"></style>

<style lang="sass">
  div
    margin: 0
    padding: 0
</style>