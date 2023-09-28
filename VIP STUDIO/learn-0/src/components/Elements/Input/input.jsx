const Input = (props)=>{
    const { type, placeholder,name }=props
    return(
        <input type={type} name={name} id={name} placeholder={placeholder} className="text-sm border rounded w-full py-2 px-3 text-slate-700 opacity-9 shadow-lg"/>
    )
}
export default Input;