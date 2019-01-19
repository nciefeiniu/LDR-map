<template>
    <div>
        <!-- <button type="primary">test</button>
        <button @click="initChart">初始化</button> -->
        
        <div class="wrap">
            <mpvue-echarts :echarts="echarts" :onInit="handleInit" ref="echarts" />
        </div>
        
    </div>
</template>

<script>
import * as echarts from 'echarts/dist/echarts.simple.min'
import mpvueEcharts from 'mpvue-echarts'
import { mapState } from 'vuex'

let chart = null
export default {
    data() {
        return {
            option: null,
            echarts
        }
    },
    components: {
        mpvueEcharts
    },

    methods: {
        inChart() {
            let that = this
            that.option = {
                
            }
        },
        
        handleInit(canvas, width, height) {
            chart = echarts.init(canvas, null, {
                width: width,
                height: height
            })
            canvas.setChart(chart)
            chart.setOption(this.option)
            return chart
        }
    },

    onLoad() {
        let that = this
        that.inChart()
    }
}
</script>

<style scoped>
.wrap {
    width: 100%;
    height: 100vh;
}
</style>