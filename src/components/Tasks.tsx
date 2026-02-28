import { useState } from 'react'



function Tasks() {
  
  const [task, setTask] = useState([{ name: "Task 1", level: "Easy", deadline: "2026-03-01" },
  { name: "Task 2", level: "Hard", deadline: "2026-03-02" }])

  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {task.map((t,index)=> (
            <tr key={index}>
                <td>{t.name}</td>
                <td>{t.level}</td>
                <td>{t.deadline}</td>
            </tr>
        ))}



      </table>

      <div className='add_task'>

        <button/>

      </div>


    </>
  )
}

export default Tasks
