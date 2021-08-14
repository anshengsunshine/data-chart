<template>
  <div class="flexBox_wrap">
    <svg width="400" height="400">
      <path
        d="M5 5 L395 5 L395 395 L5 395 Z"
        stroke-width="1"
        stroke="#235fa7"
        fill="none"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "FlyBoxComp",
};
</script>

<style lang="less" scoped>
.flexBox_wrap {
  svg {
    // border: 1px solid #333;
  }
}
</style>
