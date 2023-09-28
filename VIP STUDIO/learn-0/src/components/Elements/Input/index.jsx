import Label from "./Label"
import Input from "./input"
const InputForm=(props)=>{
    const { text, type, placeholder, name}=props
    return(
        <div className="mb-6">
          <Label text={text} htmlfor={name}/>           
          <Input type={type} placeholder={placeholder} name={name} id={name} />
        </div>
    )
}
export default InputForm;