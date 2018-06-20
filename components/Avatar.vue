<template>
  <span class="avatar" :class="'avatar' + '-' + size">
    <img :src="src" alt="" v-if="src">
    <i class="iconfont icon-admin" v-else></i>
  </span>
</template>
<script>
  export default {
    name: 'Avatar',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      src: {
        type: String,
        default: ''
      }
    }
  }
</script>

