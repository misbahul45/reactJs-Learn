import React from 'react'
import Row from './Row'
const Table = (props) => {
    const {items}=props
  return (
   <div className="px-5 py-2">
        <table className="border-collapse border border-slate-500">
            <tbody>
                {items.map((item)=>(
                    <Row key={item.id} item={item}/>
                ))}
            </tbody>
        </table>
   </div>
  )
}

export default Table