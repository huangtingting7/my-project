<template>
    <div class="center-warp">
        <div>
            <div class="title unread">实时数据
                <span>当前刀位号：1</span>
                <span>当前程序名：NC0035</span>
                <div>
                    <template>
                        <table class="table-a" width="500" border="1" cellspacing="0" cellpadding="5">
                            <tr v-for="item in tableList" :key="item.x">
                                <td> {{ item.x }}</td>
                                <td>{{item.number}} </td>
                                <td> <button v-if="item.number" @click="handleSubmit(item)" class="bottonStyle">隐藏轴</button></td>
                            </tr>
                        </table>
                    </template>
                </div>
            </div>
            <div class="title unread">负载
                <div>
                    <template>
                        <table class="table-b" width="500" border="0" cellspacing="10" cellpadding="5">
                            <tr v-for="item in tableList" :key="item.x">
                                <td style="width:20px;"> {{ item.name }}</td>
                                <td><Progress :percent="item.percent" hide-info :stroke-width="20"></Progress></td>
                                <td style="width:45px;"> <button @click="handleSubmit(item)" class="bottonStyle">编辑</button></td>
                            </tr>
                        </table>
                    </template>
                </div>
            </div>
            <div class="title unread">
                当前给进
                <div style="width:600px;height:600px;">
                    <div style="text-align: right;">1805mm/min</div>
                    <!-- <div id="myChart5" style="width:600px;height:500px;"></div> -->
                    <ruleLine :number="1805"/>
                </div>
            </div>
        </div>
        <div>
            <div class="title unread" style="display: flex;">倍率
                <div style="width: 400px;height: 300px;">
                    <div id="myChart1" style="width: 300px;height: 300px;"></div>
                    <div class="myChart1Title">主轴</div>
                </div>
                <div style="width: 400px;height: 300px;">
                    <div id="myChart2" style="width: 300px;height: 300px;"></div>
                    <div class="myChart2Title">进给</div>
                </div>
            </div>
            <div class="title unread" style="display: flex;">主轴转速
                <div style="width: 400px;height: 400px;">
                    <div id="myChart3" style="width: 300px;height: 400px;"></div>
                </div>
                <div style="width: 400px;height: 400px;">
                    <div id="myChart4" style="width: 300px;height: 400px;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ruleLine from "./ruleLine";
export default {
    components: {
        ruleLine
    },
    data () {
      return {
          tableList: [
              {
                  x: 'X坐标',
                  number: "100000.0000",
                  name: "X",
                  percent: 50
              },
              {
                  x: 'Y坐标',
                  number: "100000.0000",
                  name: "Y",
                  percent: 30
              },
              {
                  x: 'Z坐标',
                  number: "100000.0000",
                  name: "Z",
                  percent: 90
              },
              {
                  x: 'A坐标',
                  number: "100000.0000",
                  name: "A",
                  percent: 60
              },
              {
                  x: 'B坐标',
                  number: null,
                  name: "B",
                  percent: 80
              },
              {
                  x: 'C坐标',
                  number: null,
                  name: "C",
                  percent: 80
              },
              {
                  x: 'SP1坐标',
                  number: null,
                  name: "SP1",
                  percent: 80
              },
              {
                  x: 'SP2坐标',
                  number: null,
                  name: "SP2",
                  percent: 80
              }
            
          ]
      }
    },
    mounted() {
    this.getRightBottom();
    this.getRightBottom2()
    this.getRightBottom3()
    this.getRightBottom4()
    this.getRightBottom5()
  },
    methods: {
        getRightBottom() {
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        max:120,
                        min: 50,
                        splitNumber: 14,
                        name: '业务指标',
                        type: 'gauge',
                        //仪表盘轴线相关配置。
                        axisLine: {
                            show: true,
                        },
                        splitLine: {
                            show: true
                        },
                        //刻度样式。
                        axisTick: {
                            show: false
                        },
                        //刻度标签。
                        axisLabel: {
                            show: true,
                            distance:-60,
                            formatter: function (value) {
                                switch(value)
                                {
                                case 55 :
                                    return '';//隐藏
                                case 65:
                                    return '';//隐藏
                                case 75:
                                    return '';//隐藏
                                case 85:
                                    return '';//隐藏
                                case 95:
                                    return '';//隐藏
                                case 105:
                                    return '';//隐藏
                                case 115:
                                    return '';//隐藏
                                default:
                                    return value;
                                }
                            },
                        },
                        detail: {
                            formatter:'{value}%',
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [{value: 120, name: '主轴'}]
                    }
                ]
            };
            let myChart = this.$echarts.init(document.getElementById("myChart1"));
            // // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        getRightBottom2() {
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        max:120,
                        min: 0,
                        splitNumber: 24,
                        name: '业务指标',
                        type: 'gauge',
                        //仪表盘轴线相关配置。
                        axisLine: {
                            show: true,
                        },
                        splitLine: {
                            show: true
                        },
                        //刻度样式。
                        axisTick: {
                            show: false
                        },
                        //刻度标签。
                        axisLabel: {
                            show: true,
                            distance:-60,
                            formatter: function (value) {
                                switch(value)
                                {
                                case 5 :
                                    return '';//隐藏
                                case 15:
                                    return '';//隐藏
                                case 25:
                                    return '';//隐藏
                                case 35:
                                    return '';//隐藏
                                case 45:
                                    return '';//隐藏
                                case 55:
                                    return '';//隐藏
                                case 65:
                                    return '';//隐藏
                                case 75:
                                    return '';//隐藏
                                case 85:
                                    return '';//隐藏
                                case 95:
                                    return '';//隐藏
                                case 105:
                                    return '';//隐藏
                                case 115:
                                    return '';//隐藏
                                default:
                                    return value;
                                }
                            },
                        },
                        detail: {
                            formatter:'{value}%',
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [{value: 120, name: '主轴'}]
                    }
                ]
            };
            let myChart = this.$echarts.init(document.getElementById("myChart2"));
            // // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        getRightBottom3() {
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        max:30000,
                        min: 0,
                        splitNumber: 2,
                        name: '业务指标',
                        type: 'gauge',
                        startAngle: 270,
                        //结束角度。
                        endAngle: 0,
                        //仪表盘轴线相关配置。
                        axisLine: {
                            show: true,
                        },
                        splitLine: {
                            show: true
                        },
                        //刻度样式。
                        axisTick: {
                            show: false
                        },
                        //刻度标签。
                        axisLabel: {
                            show: true,
                            distance:-65,
                        },
                        detail: {
                            formatter:'{value}rpm',
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [{value: 16297}]
                    }
                ]
            };
            let myChart = this.$echarts.init(document.getElementById("myChart3"));
            // // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        getRightBottom4() {
            let option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        max:30000,
                        min: 0,
                        splitNumber: 20,
                        name: '业务指标',
                        type: 'gauge',
                        //仪表盘轴线相关配置。
                        axisLine: {
                            show: true,
                        },
                        splitLine: {
                            show: true
                        },
                        //刻度样式。
                        axisTick: {
                            show: false
                        },
                        //刻度标签。
                        axisLabel: {
                            show: true,
                            distance:-65,
                            formatter: function (value) {
                                switch(value)
                                {
                                case 1500 :
                                    return '';//隐藏
                                case 4500:
                                    return '';//隐藏
                                case 7500:
                                    return '';//隐藏
                                case 10500:
                                    return '';//隐藏
                                case 13500:
                                    return '';//隐藏
                                case 16500:
                                    return '';//隐藏
                                case 19500:
                                    return '';//隐藏
                                case 22500:
                                    return '';//隐藏
                                case 25500:
                                    return '';//隐藏
                                case 28500:
                                    return '';//隐藏
                                // case 105:
                                //     return '';//隐藏
                                // case 115:
                                //     return '';//隐藏
                                default:
                                    return value;
                                }
                            },
                        },
                        detail: {
                            formatter:'{value}rpm',
                            textStyle: {
                                fontSize: 20
                            }
                        },
                        data: [{value: 16297}]
                    }
                ]
            };
            let myChart = this.$echarts.init(document.getElementById("myChart4"));
            // // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        getRightBottom5() {
            let myChart = this.$echarts.init(document.getElementById("myChart5"));
            let option = {
                yAxis: [{
                    type: 'category',
                    data: [''],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }, {
                    type: 'category',
                    data: [''],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }],
                xAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                tooltip: {
                    formatter: '{a}: {c}'
                },
                grid: {
                    containLabel: true,
                    width: "99%",
                    height: 120,
                    left: 0,
                    top: 50
                },
                series: [{
                    name: "差",
                    splitNumber: 8,
                    data: [80000],
                    type: 'bar',
                    yAxisIndex: 0,
                    stack: "range",
                    silent: true,
                    barWidth: 50,
                    color: "#F5B4AE"
                }, {
                    name: "实际值",
                    data: [18060],
                    type: 'bar',
                    yAxisIndex: 1,
                    barWidth: 50,
                    color: "#434778",
                    z: 3,
                }]
            };
            // // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        },
        handleSubmit(item) {
            console.log(item)
        }
    }
    
}
</script>
<style scoped lang="less">
.center-warp {
    display: flex;
}
.title {
    font-size: 17px;
    margin-left: 10px;
}
.unread  {
    position: relative;
}
.unread:after {
    content: ' ';
    position: absolute;
    left: -10px;
    top: 8px;
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 4px;
}
.table-a {
        border: 1px solid gray;
    td {
        text-align: center;
        .bottonStyle {
            width: 100px;
            border: 0;
        }
    }
}
.table-b {
    td {
        text-align: center;
        .bottonStyle {
            width: 40px;
            border: 0;
        }
    }
}
.myChart1Title {
    position: absolute;
    bottom: 20px;
    /* text-align: center; */
    left: 20%;
    /* right: 10px; */
}
.myChart2Title {
    position: absolute;
    bottom: 20px;
    right: 27%;
}

</style>