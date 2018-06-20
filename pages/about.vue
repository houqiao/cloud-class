<template>
  <section class="container">
    Hi,from {{name}}
    <nuxt-link to="/">回到首页</nuxt-link>
  </section>
</template>
<script>
export default {
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head() {
    return this.$setSeo('About', 'something')
  }
}
</script>

