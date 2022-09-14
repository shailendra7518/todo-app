import { useRef } from "react"
import { useDispatch } from "react-redux"

import {Addtodo} from "../Redux/action"
export default function AddTodo(){
    const ref=useRef(null)
    const dispatch=useDispatch()
    const handleClick=(e)=>{
        e.preventDefault()
        const {value}=ref.current.title
        dispatch(Addtodo(value))
    }

    return <div>
        <form ref={ref} onSubmit={handleClick} >
            <input type="text" id="title"/>
            <input type="submit" />
        </form>
    </div>
}