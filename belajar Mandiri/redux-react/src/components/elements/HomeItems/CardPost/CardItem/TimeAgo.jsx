
import { parseISO,formatDistanceToNow } from 'date-fns'
const TimeAgo = ({timestamp}) => {
    let time=''
    if(timestamp){
        const data=parseISO(timestamp)
        const timePeriod=formatDistanceToNow(data)
        time=`${timePeriod} ago`
    }
    return (
        <p className="text-gray-500 mb-2 text-sm italic">{time}</p>
    )
}

export default TimeAgo