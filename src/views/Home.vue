<template>
  <el-row>
    <el-col :span="8" style="padding-right: 10px;"><div class="grid-content bg-purple">
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
    <el-col :span="16" style="padding-left: 10px;">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display: 'flex', padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
          <div class="detail">
            <p class="price">￥{{item.value}}</p>
            <p class="desc">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <!--折线图-->
      </el-card>
      <div class="graph">
        <el-card style="height: 260px"></el-card>
        <el-card style="height: 260px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getData} from '../api/index'
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
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
  mounted() {
    getData().then(({data})=>{
      const {tableData} = data.data;
      console.log(tableData);
      this.tableData = tableData;
    })
  }
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

.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon{
    width: 80px;
    height: 80px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 80px;
  }
  .detail{

    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}

.graph{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .el-card{
    width: 48%;
  }
}
</style>