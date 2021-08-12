<template>
  <div class="test_one" :style="{ width: '20px', height: '20px' }">
    <test1-comp />
    <svg width="50" height="50" style="color: #f00">
      <use href="#more"></use>
    </svg>
    <svg width="50" height="50" style="color: blue">
      <use href="#filledArrowRight"></use>
    </svg>
    <svg width="50" height="50" style="color: blue">
      <use href="#arrowRight"></use>
    </svg>
  </div>
</template>

<script>
import Test1Comp from "@/components/Test1/Test1Comp.vue";
export default {
  name: "Test_one",
  components: {
    Test1Comp,
  },
};
</script>
<style>
.test_one {
  color: green;
}
</style>
