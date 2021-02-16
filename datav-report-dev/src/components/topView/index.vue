<template>
  <div class="top_view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-user />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "./child/totalSales";
import TotalOrders from "./child/totalOrders";
import TodayUser from "./child/todayUser";
import TotalUsers from "./child/totalUsers";
export default {
  name: "TopView",
  components: {
    TotalSales,
    TotalOrders,
    TodayUser,
    TotalUsers,
  },
};
</script>

<style scoped></style>
