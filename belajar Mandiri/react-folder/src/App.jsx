import { Link } from "react-router-dom"
function App() {

  return (
    <div className="h-screen flex justify-center items-center gap-3">
        <Link to={"/app"}>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">All App</button>
        </Link>
        <Link to={"/Form"}>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">Home Form</button>
        </Link>
        <Link to={"/NoteApp"}>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">Note App</button>
        </Link>
        <Link to={"/OpsidianClone"}>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">Opsidian Clone</button>
        </Link>
    </div>
  )
}

export default App
