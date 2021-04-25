<template>
  <div id="container"></div>
</template>

<script>
import "echarts-liquidfill";
export default {
  name: "LiquidFill",
  mounted() {
    this.$nextTick(() => {
      const data = [0.68];
      const chart = this.$echarts.init(document.getElementById("container"));
      chart.setOption({
        series: [
          {
            type: "liquidFill",
            data,
          },
        ],
      });
    });
  },
};
</script>

<style></style>
