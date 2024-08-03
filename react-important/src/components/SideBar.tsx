import Form from "./Form"

interface Props{
  isUpdate: boolean,
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>,
  todos:Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SideBar = ({isUpdate, setIsUpdate, todos, setTodos}: Props ) => {
  return (
    <aside className='w-full max-w-sm h-screen p-4 border-l-2 border-slate-100'>
      <Form setTodos={setTodos} isUpdate={isUpdate} setIsUpdate={setIsUpdate} todos={todos} />
    </aside>
  )
}

export default SideBar
