<template>
  <el-button :size="size" :icon="icon" :disabled="disabled" type="info" @click="onClick" :circle="circle" :plain="plain">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'InfoBtn',
    props: {
      size: {
        type: String,
        default: 'small'
      },
      icon: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>