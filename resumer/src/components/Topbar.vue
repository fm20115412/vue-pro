<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span>你好,{{user.name}}</span>
          <a href="#" class="button" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a href="#" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
            <SignUpForm @success="login($event)"></SignUpForm>
          </MyDialog>
          <a href="#" class="button">登录</a>
        </div>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>
<script>
  import MyDialog from "./MyDialog"
  import SignUpForm from "./SignUpForm"
  export default{
    name:"topbar",
    data(){
        return {
            signUpDialogVisible:false
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
      SignUpForm
    },
    methods:{
        login(user){
          this.signUpDialogVisible=false
          this.$store.commit("setUser",user)
        },
        signOut(){
          AV.user.logOut()
          this.$store.commit("removeUser")
        }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  #topbar{
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
  button{
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.5);
    }
    &.primary {
      background: #02af5f;
      color: white
    }
    .actions {
      display: flex;
      .userActions{
        margin-right: 3em;
      }
    }
  }
</style>
