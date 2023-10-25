import Counter from "./features/counter/Counter"
import { Link } from "react-router-dom"
function App() {
  

  return (
    <section className="h-screen flex gap-4 items-center justify-center">
     <Link to="/counter">
      <button className="bg-blue-500 px-5 py-1 rounded-lg text-white text-2xl hover:bg-blue-800">Counter</button>
     </Link>
     <Link to="/PostProject">
      <button className="bg-blue-500 px-5 py-1 rounded-lg text-white text-2xl hover:bg-blue-800">Post Project</button>
     </Link>
    </section>
  )
}

export default App
