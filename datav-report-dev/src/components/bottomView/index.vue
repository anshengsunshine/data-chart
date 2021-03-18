<template>
  <div class="bootom_view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title_wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart_wrapper">
            <div class="chart_inner">
              <div class="chart">
                <div class="chart_title">搜索用户数</div>
                <div class="chart_data">93,634</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart_title">搜索量</div>
                <div class="chart_data">198,782</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table_wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
              </el-table>
              <el-pagination
                layout="prev,pager,next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title_wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio_wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart_wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BootomView",
  data() {
    return {
      searchUserOption: {
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            smooth: true,
            areaStyle: {
              color: "rgba(95,187,255,0.5)",
            },
            lineStyle: {
              color: "rgb(95,187,255)",
            },
            itemStyle: {
              opacity: 0,
            },
            data: [100, 150, 200, 410, 100, 254, 411],
          },
        ],
      },
      searchNumberOption: {},
      tableData: [
        {
          id: 1,
          rank: 1,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 1,
          rank: 1,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 2,
          rank: 2,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 3,
          rank: 3,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
        {
          id: 4,
          rank: 4,
          keyword: "北京",
          count: 100,
          users: 90,
          range: "90%",
        },
      ],
      radioSelect: "品类",
      categoryOptions: {},
    };
  },
  mounted() {
    // this.$nextTick(() => {
    this.renderPieChart();
    // });
  },
  methods: {
    onPageChange(page) {
      console.log(page);
    },
    renderPieChart() {
      const mockData = [
        {
          legendname: "粉面粥店",
          value: 67,
          percent: "15.40%",
          itemStyle: {
            color: "#e7e702",
          },
          name: "粉面粥店",
        },
        {
          legendname: "简餐便当",
          value: 97,
          percent: "22.30%",
          itemStyle: {
            color: "#8d7fec",
          },
          name: "简餐便当",
        },
        {
          legendname: "汉堡披萨",
          value: 92,
          percent: "21.15%",
          itemStyle: {
            color: "#5085f2",
          },
          name: "汉堡披萨",
        },
      ];
      this.categoryOptions = {
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
            left: 20,
            top: 20,
          },
          {
            text: "累计订单量",
            subtext: "320",
            x: "34.5%",
            y: "42.5%",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
            textAlign: "center",
          },
        ],
        legend: {
          type: "scroll",
          orient: "vertical",
          height: 250,
          left: "70%",
          top: "middle",
          textStyle: {
            color: "#8c8c8c",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function (params) {
            const str = params.seriesName + "<br />" + params.marker;
            return str;
          },
        },
        series: [
          {
            type: "pie",
            center: ["35%", "50%"],
            radius: ["45%", "60%"],
            data: mockData,
            label: {
              normal: {
                show: true,
                // position: "outter",
                formatter: function (params) {
                  return `${params.data.legendname}`;
                },
              },
            },
            labelLine: {
              normal: {
                length: 5,
                length2: 3,
                smooth: true,
              },
            },
            clockwise: false,
            itemStyle: {
              borderWidth: 4,
              borderColor: "#fff",
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bootom_view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title_wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio_wrapper {
        flex: 1;
      }
    }
    .chart_wrapper {
      display: flex;
      flex-direction: column;
      height: 462px;
      .chart_inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart_title {
            color: #999;
            font-size: 14px;
          }
          .chart_data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px !important;
          }
        }
      }
      .table_wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
