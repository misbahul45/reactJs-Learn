const Label=(props)=>{
    const{text , name}=props
    return(
        <label className="block text-white text-sm font-bold mb-3 " htmlFor={name}>
        {text}
      </label>
    )
}
export default Label;