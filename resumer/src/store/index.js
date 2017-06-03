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
        {field:"workHistory",icon:"work",type:"array",keys:["company","details"]},
        {field:"education",icon:"book",type:"array",keys:["school","details"]},
        {field:"projects",icon:"heart",type:"array",keys:["name","details"]},
        {field:"awards",icon:"cup",type:"array",keys:["name","details"]},
        {field:"contacts",icon:"phone",type:"array",keys:["contact","content"]}
      ]
    }
  },
  mutations:{
    initState(state,payload){
      state.resume.config.map(item=>{
        if(item.type=="array"){
          Vue.set(state.resume,item.field,[])
        }else{
          Vue.set(state.resume,item.field,{})
          item.keys.map(key=>{
            Vue.set(state.resume[item.field],key,"")
          })
        }
      })
    },
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
