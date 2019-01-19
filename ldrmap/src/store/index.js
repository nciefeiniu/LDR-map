// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    windowsWidth: 375,
    windowsHeight: 667
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    changeSys: (state) => {
      console.log('vuex')
      const obj = state
      try {
        const res = wx.getSystemInfoSync()
        console.log('获取手机屏幕成功', res)
        obj.windowsWidth = res.windowWidth
        obj.windowsHeight = res.windowHeight
      } catch (err) {
        console.log('vuex error:', err)
      }
    }
  }
})

export default store
