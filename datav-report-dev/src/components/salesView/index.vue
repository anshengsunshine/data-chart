<template>
  <!-- <v-chart :options="data" /> -->
  <ve-line :data="data" />
</template>

<script>
export default {
  name: "SalesView",
  data() {
    return {
      // data: {
      //   xAxis: {
      //     type: "category",
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       type: "line",
      //       data: [100, 200, 400, 120, 300],
      //     },
      //   ],
      // },
      data: {
        colums: ["日期", "销售额"],
        rows: [
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月2日", 销售额: 1123 },
          { 日期: "1月3日", 销售额: 1223 },
          { 日期: "1月4日", 销售额: 1233 },
          { 日期: "1月5日", 销售额: 11123 },
          { 日期: "1月6日", 销售额: 12223 },
          { 日期: "1月7日", 销售额: 12333 },
        ],
      },
    };
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
