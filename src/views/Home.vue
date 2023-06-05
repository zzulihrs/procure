<template>
  <el-row>
    <el-col :span="8"><div class="grid-content bg-purple">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/logo.png" alt="150px">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p>超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录的时间: <span>2021-7-19</span></p>
          <p>上次登录的地点: <span>武汉</span></p>
        </div>
      </el-card>

      <el-card style="margin-top: 20px; height: 460px">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="name"
              label="课程">
          </el-table-column>
          <el-table-column
              prop="todayBuy"
              label="今日购买">
          </el-table-column>
          <el-table-column
              prop="monthBuy"
              label="本月购买">
          </el-table-column>
          <el-table-column
              prop="totalBuy"
              label="总购买">
          </el-table-column>
        </el-table>
      </el-card>
    </div></el-col>
    <el-col :span="16"><div class="grid-content bg-purple-light"></div></el-col>
  </el-row>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.user{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img{
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo{

    .name{
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access{
      color: #999999;
    }
  }
}



.login-info{
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
</style>