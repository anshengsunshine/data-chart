<template>
  <!-- 十字 -->
  <svg viewBox="0 0 100 100">
    <line x1="0" y1="50" x2="100" y2="50" stroke-width="8" stroke="currentColor"></line>
    <line x1="50" y1="0" x2="50" y2="100" stroke-width="8" stroke="currentColor"></line>
  </svg>
  <!-- 框内 矩形  viewBox -->
  <!-- <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid #000000">
    <rect x="20" y="10" width="10" height="5" style="stroke: #000000; fill: none" />
  </svg>
  <svg width="500" height="200" style="border: 1px solid #000000">
    <rect
      x="200"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg> -->
  <!-- preserveAspectRatio  -->
  <!-- preserveAspectRatio="xMidYMid meet" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
  <!-- preserveAspectRatio="xMaxYMin meet" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="xMaxYMin meet"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
  <!-- preserveAspectRatio="xMinYMin meet" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="xMinYMin meet"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
  <!-- preserveAspectRatio="xMidYMax slice" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="xMidYMax slice"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
  <!-- preserveAspectRatio="xMaxYMin slice" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="xMaxYMin slice"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
  <!-- preserveAspectRatio="none" -->
  <svg
    width="500"
    height="200"
    viewBox="0 0 200 200"
    style="border: 1px solid #000000"
    preserveAspectRatio="none"
  >
    <rect
      x="100"
      y="100"
      width="100"
      height="50"
      stroke-width="10"
      style="stroke: #000000; fill: none"
    />
  </svg>
</template>

<script>
export default {
  name: "Test",
};
</script>

<style>
.svg_item {
  width: 100px;
  height: 100px;
  color: #f00;
}
</style>
