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

  return (
    <div className='bg-slate-800 w-full min-h-screen flex'>
      <div className="flex-1 flex gap-4 justify-center flex-wrap py-2 max-h-screen overflow-auto">
        {todos.map((todo) => (
          <Todo
          seTodos={setTodos}
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
