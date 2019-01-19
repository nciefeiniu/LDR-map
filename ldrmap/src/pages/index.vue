<template>
    <div class="echarts-wrap">
        <mpvue-echarts :echarts="echarts" :onInit="onInit" lazyLoad="true" canvasId="demo-canvas" />
    </div>
</template>

<script>
import echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import {mapState} from 'vuex'

let chart = null;

function initChart(canvas, width, height) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {}; // ECharts 配置项

    chart.setOption(option);

    return chart; // 返回 chart 后可以自动绑定触摸操作
}

export default {
    components: {
        mpvueEcharts
    },
    data() {
        return {
            echarts,
            onInit: initChart
        }
    },
    computed: {
        ...mapState([
            'windowsWidth',
            'windowsHeight'
        ])
    },
    onLoad() {
        console.log(this.windowsWidth, this.windowsHeight)
    }
}
</script>

<style scoped>
.echarts-wrap {
    width: 100%;
    height: 100vh;
}
</style>