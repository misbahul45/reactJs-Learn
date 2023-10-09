import React from 'react'
import { useState, useEffect,useRef} from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import apiRequest from './api/apiRequest'

const Content = () => {
    const Api_URL=`http://localhost:3500/items`
    const [items,setItems]= useState([])
    const [itemSearch,setItemSearch]=useState([])
    const [controlForm,setControlForm]=useState(false)
    const [addInformation,setAddInformation]=useState(false)
    const inputForm=useRef()
    useEffect(()=>{
        const fetchItem=async()=>{
            try{
                const respone=await fetch(Api_URL)
                const listItems=await respone.json()
                setItems(listItems)
            }catch(error){
                console.log(error)
            }
        }

       setTimeout(()=>{
        (async()=>{
            await fetchItem()
        })()
       },2000)
    },[])
    const handleList=(e)=>{
      if(e.target.type==="button"){
            setItems(items.filter((item)=>item.id!=e.target.id))

           const deleteOption={
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({id:e.target.id})
           }
           apiRequest(`${Api_URL}/${e.target.id}`,deleteOption)
        }
    }
    const handleCheckboxChange = (itemId) => {
        const updatedItems = items.map((item) => item.id === itemId ? { ...item, checked: !item.checked } : item);
        setItems(updatedItems);
        const myItem=updatedItems.filter((item)=>item.id===itemId);
        const updateOption={
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({checked:myItem[0].checked})
        }
        const requUrl=`${Api_URL}/${itemId}`
        apiRequest(requUrl,updateOption)
      };
    const handleActiveControl=()=>{
        setControlForm(!controlForm)
        inputForm.current.focus()
    }
    const handleAddItem=(e)=>{
        e.preventDefault()
        if(e.target.inputItem.value===""){
            setAddInformation(true)
            setTimeout(()=>{
                setAddInformation(false)
            },1000)
        }else{
            const newItems={
                id:items.length===0?1:items[items.length-1].id+1,
                item:e.target.inputItem.value,
                checked:e.target.cheked.checked
            }
            e.target.inputItem.value=""
            e.target.cheked.checked=false
            setItems([
                ...items,
              newItems
            ])
          const postOption={
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItems)
            } 
         apiRequest(Api_URL,postOption) 
          setControlForm(false)
          setItemSearch([])
        }
    }
    const SearchItems=(e)=>{
        const updatedItems=items.filter((item)=>item.item.toLowerCase().includes(e.target.value))
        setItemSearch(updatedItems)
        console.log(updatedItems)
    }

  return (
    <main className=" bg-gray-200 flex-1">
      <div className="flex h-screen items-center flex-col  justify-center ">
            <form onSubmit={handleAddItem} className={`${controlForm?"scale-100":"scale-0"}  backdrop-blur-[20px] fixed top-1/3 bg-blue-900 w-full max-w-xs min-h-60 py-5 px-3 rounded-lg shadow-lg  z-10 transition-all duration-700 ease-in-out`}>
                <h1 className="text-xl font-bold text-white text-center my-4">Add Grocery List</h1>
                <h2 className="text-red-500 text-lg font-bold ">{addInformation?"Please Enter Item":""}</h2>
                <label htmlFor="inputItem" className="flex flex-col gap-2 mb-5">
                    <span className='text-white text-lg'>Add Item</span>
                    <input ref={inputForm} type="text" name="inputItem" id="inputItem" placeholder="Enter Items" className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-2 focus:border-red-400" />
                </label>
                <div className="flex flex-col gap-2 items-start">
                    <input type="checkbox" name="cheked" className="w-5 h-5 cursor-pointer " />
                    <button type="submit" className="bg-green-500 px-3 py-2 rounded text-white font-semibold cursor-pointer hover:bg-green-700 transition-all duration-500">Save Items</button>
                </div>
            </form>
            {
                items.length>0?
             <div className="w-full max-w-lg">
                <input type="text" onChange={SearchItems} className="max-w-lg w-full px-5 py-2 rounded-xl mb-4 shadow-lg focus:ring-2 focus:ring-orange-400" placeholder="Search Items"/>
                {itemSearch.length>0?
                    <ul className="block mx-auto mt- bg-blue-300 w-full max-w-lg py-5 px-3 rounded-lg shadow-lg border-2 border-red-100 overflow-y-scroll max-h-[22rem]">
                    {
                    itemSearch.length>0 &&
                    itemSearch.map((item)=>(
                            <li onClick={handleList} key={item.id} className="bg-cyan-500 mb-2 px-4 py-3 flex items-center justify-between gap-2">
                                <input type="checkbox"  checked={item.checked} className="w-6 h-6 cursor-pointer" name="check"  onChange={() => handleCheckboxChange(item.id)}/>
                                <p className="text-xl text-white font-serif font-semibold capitalize">{item.item}</p>
                                <button type="button" className="px-10 py-2 bg-red-500 text-white font-semibodl rounded-sm hover:bg-red-700 transition-all duration-500" id={item.id}>Delete</button>
                            </li>
                        )) 
                        }            
                </ul>
                :
                <ul className="block mx-auto mt- bg-blue-300 w-full max-w-lg py-5 px-3 rounded-lg shadow-lg border-2 border-red-100 overflow-y-scroll max-h-[22rem]">
                    {
                    items.length>0 &&
                    items.map((item)=>(
                            <li onClick={handleList} key={item.id} className="bg-cyan-500 mb-2 px-4 py-3 flex items-center justify-between gap-2">
                                <input type="checkbox"  checked={item.checked} className="w-6 h-6 cursor-pointer" name="check"  onChange={() => handleCheckboxChange(item.id)}/>
                                <p className="text-xl text-white font-serif font-semibold capitalize">{item.item}</p>
                                <button type="button" className="px-10 py-2 bg-red-500 text-white font-semibodl rounded-sm hover:bg-red-700 transition-all duration-500" id={item.id}>Delete</button>
                            </li>
                        )) 
                        }            
                </ul>
                }
             </div>
            :
            <p className="text-6xl mb-5 opacity-20 capitalize z-[1]">No Items in List</p>
            }
            <div className="flex flex-col items-center mt-2">
                <p className="text-xl font-serif font-semibold uppercase">Add Item</p>
                <button onClick={handleActiveControl} className="bg-green-500 px-3 py-2 rounded text-white font-semibold cursor-pointer hover:bg-green-700"><AiOutlinePlus className="w-8 h-8"/></button>
            </div>
      </div>
    </main>
  )
}

export default Content