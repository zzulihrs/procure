<template>
  <div class="header-container">
    <div class="left-content">
      <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img class="user" src="../assets/logo.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
  name: "CommonHeader",
  data() {
    return {

    }
  },
  mounted() {
    console.log('tags: ', this.tags);
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    handleClick(command) {
      if(command == 'logout') {
        Cookie.remove('token');
        this.$router.push('/login');
      }
    },
  }
}
</script>

<style lang="less" scoped>
.header-container{
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text{
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .right-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>