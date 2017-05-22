import bar from './bar';
import Vue from 'vue'
var app = new Vue({
    el: '#app',
    data: {
        actionType:"signUp",
        formData:{
            username:"",
            password:""
        },
        newTodo:"",
        todoList:[]
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
        }
    }
})   