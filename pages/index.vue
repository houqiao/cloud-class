<template>
  <section class="home">
    <div class="block">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <div :style="'backgroundColor:' + item.bg" class="banner">
            <div class="box">
              <img :src="item.src" alt="">
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="title">
        <p class="font-primary mb">网校课程</p>
        <p>精选网校课程，满足你的学习兴趣。</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ajaxGet } from '~/plugins/util'

export default {
  components: {
  },
  head() {
    return {
      title: '首页'
    }
  },
  data() {
    return {
      bannerList: [{
        id: 1,
        bg: '#0984f7',
        src: require('../assets/images/banner_app.jpg')
      }, {
        id: 2,
        bg: '#3b4250',
        src: require('../assets/images/banner_eweek.jpg')
      }, {
        id: 3,
        bg: '#3dc768',
        src: require('../assets/images/banner_net.jpg')
      }]
    }
  }
}
</script>