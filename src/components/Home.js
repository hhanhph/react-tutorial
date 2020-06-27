import React,{useState}  from 'react';

export default function Home(){
const[input,putInput]=useState("");
function onInput(event){
const newInput=event.target.value;
putInput(newInput);
  }
  const [todo,setTodo]=useState([])
function add(){
    setTodo(preValue=>{
      return [...preValue,input]
    });
    putInput("");
  }

const list=todo.map((todo,index)=>{
return<li key={index}><input name="isWorking" type="checkbox"></input>{todo}</li> 
})
return(
  <div> 
    <h1>To-Do List</h1>
    <input onChange={onInput} type="text" value={input}></input>
    
    <button onClick={add}>Add</button>
    <div>
      <ul>{list}</ul>
    </div>
 </div>
    )
}