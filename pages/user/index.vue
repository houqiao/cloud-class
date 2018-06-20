<template>
  <section class="bg-white">
    <BlurItem :userInfo="userInfo"></BlurItem>
    <div class="container user-center">
      <el-tabs v-model="tab" @tab-click="onClickTab">
        <el-tab-pane label="个人介绍" name="tab1">用户管理</el-tab-pane>
        <el-tab-pane label="在线课程" name="tab2">
          <div class="card-list">
            <div class="card" v-for="card in courseList" :key="card.id">
              <div class="status" :class="{'green': card.status === 0}">{{card.status | courseStatus}}</div>
              <div class="img">
                <img :src="card.img" alt="">
              </div>
              <p class="title">{{card.title}}</p>
              <div class="infos">
                <div>
                  <span><i class="iconfont icon-man font-sub" title="学员数"></i> {{card.count}}</span>
                  <span><i class="iconfont icon-msg font-sub" title="评论"></i> {{card.msg}}</span>
                </div>
                <div class="price font-green" :class="{'font-red': card.price}">
                  {{card.price | filterPrice}}
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="在学课程" name="tab3">角色管理</el-tab-pane>
        <el-tab-pane label="在学班级" name="tab4">定时任务补偿</el-tab-pane>
        <el-tab-pane label="收藏课程" name="tab5">定时任务补偿</el-tab-pane>
        <el-tab-pane label="加入小组" name="tab6">定时任务补偿</el-tab-pane>
        <el-tab-pane label="关注 / 粉丝" name="tab7">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </section>
</template>
<script>
import BlurItem from '~/components/user/BlurItem'
import SuccessBtn from '~/components/btn/SuccessBtn'

export default {
  components: {
    BlurItem,
    SuccessBtn
  },
  data() {
    return {
      userInfo: {
        photo: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
        loginName: '喵咪2荡',
        phone: '18578451525'
      },
      tab: 'tab2',
      courseList: [{
        id: 1,
        img: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
        title: '多计划课程',
        count: 5,
        msg: 6,
        status: 1,
        price: 0
      }, {
        id: 2,
        img: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
        title: '多计划课程',
        count: 5,
        msg: 6,
        status: 0,
        price: 10
      }, {
        id: 3,
        img: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
        title: '多计划课程',
        count: 5,
        msg: 6,
        status: 1,
        price: 0
      }, {
        id: 4,
        img: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
        title: '多计划课程',
        count: 5,
        msg: 6,
        status: 0,
        price: 10
      }]
    }
  },
  filters: {
      courseStatus(value) {
        let statusList = {
          0: '更新中',
          1: '完结'
        }
        return statusList[value]
      },
      filterPrice(value) {
        return value || '免费'
      }
    },
    methods: {
      onClickTab(tab, e) {
        console.log(tab.name)
      },
      increment() {
        this.$store.commit('increment')
      }
    }
}
</script>

