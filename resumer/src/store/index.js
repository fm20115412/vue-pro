/**
 * Created by fm on 2017/6/1.
 */
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++
    }
  }
})
