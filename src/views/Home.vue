<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import CommonAside from "@/components/CommonAside";

export default {
  name: "Home",
  components: {CommonAside},
}
</script>

<style scoped>

</style>