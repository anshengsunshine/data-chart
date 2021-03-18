<template>
  <div class="common_card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonCard",
  props: {
    title: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.common_card {
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    margin-top: 5px;
    font-size: 25px;
    color: #000;
    letter-spacing: 1px;
  }
  .chart {
    width: 100%;
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    font-size: 12px;
    color: #666;
  }
}
</style>
