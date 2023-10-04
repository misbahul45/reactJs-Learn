import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";

const FormRegister=()=>{
    return(
        <form className="bg-orange-600 px-5 py-6 rounded-lg shadow-2xl">
            <InputForm text="UserName" placeholder="Enter Your Name" type="text" name="text"/>
            <InputForm text="Email" placeholder="exemple@gmail.com" type="email" name="email"/>
            <InputForm text="Password" placeholder="password" type="password" name="password"/>
            <Button classname="bg-blue-600 w-auto shadow-lg hover:bg-blue-800" content="Register" type="submit"/>
        </form>
    )
}
export default FormRegister;