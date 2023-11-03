import { parseISO, formatDistanceToNow } from "date-fns";
import React from 'react'

const TimeAgo = ({ timestamp }) => {
    let timeAgo= ''
    if(timestamp){
        const data=parseISO(timestamp)
        const timePeriod=formatDistanceToNow(data)
        timeAgo=`${timePeriod} ago`
    }
  return (
    <span className="text-slate-50 text-sm opacity-70">
        &nbsp; <i>{timeAgo}</i>      
    </span>
  )
}

export default TimeAgo
