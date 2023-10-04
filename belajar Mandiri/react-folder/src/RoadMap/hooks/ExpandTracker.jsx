import React from 'react'
import { useState, useEffect,useRef } from 'react'
const ProjectState = () => {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [tracker,setTracker]= useState(0)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(e.target.InputAction){
      if(e.target.InputAction.value==="income"){
        setIncome(Number(e.target.amount.value)+income)
      }else{
        if(income>0&&e.target.InputAction.value==="expense"){
              setExpense(Number(e.target.amount.value)+expense)
        }
      }
    }
      e.target.InputAction.value=""
      e.target.amount.value=""
  }
  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("dataTracker"))||[]
    if(storedData.length>0){
      const lastIndex=storedData.length-1
      setIncome(storedData[lastIndex].income)
      setExpense(storedData[lastIndex].expense)
      setTracker(storedData[lastIndex].tracker)
    }
    console.log(storedData)
  },[])

  useEffect(()=>{
    setTracker(income-expense)
    const newData=[{
      income,
      expense,
      tracker
    }]
    if(income>0 &&tracker>=0){
      localStorage.setItem("dataTracker",JSON.stringify(newData))
    }
  },[income,expense,tracker])

  return (
    <div className="min-h-screen py-4">
      <Header income={income} expense={expense} tracker={tracker} />
      <Body income={income} expense={expense}/>
      <Footer onSubmit={handleSubmit} />
    </div>
  )
}
const Header=(props)=>{
  const {income,expense,tracker}=props
  return (
   <div className="text-center mt-4 max-w-xl mx-auto">
     <h1 className="text-3xl font-bold font-serif uppercase">Expense Tracker</h1>
     <h2 className="text-4xl font-bold font-mono">{(tracker).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h2>
     <div className="max-w-sm mx-auto flex gap-2 justify-center py-5 mt-2 bg-slate-100 rounded-lg shadow-lg">
        <div className="flex flex-col gap-2 bg-gray-200 py-2 px-2 shadow-md rounded-sm hover:shadow-xl transition-all duration-500 ease-out">
            <h3 className="text-xl font-bold font-serif">Income</h3>
            <h4  className="text-lg font-bold font-mono text-green-500">{(income).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h4>
        </div>
        <div className="flex flex-col gap-2 bg-gray-200 py-2 px-2 shadow-md rounded-sm hover:shadow-xl transition-all duration-500 ease-out">
            <h3 className="text-xl font-bold font-serif">Expense</h3>
            <h4 className="text-lg font-bold font-mono text-red-500">{(expense).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h4>
        </div>
     </div>
   </div>
  )
}
const Body=(props)=>{
  const { income, expense }= props
   return(
     <div className="text-start max-w-sm mx-auto">
        <h5 className="font-bold text-lg mt-4 mb-0.5">
            History
        </h5>
            <hr className="border-gray-700 border-2 mb-2" />
        <div className="flex flex-col bg-gray-200 rounded-xl py-5 px-3 hover:shadow-2xl transition-all duration-500 ease-out">
            <div className="bg-red-500 rounded-t-xl px-5 py-4 flex justify-between items-center relative hover:bg-transparent transition-all duration-500">
                <h6 className="text-green-500 font-bold text-xl">Payment</h6>
                <p className="text-white font-semibold text-xl">{(income).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                <div className="absolute h-full right-0 w-2 bg-red-700 rounded-tr-xl"></div>
            </div>
            <div className="bg-green-500 rounded-b-xl shadow-xl px-5 py-4 flex justify-between items-center relative hover:bg-transparent transition-all duration-500">
                <h6 className="text-red-500 font-bold text-xl">Docs</h6>
                <p className="text-white font-semibold text-xl">{(expense).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                <div className="absolute h-full right-0 w-2 bg-green-700 rounded-br-xl"></div>
            </div>    
        </div>
     </div>
   )
}

const Footer=(props)=>{
  const { onSubmit }=props
  return(
    <div className="max-w-sm mx-auto">
        <h5 className="font-bold text-lg mt-4 mb-0.5">
          Add New Transaction  
        </h5>
            <hr className="border-gray-700 border-2 mb-2" />
        <form onSubmit={onSubmit} className="flex flex-col gap-4 px-2 py-5 bg-gray-200 rounded-lg shadow-2xl">
          <div>
              <label htmlFor="InputAction" className=" font-serif text-lg font-semibold">Action</label>
              <select name="InputAction" id="InputAction" className="w-full py-2 px-3 bg-gray-500 text-white rounded-lg cursor-pointer group">
                <option value="" className="cursor-pointer">Select Action</option>
                <option value="income" className="cursor-pointer">Income</option>
                <option value="expense"  className="cursor-pointer">Expense</option>
              </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="amount" className=" font-serif text-lg font-semibold">Amount</label>
            <input type="text" name="amount" id="amount" placeholder="Enter Amount" className="bg-gray-500 text-white px-3 py-2 rounded-lg placeholder:text-slate-50 outline-none focus:ring-2 focus:ring-white placeholder:opacity-80"/>
          </div>
          <div>
            <button type="submit" className="bg-gray-500 px-12 py-2 rounded-lg text-slate-200 hover:bg-gray-950 hover:scale-110 transition-all duration-500">Save</button>
          </div>
        </form>
    </div>
  )
}
ProjectState.Header=Header
ProjectState.Body=Body
ProjectState.Footer=Footer
export default ProjectState