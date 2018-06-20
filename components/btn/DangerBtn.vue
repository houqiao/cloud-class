<template>
  <el-button :size="size" :icon="icon" :disabled="disabled" type="danger" @click="onClick">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'DangerBtn',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: ''
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>