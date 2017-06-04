<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好,{{user.name}}</span>
          <a href="#" class="button" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a href="#" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <a href="#" class="button" @click.prevent="signInDialogVisible=true">登录</a>
        </div>
      </div>
    </div>
    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
      <SignUpForm @success="signIn($event)"></SignUpForm>
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible=false">
      <SignInForm @success="signIn($event)"/>
    </MyDialog>
  </div>
</template>
<script>
  import MyDialog from "./MyDialog"
  import SignUpForm from "./SignUpForm"
  import SignInForm from "./SignInForm"
  import AV from "../lib/leancloud"
  export default{
    name:"topbar",
    data(){
        return {
          signUpDialogVisible:false,
          signInDialogVisible:false
        }
    },
    computed:{
      user(){
          return this.$store.state.user
      },
      logined(){
            return this.user.id
      }
    },
    components:{
      MyDialog,
      SignUpForm,
      SignInForm
    },
    methods:{
        signIn(user){
          this.signUpDialogVisible=false
          this.signInDialogVisible=false
          this.$store.commit("setUser",user)
        },
        signOut(){
          AV.User.logOut()
          this.$store.commit("removeUser")
        }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  #topbar {
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    > .wrapper {
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height: 64px;
    }
    > .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    > .logo {
      font-size: 24px;
      color: #000;
    }
  }
  .actions {
    display: flex;
    .userActions{
      .welcome{
        margin-right: .5em;
      }
    }
  }
</style>
