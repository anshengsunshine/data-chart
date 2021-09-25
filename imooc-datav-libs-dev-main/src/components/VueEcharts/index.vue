<template>
  <div class="echarts"></div>
</template>
<script>
import { watch, onMounted } from "vue";
import * as Echarts from "echarts";
export default {
  name: "VueEcharts",
  props: {
    options: Object,
    theme: [String, Object],
  },
  setup(props) {
    let dom, chart;

    watch(
      () => {
        props.options;
      },
      (val) => {
        initChart();
      },
      {
        deep: true,
      }
    );
    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName("echarts")[0];
        chart = Echarts.init(dom, props.theme);
      }
      chart.setOption(props.options);
    };

    onMounted(() => {
      initChart();
    });
    return {};
  },
};
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
