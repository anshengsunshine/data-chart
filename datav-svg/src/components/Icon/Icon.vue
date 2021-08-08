<template>
  <svg class="icon" :style="{ ...style }">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: String,
    prefix: String,
    style: Object,
  },
  setup(props) {
    const iconName = `#${props.prefix}${props.name}`;
    return {
      iconName,
    };
  },
};
</script>
<style type="text/css">
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
