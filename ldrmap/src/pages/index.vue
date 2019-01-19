<template>
    <div>
        <!-- <button type="primary">test</button>
        <button @click="initChart">初始化</button> -->

        <div class="wrap">
            <mpvue-echarts :echarts="echarts" :onInit="onInit" ref="echarts" :throttleTouch="throttleTouch" />
        </div>

    </div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import { mapState } from 'vuex'
import geoCoordMap from '@/utils/js/geo.js'
import geoJson from '@/utils/js/mapData.js';

let chart = null;
let option = null;

function initChart(canvas, width, height) {
    console.log(option)
    if (option === {} || option === null) {
        return
    }
    console.log('执行echarts', )
    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    echarts.registerMap('henan', geoJson);
    // var option = {}; // ECharts 配置项

    chart.setOption(option);

    return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
    components: {
        mpvueEcharts
    },
    data() {
        return {
            option: {},
            echarts,
            onInit: initChart,
            throttleTouch: true
        }
    },

    computed: {

    },

    methods: {

    },

    onLoad() {
        console.log(this.onInit)
        option = {
            tooltip: {
                trigger: 'item'
            },

            visualMap: {
                min: 0,
                max: 100,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                type: 'map',
                mapType: 'henan',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {

                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,

                data: [
                    { name: '郑州市', value: 100 },
                    { name: '洛阳市', value: 10 },
                    { name: '开封市', value: 20 },
                    { name: '信阳市', value: 30 },
                    { name: '驻马店市', value: 40 },
                    { name: '南阳市', value: 41 },
                    { name: '周口市', value: 15 },
                    { name: '许昌市', value: 25 },
                    { name: '平顶山市', value: 35 },
                    { name: '新乡市', value: 35 },
                    { name: '漯河市', value: 35 },
                    { name: '商丘市', value: 35 },
                    { name: '三门峡市', value: 35 },
                    { name: '济源市', value: 35 },
                    { name: '焦作市', value: 35 },
                    { name: '安阳市', value: 35 },
                    { name: '鹤壁市', value: 35 },
                    { name: '濮阳市', value: 35 },
                    { name: '开封市', value: 45 }
                ]

            }]


            // 下面的}是option 的结尾
        }
    }
}
</script>

<style scoped>
.wrap {
    width: 100%;
    height: 100vh;
}
</style>