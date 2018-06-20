<template>
  <div class="base-header">
    <div class="base-left">
      <div class="base-logo xx-big font-disabled tc">logo</div>
    </div>
    <div class="base-right">
      <ul class="nav">
        <li v-for="nav in navList" :key="nav.id" class="font-disabled">{{nav.name}}</li>
      </ul>
      <div class="nav-user">
        <span class="item">
          <el-input
            size="small"
            placeholder="感兴趣..."
            v-model="keyword">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </span>
        <span class="item drop-down">
          <el-dropdown size="small">
            <el-button type="success" size="small">
              管理后台<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>管理后台</el-dropdown-item>
              <el-dropdown-item>我的教学</el-dropdown-item>
              <el-dropdown-item>我的学习</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <span class="item">
          <el-popover
            placement="bottom-end"
            width="300"
            trigger="click">
            <div class="base-popover">
             <div class="base-popover-header">
               <div :class="{'active': tab.active}" @click="onTabClick(index)" v-for="(tab, index) in newsTab" :key="tab.id">
                <el-badge is-dot>{{tab.name}}</el-badge>
               </div>
             </div>
             <div class="base-popover-body" v-loading="newStatus === 'loading'">
               <ul v-if="tab === 'tab1' && newsList.length">
                 <li v-for="item in newsList" :key="item.id">
                   <a class="font-green cursor name">{{item.name}}</a> 已将资料分享给你，<a class="font-green cursor">点击查看</a>
                 </li>
               </ul>
               <ul v-if="tab === 'tab2' && letterList.length">
                 <li v-for="item in letterList" :key="item.id">
                   <a class="font-green cursor name">{{item.name}}</a> 已发私信给你，<a class="font-green cursor">点击查看</a>
                 </li>
               </ul>
             </div>
             <div class="base-popover-footer">
               查看全部{{newsName}}
             </div>
            </div>
            <el-badge v-model="user.news" :max="99" class="item cursor" slot="reference">
              <i class="el-icon-bell xx-big font-disabled"></i>
            </el-badge>
          </el-popover>
        </span>
        <span class="item">
          <nuxt-link to='/user'>
            <Avatar v-if="user.avatar" :src="user.avatar + '!90w'" size="small"></Avatar>
            <Avatar v-else size="small"></Avatar>
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import Avatar from '@/components/Avatar'

  export default {
    components: {
      Avatar
    },
    data() {
      return {
        keyword: '',
        user: {
          avatar: 'http://dianzhanggui-dev.oss-cn-hangzhou.aliyuncs.com/upload/image/201806/64a5a5c7b800000.png',
          news: 100
        },
        navList: [{
          id: 1,
          name: '师资力量',
          link: ''
        }, {
          id: 2,
          name: '常见问题',
          link: ''
        }, {
          id: 3,
          name: '关于我们',
          link: ''
        }, {
          id: 4,
          name: '帮助中心',
          link: ''
        }],
        tab: 'tab1',
        newStatus: 'loading',
        newsName: '通知',
        newsTab: [{
          id: 1,
          name: '通知',
          active: true,
          tab: 'tab1'
        }, {
          id: 2,
          name: '私信',
          active: false,
          tab: 'tab2'
        }],
        newsList: [{
          id: 1,
          name: 'mapengwei'
        }, {
          id: 2,
          name: 'wangyun'
        }],
        letterList: [{
          id: 1,
          name: '喵咪2荡'
        }, {
          id: 2,
          name: '小仙女'
        }]
      }
    },
    methods: {
      onTabClick(index) {
        this.newsTab.forEach(obj => obj.active = false)
        this.newsTab[index].active = true
        this.newsName = this.newsTab[index].name
        this.tab = this.newsTab[index].tab
      }
    }
  }
</script>

