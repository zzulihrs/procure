<template>
  <div>
    <div>

      <el-container>
        <el-aside width="200px">
          <CommonAside></CommonAside>
        </el-aside>
        <el-container>

          <el-header>
            <common-header></common-header>
          </el-header>
          <el-main>
            <!--  路由出口-->
            <!--  路由匹配到的组件将渲染在这里-->
            <router-view>
            </router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>

  </div>

</template>

<script>

import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";

export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
  },

}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>