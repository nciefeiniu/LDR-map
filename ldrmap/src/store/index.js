// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    windowsWeight: 375,
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
      const obj = state
      let width = 375
      let height = 667
      wx.getSystemInfoSync({
        success: function (res) {
          width = res.windowWidth;
          height = res.windowHeight;
          that.store.changeSys()
        }
      })
      obj.windowsWeight = weight
      obj.windowsHeight = height
    }
  }
})

export default store
