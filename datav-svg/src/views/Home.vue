<template>
  <div class="home">
    <test />
    <icon prefix="" name="code" :style="{width:'50px',height:'50px',color:'#f00'}"></icon>
    <icon prefix="icon-" name="all" :style="{width:'100px',height:'100px',color:'#f00'}"></icon>
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
