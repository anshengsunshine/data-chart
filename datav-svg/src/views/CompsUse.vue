<template>
  <vue-echarts :options="options" />
</template>

<script>
export default {
  name: "CompsUse",
  setup(){
      return {
          options:{
              xAxis:{
                  data:["a","b","c","d"]
              },
              yAxis:{},
              series:[
                  {
                      name:"zzz",
                      type:"bar",
                      data:[10,50,40,30]
                  }
              ]
          }
      }
  }
};
</script>

<style></style>
