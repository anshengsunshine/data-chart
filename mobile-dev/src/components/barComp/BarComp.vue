<template>
  <v-chart class="bar_chart" autoresize :option="option" />
</template>

<script>
import { onMounted, ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
use([CanvasRenderer, BarChart, GridComponent]);
export default {
  name: "BarComp",
  setup() {
    const option = ref({
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
    });
    return {
      option,
    };
  },
};
</script>

<style lang="less" scoped>
.bar_chart {
  width: 100%;
  min-height: 500px;
}
</style>
