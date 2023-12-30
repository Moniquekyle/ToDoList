import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa"


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className= 'Todo'>
      <p onClick = {() => toggleComplete(task.id)} 
      className ={`${task.completed ? 'completed' : ""}
      `}>{task.task}</p>
      <div>
      <FaRegEdit  onClick = {() => editTodo(task.id)}/>
      <FaDeleteLeft onClick = {() =>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
