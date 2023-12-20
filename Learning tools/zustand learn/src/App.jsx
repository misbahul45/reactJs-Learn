import { useCounter } from "./app/store"
import { shallow } from 'zustand/shallow'

function App() {
  const counter=useCounter((state)=>state.counter, shallow)
  const state=useCounter()
 const handleAdding=()=>{
  state.Adding()
 }
 const handleMinus=()=>{
  state.Minus()
 }
 console.log(counter)
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-blue-400">
       <div className="shadow-lg shadow-white/10 px-10 py-5 rounded-xl bg-green-500 flex flex-col justify-center items-center">
        <p className="text-xl font-bold text-white mb-10">{counter}</p>
        <div className="flex gap-2">
          <button onClick={handleAdding} className="bg-red-500 px-10 py-1 rounded-full text-lg text-white font-semibold hover:bg-red-700 transition-all duration-300">Add</button>
          <button onClick={handleMinus} className="bg-orange-500 px-10 py-1 rounded-full text-lg text-white font-semibold hover:bg-orange-700 transition-all duration-300">Minus</button>  
        </div>
       </div>
    </div>
  )
}

export default App
