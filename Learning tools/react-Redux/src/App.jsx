import { useEffect } from "react";
import Form from "./features/components/Form"
import TodoList from "./features/components/TodoList"
import axios from "axios";
function App() {
  return (
   <main className="flex flex-col items-center justify-center h-screen w-full bg-slate-800">
      <Form />
      <div className="w-full px-5 h-2/3 mt-5">
        <TodoList />
      </div>
   </main>
  )
}

export default App
