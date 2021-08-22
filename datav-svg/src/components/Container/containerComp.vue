<template>
  <div id="container_wrap" :ref="refName">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from "@vue/runtime-core";
export default {
  name: "containerComp",
  props: {
    options: Object,
  },
  setup(props) {
    const refName = "ContainerWrap";
    const width = ref(0); // 可视 - 宽
    const height = ref(0); // 可视 - 高
    const originalWidth = ref(0); //视口区域 - 宽
    const originalHeight = ref(0); //视口区域 - 高

    const init = () => {
      const dom = getCurrentInstance().refs[refName];
      if (props.options && props.options.width && props.options.height) {
        width.value = props.options.width;
        height.value = props.options.height;
      } else {
        width.value = dom.clientWidth;
        height.value = dom.clientWidth;
      }
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width;
        originalHeight.value = window.screen.height;
      }
      console.log(width.value, height.value, originalWidth.value, originalHeight.value);
    };

    onMounted(() => {
      init();
    });

    return {
      refName,
      width,
      height,
      originalWidth,
      originalHeight,
      init,
    };
  },
};
</script>
<style type="text/css"></style>
