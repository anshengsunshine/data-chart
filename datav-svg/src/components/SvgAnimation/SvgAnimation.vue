<template>
  <div class="container">
    <svg width="200" height="200" viewBox="0 0 200 200">
      <rect
        x="0"
        y="0"
        width="100"
        height="50"
        fill="red"
        transform="translate(10,10) rotate(30) skewX(30) skewY(30) scale(0.5)"
      ></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgAnimation",
};
</script>
<style lang="less" scoped>
.container {
  svg {
    width: 200px;
    height: 200px;
    border: 1px solid #333;
  }
}
</style>
