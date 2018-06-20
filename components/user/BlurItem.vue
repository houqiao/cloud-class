<template>
  <div class="blur-item">
    <!-- <img class="bg" :src="currAvatar" alt="" v-if="currAvatar !== '../static/images/avatar-empty.jpg!200w'"> -->
    <div class="box">
      <div>
        <img class="avatar" :src="currAvatar" alt="" v-if="currAvatar !== '../static/images/avatar-empty.jpg!200w'">
        <div class="user-info">
          <p class="x-big mb font-primary">喵咪2荡</p>
          <p class="font-green mb">ASd</p>
          <p class="big font-sub"><span class="font-green">3</span> 粉丝 | <span class="font-green">3</span> 关注</p>
        </div>
      </div>
      <div class="other">
          签名
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userInfo: Object
    },
    data() {
      return {
        currAvatar: this.userInfo.photo + '!200w'
      }
    },
    mounted() {
      if (!this.userInfo.photo || this.currAvatar.indexOf('https://ws1.sinaimg.cn/large/0065DKKdgy1fhy90ffpivj303c03cwe9.jpg') >= 0) {
        this.currAvatar = 'https://ws1.sinaimg.cn/large/0065DKKdgy1fhy90ffpivj303c03cwe9.jpg'
      }
    },
    watch: {
      avatar(value) {
        if (value) {
          this.currAvatar = value + '!200w'
        } else {
          this.currAvatar = 'https://ws1.sinaimg.cn/large/0065DKKdgy1fhy90ffpivj303c03cwe9.jpg'
        }
      }
    }
  }
</script>

