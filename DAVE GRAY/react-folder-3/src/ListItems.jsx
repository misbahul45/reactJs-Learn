import React from 'react'

const ListItems = (props) => {
    const { item }=props
    console.log("item",item)
  return (
   <li>
    {JSON.stringify(item)}
   </li>
  )
}

export default ListItems