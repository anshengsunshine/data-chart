<template>
  <div class="home" :style="{ width: '20px', height: '20px' }">
    <test />
  </div>
</template>

<script>
import Test from "@/components/Test/Test.vue";
export default {
  name: "Home",
  components: {
    Test,
  },
};
</script>
<style scoped>
.home {
  color: green;
}
</style>
