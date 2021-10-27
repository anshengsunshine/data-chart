<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="test_text">测试测试rem</div>
    <v-chart class="chart" autoresize :option="barOption" />
  </div>
</template>

<script>
import { ref } from "vue";
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { onMounted } from "@vue/runtime-core";
use([BarChart]);
export default {
  name: "Home",
  setup() {
    const barOption = ref({});
    onMounted(() => {
      barOption.value.value = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };
    });
    return {
      barOption,
    };
  },
};
</script>
<style lang="less" scoped>
.test_text {
  font-size: 32px;
}
.chart {
  width: 300px;
  height: 500px;
}
</style>
