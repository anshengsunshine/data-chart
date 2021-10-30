<template>
  <v-chart class="bar_chart" autoresize :option="option" />
</template>

<script>
import { onMounted, ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent, TitleComponent, TooltipComponent } from "echarts/components";
import { BarChart, LineChart, PieChart, SunburstChart, RadarChart } from "echarts/charts";
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  SunburstChart,
  RadarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
]);
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
