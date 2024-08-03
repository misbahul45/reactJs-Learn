import SideBar from "./components/SideBar"
import React, { useEffect } from "react"
import Todo from "./components/Todo"
const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos") as string):[])
  const [isUpdate, setIsUpdate] = React.useState<boolean>(false)
  useEffect(()=>{
    if(!isUpdate){
      setTodos(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos") as string):[])
    }
  },[!isUpdate])
  console.log(todos)
  return (
    <div className='bg-slate-800 w-full min-h-screen flex'>
      <div className="flex-1 flex gap-3 flex-wrap justify-center py-4 max-h-screen overflow-auto">
        {todos.map((todo) => (
          <Todo
          key={todo.id}
          {...todo}
          />
        ))}
      </div>
      <SideBar setTodos={setTodos} isUpdate={isUpdate} setIsUpdate={setIsUpdate} todos={todos} />
    </div>
  )
}

export default App
