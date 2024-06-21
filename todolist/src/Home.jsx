import React,{ useState ,useEffect} from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill ,BsFillCheckCircleFill} from 'react-icons/bs';
import './App.css'

function Home() {
  const [todos ,settodos]=useState([])
  useEffect(()=>{axios.get('http://localhost:3001/get').then(result => settodos(result.data)).catch(e=>{
    console.log(e)
  })},[])
  const addTask = (task) => {
    settodos([...todos, task]);
  }
  const handleEdit=(id)=>{
    axios.put('http://localhost:3001/update/'+id).then(result =>{
      location.reload()
    } ).catch(e=>{
      console.log(e)})

  }
  const handledel=(id)=>{
    axios.delete('http://localhost:3001/delete/'+id).then(result =>{
      location.reload()
    } ).catch(e=>{
      console.log(e)})
  }
  return (
    <div className="home">
        <h2>TODO LIST</h2>
        <Create addTask={addTask} />
        {
          todos.length==0 ? <div><h2>No record found</h2></div> :
          todos.map((todo,index) => (
            <div key={index} className="task">
              <div className="checkbox" onClick={()=>handleEdit(todo._id)}>
                {todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>:
                <BsCircleFill className='icon'/> }
                 <p className={todo.done? "line_through":""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' onClick={()=>handledel(todo._id)}/></span>
                </div>
              </div>
          )
        )
      }
    </div>
  )
}


export default Home
