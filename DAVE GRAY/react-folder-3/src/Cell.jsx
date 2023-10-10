import React from 'react'

const Cell = ({ cellData }) => {
  return (
    <td className="border-2 border-slate-900 px-2">
      {cellData}
    </td>
  )
}

export default Cell