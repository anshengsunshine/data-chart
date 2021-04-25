<template>
  <ve-liquidfill :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
export default {
  name: "LiquidFill",
  data() {
    return {
      chartData: {
        columns: ["title", "percent"],
        rows: [
          {
            title: "rate",
            percent: 0.68,
          },
        ],
      },
      chartSettings: {
        seriesMap: {
          rate: {
            redius: "80%",
          },
        },
      },
    };
  },
};
</script>

<style></style>
