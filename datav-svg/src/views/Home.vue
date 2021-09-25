<template>
  <div class="home" :style="{ width: '200px', height: '200px' }">
    <!-- <test /> -->
    <vue-echarts :options="options" />
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    return {
      options: {
        title: {
          text: "Awesome Chart",
        },
        xAxis: {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.home {
  color: green;
}
</style>
