<template>
  <div class="base-footer">
    <div class="footer-link">
      <div class="box">
        <div class="link-left">
          <div class="item" v-for="link in links" :key="link.id">
            <h3>{{link.name}}</h3>
            <ul v-for="child in link.children" :key="child.id">
              <li class="font-disabled cursor">{{child.name}}</li>
            </ul>
          </div>
        </div>
        <div class="link-right">
          <div class="xx-big font-white">logo</div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <p class="font-sub mb">Powered by zcckj v8.2.24 &copy;2014-2018</p>
      <p class="font-sub">浙ICP备13006852号-1</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        links: [{
          id: 1,
          name: '我是学生',
          children: [{
            id: 1,
            name: '如何注册',
            link: ''
          }, {
            id: 2,
            name: '如何学习',
            link: ''
          }, {
            id: 3,
            name: '如何互动',
            link: ''
          }]
        }, {
          id: 2,
          name: '我是老师',
          children: [{
            id: 1,
            name: '发布课程',
            link: ''
          }, {
            id: 2,
            name: '使用题库',
            link: ''
          }, {
            id: 3,
            name: '教学资料库',
            link: ''
          }]
        }, {
          id: 3,
          name: '我是管理员',
          children: [{
            id: 1,
            name: '系统设置',
            link: ''
          }, {
            id: 2,
            name: '如何学习',
            link: ''
          }, {
            id: 3,
            name: '用户管理',
            link: ''
          }]
        }, {
          id: 4,
          name: '商业应用',
          children: [{
            id: 1,
            name: '会员专区',
            link: ''
          }, {
            id: 2,
            name: '用户导入导出',
            link: ''
          }, {
            id: 3,
            name: '题库增强版',
            link: ''
          }]
        }, {
          id: 5,
          name: '关于我们',
          children: [{
            id: 1,
            name: '官网',
            link: ''
          }, {
            id: 2,
            name: '官方微博',
            link: ''
          }, {
            id: 3,
            name: '加入我们',
            link: ''
          }]
        }]
      }
    }
  }
</script>

