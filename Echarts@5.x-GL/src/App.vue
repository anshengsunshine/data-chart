<template>
  <!-- 3D 点图 -->
  <gL-scatter-3D />
  <!-- 3D 地图 -->
  <!-- <gL-earth-3D /> -->
</template>

<script>
// import GLEarth3D from "./echartsGLEarth3D";
import GLScatter3D from "./echartsGLScatter3D";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    // GLEarth3D,
    GLScatter3D
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>

<style>
body {
  margin: 0;
}
</style>
