<!--<template>
    <span>人员轨迹</span>
</template>>-->
<template>
  <div id="PersonPage">
    <a-affix>
      <div id="header">
        <a-menu v-model="current" mode="horizontal" theme="dark" id="menu">
          <a-menu-item key="search">
            <a-icon type="search" />
            菜单1
          </a-menu-item>
          <a-menu-item key="second">
            <a-icon type="mail" />
            菜单2
          </a-menu-item>
        </a-menu>
        <div id="login">
          <a-dropdown v-if="user">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a @click="goUser">个人空间</a>
              </a-menu-item>
              <a-menu-item>
                <a-popconfirm
                  title="确认退出当前账号"
                  @confirm="onExit"
                  okText="确认"
                  cancelText="取消"
                >
                  <a href="javascript:;">退出当前账号</a>
                </a-popconfirm>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-button v-else type="link" ghost @click="goLogin" style="color:white">点此登录</a-button>
        </div>
      </div>
    </a-affix>
    <router-view />
  </div>
</template>

<script>
//import store from './vuex/store'
export default {
  name: 'PersonPage',
  data () {
    return {
      current: [''],
      user: false
    }
  },
  updated() {
    this.user = !!sessionStorage.getItem('token')
  },
  methods: {
    goLogin() {
      //this.$router.push('/login')
    },
    goUser() {
      //this.$router.push('/user/index')
    },
    onExit: function() {
      /*store.commit('del_token', sessionStorage.getItem('token'))
      if(this.$route.path === '/') {
        window.location.reload()
      } else {
        this.$router.push('/')
      }*/
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>