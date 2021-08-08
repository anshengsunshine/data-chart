<template>
  <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid #000000">
    <rect x="20" y="10" width="10" height="5" style="stroke: #000000; fill: none" />
  </svg>
  <svg width="0" height="0">
    <defs>
      <symbol id="cross" width="100" height="100" class="svg_item" viewBox="0 0 100 100">
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="90"
          stroke-width="8"
          stroke="currentColor"
        ></line>
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke-width="8"
          stroke="currentColor"
        ></line>
      </symbol>
      <symbol id="code" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M541.141333 268.864l61.717334 16.938667-132.394667 482.474666-61.717333-16.938666 132.394666-482.474667zM329.002667 298.666667l44.885333 45.610666-175.36 172.586667 175.04 167.573333-44.266667 46.229334L106.666667 517.504 329.002667 298.666667z m355.882666 0l222.336 218.837333L684.586667 730.666667l-44.266667-46.229334 175.018667-167.573333L640 344.277333 684.885333 298.666667z"
          p-id="7407"
        ></path>
      </symbol>
    </defs>
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
