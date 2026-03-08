import { useState } from 'react'



function Tasks() {
  type Task = {
  id: number
  name: string
  level: string
  deadline: string
  status: string
}

  const [task, setTasks] = useState<Task[]>([
  { id: 1, name: "Task 1", level: "Easy", deadline: "2026-03-01", status: "in-progress" },
  { id: 2, name: "Task 2", level: "Medium", deadline: "2026-03-01", status: "To Do" }
])

  const [newTask, setNewTask] = useState<Task>({ id: 2, name: "", level: "", deadline: "", status: "To Do" })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewTask(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const addTask = () => {
    setTasks(prev => [...prev, newTask])
    setNewTask({
      id: newTask.id + 1,
      name: "",
      level: "",
      deadline: ""
      ,status: "To Do"
    })
  }

  const removeTask = (id: number) => {
   setTasks(p => p.filter( task => task.id !== id) )
    
  }

  const complete = (id: number) => {
    const statuses = ["incomplete", "in-progress", "complete"]
   setTasks(p => p.map(task => { 
   if(task.id !== id){return task}
   
    const currentIndex = statuses.indexOf(task.status)
    const nextIndex = (currentIndex + 1) % statuses.length
   return { ...task,
      status: statuses[nextIndex]}}
))}

  const moveTask = (id: number,direction:boolean) => {
  setTasks(prev => {
     const index = prev.findIndex(t => t.id === id)
     const newTasks = [...prev];
     if (index === -1) return prev
    
    if (direction){
      if (index === 0) return prev 
      ;[newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]
    }
    else{
      if (index === prev.length -1 ) return prev 
      ;[newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]]
    }

    return newTasks
  })
}


  

  
  return (
    <>
   
      <h1>Task manger</h1>
      <div className="card">
       
      </div>
      <table>
        <tr>
        <th>name</th>
        <th>level</th>
        <th>deadline</th>
        </tr>
        {task.map((t)=> (
            <tr key={t.id}>
              
                <td>{t.name}</td>
                <td>{t.level}</td>
                <td>{t.deadline}</td>
                <td>{t.status}</td>
              <button onClick={() =>complete(t.id)}>change status</button>
              <button onClick={() =>moveTask(t.id,true)}>go up</button>
              <button onClick={() =>moveTask(t.id,false)}>go down</button>
              <button onClick={() =>removeTask(t.id)}>Remove</button>
                
            </tr>
            
        ))}



      </table>

      <div className='add_task'>
        <input name='name' value={newTask.name} onChange={handleChange} ></input>
        <input name='level' value={newTask.level} onChange={handleChange} ></input>
        <input name='deadline' value={newTask.deadline} onChange={handleChange} ></input>

        <button onClick={addTask}>Add Task</button>

      </div>


    </>
  )
}

export default Tasks
