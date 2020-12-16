<template>
  <div id="chart1" style="width: 100vw; height: 60vh" />
</template>
<script>
import echarts from "echarts";
import { numFormat, formatNum } from "@/utils/format";
require("echarts/lib/component/legend");
export default {
  props: {
    chartData: {
      type: Object,
      default: function () {
        return {
          t1: "",
          t2: "",
          t3: "",
          t4: "",
          t5: "",
          t6: "",
          t7: "",
          t8: "",
          t9: "",
          xz: [],
          data0: [],
          data1: [],
          data2: [],
          data3: [],
          data4: [],
          data5: [],
          data6: [],
          data7: [],
          data8: [],
        };
      },
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      handler() {
        this.initData();
      },
      deep: true,
    },
  },
  mounted() {
    this.initData();
    window.addEventListener("resize", this.chartResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.chartResize);
  },

  methods: {
    setLineOptions({
      t1,
      t2,
      t3,
      t4,
      t5,
      t6,
      t7,
      t8,
      t9,
      xz,
      data0,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
    } = {}) {
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
        this.chart = echarts.init(this.$el);
      }
      // 基于准备好的dom，初始化echarts实例
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption({
        tooltip: {
          trigger: "axis",
          padding: [5, 10],
          textStyle: {
            fontSize: 11,
            fontWeight: "bold",
            color: "#000",
          },
          axisPointer: {
            type: "shadow",
            width: "auto",
            shadowStyle: {
              color: "rgba(180,180,180,0.1)",
            },
          },
          backgroundColor: "rgba(220,220,220,0.4)",
          // alwaysShowContent: false,
          formatter: function (params) {
            let result = "";
            let dateStr = "";
            params.forEach(function (item) {
              dateStr = item.axisValue + "</br>";
              result +=
                item.marker +
                " " +
                item.seriesName +
                " : " +
                formatNum(parseInt(item.value)) +
                "</br>";
            });
            return dateStr + result;
          },
        },
        grid: [
          {
            x: "7%",
            y: "7%",
            height: "40%",
            left: "1%",
            right: "7%",
            top: "10%",
          },
          {
            x: "7%",
            y2: "7%",
            height: "40%",
            left: "1%",
            right: "7%",
            bottom: "10%",
          },
        ],
        legend: {
          orient: "vertical",
          align: "right",
          x: "right",
          y: "center",
          data: [t1, t2, t3, t4, t5, t6, t7, t8, t9],
        },
        axisPointer: {
          link: { xAxisIndex: "all" },
          label: {
            backgroundColor: "#c1c1c1",
          },
        },
        xAxis: [
          {
            show: false, // 隐藏了x轴
            type: "category",
            gridIndex: 0, // 对应前面grid的索引位置（第一个）
            axisTick: {
              show: false,
            },
            axisLabel: {
              // interval:showNum,  //x轴显示的数量，我这里是动态算的
            },
            data: xz,
          },
          {
            gridIndex: 1, // 对应前面grid的索引位置（下）
            axisTick: {
              show: false,
            },
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: "#c1c1c1",
              },
              onZero: false,
            },
            data: xz,
          },
        ],
        yAxis: [
          {
            show: false,
            type: "value",
            gridIndex: 1, // 对应前面grid的索引位置（第二个）
            nameTextStyle: {
              padding: 25,
            },
            position: "left",
            nameLocation: "middle",
            splitLine: { show: false },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                fontSize: 12, // y轴坐标轴上的字体大小
              },
            },
          },
          {
            show: false,
            type: "value",
            gridIndex: 0,
            nameLocation: "middle",
            nameTextStyle: {
              padding: 25,
            },
            splitLine: { show: false },
            position: "right",
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: t1,
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: data0,
            barWidth: 80,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              // 柱样式
              normal: {
                color: this.$color.mainColor,
                label: {
                  show: true, // 开启显示
                  position: "inside",
                  textStyle: {
                    fontSize: 10,
                    color: "#fff",
                  },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                opacity: 1,
              },
            },
          },
          {
            name: t2,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data1,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#FF9711",
                borderColor: "rgba(255,151,17,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#FF9711",
                lineStyle: {
                  color: "#FF9711",
                  width: 1,
                },
              },
            },
          },
          {
            name: t3,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data2,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#3F5766",
                borderColor: "rgba(63,87,102,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#3F5766",
                lineStyle: {
                  color: "#3F5766",
                  width: 1,
                },
              },
            },
          },
          {
            name: t4,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data3,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#013D4C",
                borderColor: "rgba(1,61,76,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#013D4C",
                lineStyle: {
                  color: "#013D4C",
                  width: 1,
                },
              },
            },
          },
          {
            name: t5,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data4,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#de9c53",
                borderColor: "rgba(222,156,83,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#de9c53",
                lineStyle: {
                  color: "#de9c53",
                  width: 1,
                },
              },
            },
          },
          {
            name: t6,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data5,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#e94d60",
                borderColor: "rgba(233,77,96,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#e94d60",
                lineStyle: {
                  color: "#e94d60",
                  width: 1,
                },
              },
            },
          },
          {
            name: t7,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data6,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#6b6b6b",
                borderColor: "rgba(107,107,107,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#6b6b6b",
                lineStyle: {
                  color: "#6b6b6b",
                  width: 1,
                },
              },
            },
          },
          {
            name: t8,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data7,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#229bbf",
                borderColor: "rgba(34,155,191,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#229bbf",
                lineStyle: {
                  color: "#229bbf",
                  width: 1,
                },
              },
            },
          },
          {
            name: t9,
            type: "line",
            xAxisIndex: 0,
            yAxisIndex: 1,
            smooth: true,
            data: data8,
            symbol: "circle",
            symbolSize: 6,
            emphasis: {
              label: {
                fontWeight: "bolder",
              },
              itemStyle: {
                color: "#e2231a",
                borderColor: "rgba(226,35,26,0.2)",
                borderWidth: 10,
              },
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: { fontSize: 10 },
                  formatter: function (a) {
                    return formatNum(parseInt(a.data));
                  },
                },
                color: "#e2231a",
                lineStyle: {
                  color: "#e2231a",
                  width: 1,
                },
              },
            },
          },
        ],
      });
    },
    initData() {
      this.chart = echarts.init(this.$el);
      this.setLineOptions(this.chartData, {
        notMerge: true,
      });
    },
    chartResize() {
      this.chart.resize();
    },
  },
};
</script>
<style lang="scss" scoped>
#chart1 {
  padding-right: 300px;
}
</style>
