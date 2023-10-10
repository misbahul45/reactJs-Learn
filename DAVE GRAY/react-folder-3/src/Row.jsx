import React from 'react'
import Cell from './Cell'

const Row = ({ item }) => {
  return (
    <tr>
        {Object.entries(item).map(([key,value])=>(
            <Cell key={key} cellData={JSON.stringify(value)}/>
        ))}
    </tr>
  )
}

export default Row