import { useState,useContext } from "react";
import React from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const valor = useContext(TaskContext);
  // console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(title);
    // const newTask = {
    //   title
    // }
    createTask({title, description});
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2" 
      type="text" placeholder="Write a task" 
      onChange={(e)=>{
        setTitle(e.target.value);
        console.log(e.target.value);
      }}
      value={title}
      autoFocus/>
      <textarea className="bg-slate-300 p-3 w-full mb-2 rounded-xl"  
      placeholder="Escribe la descripcion de la tarea"
      onChange={e=>{
        setDescription(e.target.value);
        console.log(e.target.value);
      }}
      value={description}></textarea>
      <button className="bg-blue-500 py-1 px-3 rounded-xl text-white hover:bg-red-400"
      >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
