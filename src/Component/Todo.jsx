import { useSelector } from "react-redux"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

  



  export default function Todo(){

    const data =useSelector((state)=>state)
    console.log(data)
    return <div>
        <h1>hello todo</h1>
        <AddTodo/>
        <TodoList/>
    </div>

  }