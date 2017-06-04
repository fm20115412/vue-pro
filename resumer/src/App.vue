<template>
  <div>
   <router-view></router-view>
  </div>
</template>

<script>
  import "normalize.css/normalize.css"
  import "./assets/reset.css"
  import "./assets/ui.scss"
  import icons from "./assets/icons"

  import AV from "./lib/leancloud"
  import getAVUser from "./lib/getAVUser"

  document.body.insertAdjacentHTML("afterbegin",icons)

  export default {
    name:"app",
    created(){
      this.$store.commit("initState")
      let user=getAVUser()
      this.$store.commit("setUser",user)
      if(user.id){
        this.$store.dispatch("fetchResume").then(()=>{
        this.restoreResumeFromLocalStorage()
        })
      }else{
        this.restoreResumeFromLocalStorage()
      }
    },
    methods:{
      restoreResumeFromLocalStorage(){
        let resume=localStorage.getItem("resume")
        if(resume){
            this.$store.commit("setResume",JSON.parse(resume))
        }
      }

    }
  }
</script>
<style lang="scss" scoped>
</style>

