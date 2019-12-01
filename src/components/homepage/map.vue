<template>
  <div class="wrapper">
    <div class="title titletip">
      <h3 class="cpname">南京远控信息科技有限公司</h3>
      <h2>设备监控平台</h2>
      <span @click="back">返回上一级</span>
    </div>
    <div class="content">
      <!-- 首页左侧 -->
      <div class="leftcontent"></div>
      <div class="map">
        <!-- 中国地图 -->
        <div id="myChartChina" :style="{width: '100%', height: '500px'}"
        ></div>
        <div class="infolist">
          <ul>
          <li class="title">
            <div>序号</div>
            <div>报警时间</div>
            <div>机床型号</div>
            <div>机床序列号</div>
            <div>客户名称</div>
            <div>报警编号</div>
          </li>
          <li v-for="(item,index) in infolist" :key="index">
            <div>{{item.index}}</div>
            <div>{{item.warningtime}}</div>
            <div>{{item.jcxh}}</div>
            <div>{{item.xlh}}</div>
            <div>{{item.name}}</div>
            <div>{{item.warncode}}</div>
          </li>
        </ul>
        </div>
      </div>
      <!-- 首页右侧 -->
      <div class="echartinfo">
        
      </div>
    </div>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
// import Heatmap from "heatmap.js";
export default {
  data() {
    return {
      infolist: [
        { index:1,name: "客户1", jcxh: "VCER5512", warningtime: "2019.09.20", xlh: "12638055",warncode:"7rg6566"},
        { index:2,name: "客户2", jcxh: "VC325", warningtime: "2019.09.20", xlh: "12638055",warncode:"7rg6566" },
        { index:3,name: "客户3", jcxh: "VJWE32Y", warningtime: "2019.09.20", xlh: "51684155",warncode:"7rg6566" },
        { index:4,name: "客户4", jcxh: "NDFW4Y", warningtime: "2019.09.20", xlh: "12638055" ,warncode:"7rg6566"},
        { index:5,name: "客户5", jcxh: "JRS5555", warningtime: "2019.09.20", xlh: "12638055",warncode:"7rg6566" }
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChartContainer = document.getElementById("myChartChina");
      var resizeMyChartContainer = function() {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartChina = this.$echarts.init(myChartContainer);

      function randomData() {
        return Math.round(Math.random() * 500);
      }
      // 绘制图表
      var optionMap = {
        tooltip: {},
        legend: {
          orient: "vertical",
          left: "left",
          data: [""]
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "10%",
          top: "bottom",
          text: ["高", "低"],
          calculable: true,
          color: ["#0b50b9", "#c3e2f4"]
        },
        selectedMode: "single",
        series: [
          {
            name: "",
            type: "map",
            mapType: "china",
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)"
              },
              emphasis: {
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            showLegendSymbol: true,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { name: "北京", value: randomData() },
              { name: "天津", value: randomData() },
              { name: "上海", value: randomData() },
              { name: "重庆", value: randomData() },
              { name: "河北", value: randomData() },
              { name: "河南", value: randomData() },
              { name: "云南", value: randomData() },
              { name: "辽宁", value: randomData() },
              { name: "黑龙江", value: randomData() },
              { name: "湖南", value: randomData() },
              { name: "安徽", value: randomData() },
              { name: "山东", value: randomData() },
              { name: "新疆", value: randomData() },
              { name: "江苏", value: randomData() },
              { name: "浙江", value: randomData() },
              { name: "江西", value: randomData() },
              { name: "湖北", value: randomData() },
              { name: "广西", value: randomData() },
              { name: "甘肃", value: randomData() },
              { name: "山西", value: randomData() },
              { name: "内蒙古", value: randomData() },
              { name: "陕西", value: randomData() },
              { name: "吉林", value: randomData() },
              { name: "福建", value: randomData() },
              { name: "贵州", value: randomData() },
              { name: "广东", value: randomData() },
              { name: "青海", value: randomData() },
              { name: "西藏", value: randomData() },
              { name: "四川", value: randomData() },
              { name: "宁夏", value: randomData() },
              { name: "海南", value: randomData() },
              { name: "台湾", value: randomData() },
              { name: "香港", value: randomData() },
              { name: "澳门", value: randomData() }
            ]
          }
        ]
      };

      myChartChina.setOption(optionMap);
      window.onresize = function() {
        resizeMyChartContainer();
        myChartChina.resize();
      };
    },
    back(){
      this.$router.push("index")
    }
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: -webkit-linear-gradient(45deg, #263e7d, #278bc7, #263e7d);
  background: linear-gradient(45deg, #263e7d, #278bc7, #263e7d);
  color: white;
}
.titletip {
  height: 5%;
  min-height: 80px;
  width: 98%;
  border-bottom: 2px solid #28b2f0;
  margin: 0 auto;
  position: relative;
}
.titletip>.cpname{
  position: absolute;
  left: 4px;
  bottom: 0.5rem;
  font-weight: 300;
}
.titletip>span{
  position: absolute;
  right: 4px;
  bottom: 0.5rem;
  cursor: pointer;
}
.content {
  width: 100%;
  height: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.content > div {
  height: 98%;
}
.mapDiv {
  width: 50%;
  height: 50%;
  padding: 10px;
  box-sizing: border-box;
}
.mapCon .title {
  position: absolute;
  z-index: 1;
  height: 34px;
  line-height: 34px;
  font-size: 18px;
  font-weight: 700;
  padding-left: 14px;
  border-left: 6px solid #abd3d5;
  box-sizing: border-box;
}
.mapCon,
.mapChart {
  height: 100%;
  width: 100%;
}
.wrapper > div {
  padding-top: 2em;
}
.map {
  width: 42%;
  height: 90%;
  border-right: 2px solid #28b2f0;
}
.leftcontent {
  width: 29%;
  height: 90%;
  padding-top: 2em;
  border-right: 2px solid #28b2f0;
}
.echartinfo {
  width: 29%;
  height: 90%;
  padding-top: 2em;
}
.infolist{
  margin-top: 4rem;
  width: 100%;
  height: auto;
}
.infolist > ul {
  width: 86%;
  height: auto;
  margin: 0 auto;
}
.infolist > ul > li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  border-bottom: 1px solid #1c92b6;
}
.infolist > ul > li > div {
  width: 25%;
  text-align: center;
}
.echartinfo > ul > li > .font {
  padding-left: 1em;
}
.infolist .title{
  background-color: #3364c6;
  border: 0;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.title > div {
  padding-left: 12px !important;
}
.europe,
.usa {
  width: 64px;
  margin: 0 1em;
}
.europe > div,
.usa > div {
  width: 48px;
  height: 12px;
  background-color: #a0a0a0;
  text-align: left;
}
.word {
  margin-left: 3em;
}
.word > li {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.word > li > span {
  font-size: 16px;
}
.usa > div {
  width: 32px;
}
/* 修改进度条样式 */
.progress {
  transform: translateX(-4em);
}
.warning {
  margin-right: 2em;
}
</style>
