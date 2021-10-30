<template>
  <div class="home">
    <div class="datav_wrapper"></div>
    <top-header />
    <sales-bar />
    <sales-line />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  .datav_wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
