<template>
  <div class="sales_pie">
    <div class="sales_pie_inner">
      <div class="pie_item">
        <div class="pie_item_inner">
          <v-chart autoresize :option="options1" />
        </div>
      </div>
      <div class="pie_item">
        <div class="pie_item_inner">
          <v-chart autoresize :option="options2" />
        </div>
      </div>
      <div class="pie_item">
        <div class="pie_item_inner">
          <v-chart autoresize :option="options3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  name: "SalesPie",
  setup() {
    const options1 = ref(null);
    const options2 = ref(null);
    const options3 = ref(null);
    const createOptions = (title, value, values) => {
      return {
        title: [
          {
            text: title,
            textStyle: {
              color: "rgba(255,255,255,.3)",
              fontSize: 12,
            },
            top: 3,
          },
          {
            text: value,
            textStyle: {
              color: "rgba(255,255,255)",
              fontSize: 16,
              fontWeight: 500,
            },
            top: "43%",
            left: "32%",
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: title,
            type: "pie",
            radius: ["65%", "80%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: values[0],
                name: "数据",
                itemStyle: {
                  color: "rgb(0, 140, 217)",
                },
              },
              {
                value: values[1],
                name: "数据",
                itemStyle: {
                  color: "rgb(35, 69, 145)",
                },
              },
            ],
          },
        ],
      };
    };
    onMounted(() => {
      options1.value = createOptions("转化率", "13%", [1000, 130]);
      options2.value = createOptions("退单率", "5%", [1000, 50]);
      options3.value = createOptions("跳失率", "43%", [1000, 430]);
    });
    return {
      options1,
      options2,
      options3,
      createOptions,
    };
  },
};
</script>

<style lang="less" scoped>
.sales_pie {
  position: absolute;
  top: 1450px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 400px;
  padding: 25px 12.5px 0;
  box-sizing: border-box;

  .sales_pie_inner {
    display: flex;
    width: 100%;
    height: 100%;

    .pie_item {
      flex: 0 0 33.33%;
      width: 33.33%;
      height: 100%;
      padding: 0 12.5px;
      box-sizing: border-box;

      .pie_item_inner {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
}
</style>
