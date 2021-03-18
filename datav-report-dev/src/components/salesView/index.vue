<template>
  <div class="sales_view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template v-slot:header>
        <div class="menu_wrapper">
          <el-menu
            mode="horizontal"
            class="sales_view_menu"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu_right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales_view_date_range"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales_view_chart_wrapper">
          <v-chart :options="chartOption" />
          <div class="sales_view_list">
            <div class="sales_view_title">排行榜</div>

            <div class="list_item" v-for="item in rankData" :key="item.no">
              <div :class="['list_item_no', +item.no <= 3 ? 'top_no' : '']">
                {{ item.no }}
              </div>
              <div class="list_item_name">{{ item.name }}</div>
              <div class="list_item_money">{{ item.money }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SalesView",
  data() {
    return {
      activeIndex: "1",
      radioSelect: "今日",
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      chartOption: {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 12,
            color: "#666",
          },
          left: 25,
          top: 20,
        },
        color: ["#3398DB"],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: "#999",
            },
          },
          axisLine: {
            lineStyle: {
              color: "#999",
            },
          },
          axisLabel: {
            color: "#333",
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
              color: "#eee",
            },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: "50%",
            data: [200, 256, 300, 320, 145, 854, 145, 625, 855, 957, 741, 415],
          },
        ],
      },
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 6,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 7,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 8,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 9,
          name: "麦当劳",
          money: "323,234",
        },
        {
          no: 10,
          name: "麦当劳",
          money: "323,234",
        },
      ],
    };
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.sales_view {
  margin-top: 20px;
  .menu_wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .menu_right {
      display: flex;
      .sales_view_date_range {
        margin: 0 20px;
      }
    }
  }
  .sales_view_chart_wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70% !important;
      height: 100% !important;
    }
    .sales_view_list {
      flex: 1;
      padding-top: 12px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales_view_title {
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list_item {
        display: flex;
        align-items: center;
        padding: 6px 20px 6px 0;
        height: 20px;
        font-size: 12px;
        .list_item_no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;
          &.top_no {
            background-color: #000;
            border-radius: 50%;
            color: #fff;
            font-weight: 500;
          }
        }
        .list_item_name {
          margin-left: 10px;
          color: #333;
        }
        .list_item_money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
