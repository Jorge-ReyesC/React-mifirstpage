import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCard({ task }) {
//   const valor = useContext(TaskContext);
//   console.log(valor);
    const {deleteTask} = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md" >
      <h1 className="text-xl font-bold capitalize">{task.title}</h1> 
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button 
      className="bg-blue-500 py-2 rounded-xl mt-5 hover:bg-red-400" 
      onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}
export default TaskCard;
