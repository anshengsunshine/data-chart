<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from "@/components/topView";
import SalesView from "@/components/salesView";
import BottomView from "@/components/bottomView";
import MapView from "@/components/mapView";
import { wordColud } from "@/api/index";
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  mounted() {
    wordColud().then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    }).catch(err=>{
      console.log(err)
    })
  },
};
</script>
<style scoped>
.home {
  padding: 20px;
  width: 100%;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
