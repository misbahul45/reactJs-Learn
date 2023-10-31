
import { useDispatch,useSelector } from 'react-redux'

const CounterApp=()=>{
 const value=useSelector((state)=>state.counter.value)


 return(
  <p>{value}</p>
 )
}


function App() {
  return (
    <p></p>
  )
}

export default App
