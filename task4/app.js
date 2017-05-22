import Vue from 'vue'
import AV from "leancloud-storage"

var APP_ID="oVeYR2gEiDz0KPsp3LEjMGwX-gzGzoHsz"
var APP_KEY="xvcxCeL0Bj5Dm0L5qHgqWCKP"
AV.init({
    appId:APP_ID,
    appKey:APP_KEY
})
var app = new Vue({
    el: '#app',
    data: {
        actionType:"signUp",
        formData:{
            username:"",
            password:""
        },
        newTodo:"",
        todoList:[],
        currentUser:null
    },
    created:function () {
        window.onbeforeunload=()=>{
            let dataString=JSON.stringify(this.todoList)
            window.localStorage.setItem("myTodos",dataString)
        }
        let oldTodoList=JSON.parse(window.localStorage.getItem("myTodos"))
        this.todoList=oldTodoList||[]
    },
    methods:{
        addTodo:function(){
            this.todoList.push({
                title:this.newTodo,
                createdAt:new Date(),
                done:false
            })
            this.newTodo=""
        },
        removeTodo:function(todo){
            let index=this.todoList.indexOf(todo)
            this.todoList.splice(index,1)
        },
        signUp:function () {
            let user=new AV.User();
            user.setUsername(this.formData.username)
            user.setPassword(this.formData.password)
            user.signUp().then(function (loginedUser) {
                this.currentUser=this.getCurrentUser()
            }),(error)=> {
                alert("注册失败")
            }
        },
        login:function () {
            AV.User.logIn(this.formData.username,this.formData.password).then((loginedUser)=>{
                this.currentUser=this.getCurrentUser()
                alert("登陆成功")
            }),function (error) {
                alert("登陆失败")
            }
        },
        logout: function () {
            AV.User.logOut()
            this.currentUser=null
            window.location.reload()
        },
        getCurrentUser:function () {
            let {id,createdAt,attributes:{username}}=AV.User.current()
            return {id,username,createdAt}
        }
    }
})   