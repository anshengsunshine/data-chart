<template>
  <div class="top_header">
    <div class="title">慕课外卖数据大屏</div>
    <div class="sub_title">移动报表</div>
    <div class="update_time">最后更新时间：1分钟前</div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style lang="less" scoped>
.top_header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 50px 24px 24px;
  box-sizing: boxder-box;
  width: 100%;
  height: 300px;
  color: #fff;
  text-align: left;
  .title {
    font-size: 48px;
    font-weight: 500;
  }
  .sub_title {
    font-size: 36px;
    margin-top: 20px;
  }
  .update_time {
    font-size: 24px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 40px;
  }
}
</style>
