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
import geoJson from '@/utils/js/mapData.js'

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

    echarts.registerMap('china', geoJson);
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
            backgroundColor: '#404a59',
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                zoom: 1.5,
                center: [104.6, 30.67],
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
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