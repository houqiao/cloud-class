<template>
  <el-button size="small" type="primary" @click="onClick">查询</el-button>
</template>
<script>
  export default {
    name: 'SearchBtn',
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>