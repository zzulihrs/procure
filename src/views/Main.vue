<template>
  <div>
    <div>

      <el-container>
        <el-aside width="auto">
          <CommonAside></CommonAside>
        </el-aside>
        <el-container>

          <el-header>
            <common-header></common-header>
          </el-header>
          <common-tag></common-tag>
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
import CommonTag from "@/components/CommonTag";

export default {
  name: "Main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },

}
</script>

<style lang="less" scoped>
.el-header{
  padding: 0;
}
</style>