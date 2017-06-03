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
        {field:"profile",icon:"id",keys:["name","city","title","birthday"]},
        {field:"workHistory",icon:"work",keys:["company","details"]},
        {field:"education",icon:"book",keys:["school","details"]},
        {field:"projects",icon:"heart",keys:["name","details"]},
        {field:"awards",icon:"cup",keys:["name","details"]},
        {field:"contacts",icon:"phone",keys:["contact","content"]},
      ],
      profile:{

      },
      workHistory: [

      ],
      education: [

      ],
      projects: [

      ],
      awards: [

      ],
      contacts: [

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
    },
    removeUser(state){
      state.user.id=""
    }
  }
})
