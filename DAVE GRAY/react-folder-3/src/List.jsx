import React from 'react'
import ListItems from './ListItems'
const List = (props) => {
    const { items }=props
  return (
    <ul className="flex flex-col gap-5 px-5">
        {items.map((item)=>(
            <ListItems key={item.id} item={item}/>
        ))}
    </ul>
  )
}

export default List