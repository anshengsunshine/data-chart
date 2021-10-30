<template>
  <div class="home" v-if="!loading">
    <div class="datav_wrapper"></div>
    <top-header />
    <sales-bar />
    <sales-line />
    <sales-pie />
    <sales-map />
    <sales-sun />
    <sales-radar />
  </div>
  <div class="home" v-else>
    <div class="loading_wrapper">{{ loadingTxt }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Home",
  setup() {
    const loading = ref(true);
    const loadingTxt = ref("加载中.");
    const task = ref(null);
    onMounted(() => {
      task.value && clearInterval(task.value);
      task.value = setInterval(() => {
        if (loadingTxt.value === "加载中......") {
          loadingTxt.value = "加载中.";
        } else {
          loadingTxt.value += ".";
        }
      }, 200);
      setTimeout(() => {
        loading.value = false;
        task && clearInterval(task);
      }, 5000);
    });
    return {
      loading,
      loadingTxt,
      task,
    };
  },
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
  .loading_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: #fff;
  }
}
</style>
