/**
 * Created by fm on 2017/6/1.
 */
import Vuex from "vuex"
import Vue from "vue"
import objectPath from "object-path"
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    selected:"profile",
    user:{
      id:"",
      username:""
    },
    resume:{
      config:[
        {field:"profile",icon:"id"},
        {field:"workHistory",icon:"work"},
        {field:"education",icon:"book"},
        {field:"projects",icon:"heart"},
        {field:"awards",icon:"cup"},
        {field:"contacts",icon:"phone"},
      ],
      profile:{
        name:"babybear",
        city:"重庆",
        title:"研究生"
      },
      'workHistory': [
        {company: 'AL', content: '我的第二份工作是'},
        {company: 'TX', content: '我的第一份工作是'},
      ],
      education: [
        {school: '重庆大学', content: '本科'},
        {school: '重庆大学', content: '研究生'},
      ],
      projects: [
        {name: 'project A', content: '文字'},
        {name: 'project B', content: '文字'},
      ],
      awards: [
        {name: 'awards A', content: '文字'},
        {name: 'awards B', content: '文字'},
      ],
      contacts: [
        {contact: 'phone', content: '13812345678'},
        {contact: 'qq', content: '12345678'},
      ]
},
  },
  mutations:{
    switchTab(state,payload){
      state.selected=payload
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value);
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    }
  }

})
