 
import { React } from 'react';
import { ADD } from './actionType';
  const initialState={
    todos:[],
    isLoading:null
  }
 const Reducer=(oldState=initialState,action)=>{
               switch(action.type){
                case ADD:
                    return {...oldState,todos:[...oldState.todos,action.payload]}
                default:
                    return oldState
               }
 }

 export {Reducer};