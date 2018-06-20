<template>
  <el-button :size="size" type="success" @click="onClick">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'SuccessBtn',
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