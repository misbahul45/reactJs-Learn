import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";

const FormLogin=()=>{
    return(
        <form className="bg-orange-600 px-5 py-6 rounded-lg shadow-2xl">
            <InputForm text="Email" placeholder="exemple@gmail.com" type="email" name="email" />
            <InputForm text="Password" placeholder="password" type="password" name="password" />
            <Button classname="bg-blue-600 w-auto" content="Login" type="submit"/>
        </form>
    )
}
export default FormLogin