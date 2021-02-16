<template>
  <common-card title="累计销售额" value="￥ 32,039,165">
    <template>
      <div class="compare_wrap">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">￥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from "@/components/mixins/commonCardMixin.js";
export default {
  name: "TotalSales",
  mixins: [commonCardMixin],
};
</script>

<style lang="scss" scoped>
.compare_wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
  }
}
</style>
