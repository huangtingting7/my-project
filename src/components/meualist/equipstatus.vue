<template>
  <div class="wrapper">
    <!-- 左侧区域树状菜单选择 -->
    <div class="treelist">
      
    </div>
    <!-- 右侧table及各个功能 -->
    <div class="tableinfo">
        <!-- 工厂表单 -->
      <factory v-show="false"></factory>
      <!-- 客户表单 -->
      <statustable v-show="true"></statustable>
    </div>
  </div>
</template>
<script>
import statustable from "./statustable";
import factory from "./factory";
export default {
  components: { statustable,factory },
  data() {
    return {
      dateChoose: "", //table选择开始结束时间
      currentPage: 1, //分页当前页数,
    };
  },
  methods: {
    
  }
};
</script>
<style scoped>
.wrapper {
  width: 98%;
  height: 95%;
  margin: 1% auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: auto;
}
.wrapper > div {
  height: 100%;
  background-color: white;
  border-radius: 3px;
}
.treelist {
  width: 16%;
  padding-top: 2em;
}
.tableinfo {
  width: 83%;
  padding: 2em 1em;
}
.font {
  font-size: 16px;
  font-weight: bold;
  margin-right: 1em;
}
</style>

