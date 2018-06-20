<template>
  <el-button :size="size" type="warning" @click="onClick">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'WarningBtn',
    props: {
      size: {
        type: String,
        default: 'small'
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>