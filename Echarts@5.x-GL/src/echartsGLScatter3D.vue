<template>
  <v-chart id="main" class="chart" :option="options" />
</template>

<script>
import { use } from "echarts";
import { Scatter3DChart } from "echarts-gl/charts";
import { Grid3DComponent } from "echarts-gl/components";
use([Scatter3DChart, Grid3DComponent]);
import { ref } from "vue-demi";
import VChart from "vue-echarts";

export default {
  name: "echartsGLScatter3D",
  components: {
    VChart,
  },
  setup() {
    let options = ref({
      grid3D: {},
      xAxis3D: {
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      yAxis3D: {
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      zAxis3D: {
        axisLine: {
          lineStyle: {
            color: "#fff",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          type: "scatter3D",
          symbolSize: 50,
          data: [
            [-1, -1, -1],
            [0, 0, 0],
            [1, 1, 1],
          ],
          itemStyle: {
            opacity: 1,
            color: "#f00",
          },
        },
      ],
    });

    return { options };
  },
};
</script>

<style scoped>
#main {
  width: 1200px;
  height: 1200px;
  background: #333;
}
</style>
