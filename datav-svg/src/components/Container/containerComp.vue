<template>
  <div id="container_wrap" :ref="refName">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { debounce } from "@/utils/index";
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
    let context, dom;

    const initSize = () => {
      dom = context.refs[refName];
      // 获取大屏的真实尺寸
      if (props.options && props.options.width && props.options.height) {
        width.value = props.options.width;
        height.value = props.options.height;
      } else {
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      }
      // 获取画布尺寸
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width;
        originalHeight.value = window.screen.height;
      }
      console.log(width.value, height.value, originalWidth.value, originalHeight.value);
    };

    // 分辨率 计算
    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`;
        dom.style.height = `${height.value}px`;
      } else {
        dom.style.width = `${originalWidth}px`;
        dom.style.height = `${originalHeight}px`;
      }
    };

    // 压缩比 计算
    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      // 获取大屏最终的宽高
      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;
      console.log(currentWidth, currentHeight);
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      dom.style.transform = `scale(${widthScale},${heightScale})`;
    };

    // 视口改变时，更改压缩比
    const onResize = () => {
      console.log("onResize");
      initSize();
      updateScale();
    };

    onMounted(() => {
      context = getCurrentInstance();
      initSize();
      updateSize();
      updateScale();
      window.addEventListener("resize", debounce(100,onResize));
    });

    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });
    console.log(require("vue"));

    return {
      refName,
      width,
      height,
      originalWidth,
      originalHeight,
      initSize,
      updateSize,
      updateScale,
      onResize,
    };
  },
};
</script>
<style type="text/css">
#container_wrap {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>
