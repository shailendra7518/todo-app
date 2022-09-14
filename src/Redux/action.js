import {ADD} from "./actionType"

  const Addtodo=(value)=>{
     return { type:ADD, payload:{id:Math.abs(Date.now()).toString()+value ,title:value,status:false}}

  }
  const DeleteTodo=()=>{

  }
  const ToggleStatus=()=>{

  }
  const EditTodo=()=>{

  }

  export {Addtodo,DeleteTodo,ToggleStatus,EditTodo}