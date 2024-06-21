import React ,{useState} from 'react'
import './App.css'
import axios from 'axios'


export default function Create({addTask}) {
  const [task,setTask]=useState('')
  const handleAdd=()=>{
    axios.post('http://localhost:3001/add',{task:task} ).then(result=>{
      location.reload();
      addTask({task});
      setTask('')
    }).catch(err=>console.log(err))

  }
  return (
    <div>
      <input type="text" name="" id="" className="create_forminput" onChange={(e)=>setTask(e.target.value)}></input>
      <button type="button" className="create_formbutton" onClick={handleAdd}>Add</button>
    </div>
  )
}
