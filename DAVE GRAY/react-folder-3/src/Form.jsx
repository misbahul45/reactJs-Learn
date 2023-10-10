import React from 'react'
import Buttons from './Buttons'
const Form = (props) => {
    const { reqType, setreqtype }=props
  return (
    <form 
    className="w-full flex justify-between transition-all duration-500"
    onSubmit={(e)=>e.preventDefault()}>
        <Buttons
            buttonText="users"
            reqType={reqType}
            setreqtype={setreqtype}
        />
        <Buttons
            buttonText="posts"
            reqType={reqType}
            setreqtype={setreqtype}
        />
        <Buttons
            buttonText="comments"
            reqType={reqType}
            setreqtype={setreqtype}
        />
    </form>
  )
}

export default Form