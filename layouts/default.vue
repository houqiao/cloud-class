<template>
  <div class="base">
    <BaseHeader></BaseHeader>
    <nuxt/>
    <BaseFooter></BaseFooter>
  </div>
</template>
<script>
  import BaseHeader from './BaseHeader'
  import BaseFooter from './BaseFooter'
  export default {
    components: {
        BaseHeader,
        BaseFooter
      },
    data() {
      return {
        keyword: '',
        user: {
          avatar: '',
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

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
