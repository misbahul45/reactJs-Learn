import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";

const FormRegister=()=>{
    const arrayUser=[];
    const handleRegister=(event)=>{
        event.preventDefault();
        arrayUser.push({
            userName:event.target.text.value,
            email:event.target.email.value,
            password:event.target.password.value,
        })
        localStorage.setItem("arrayUser",JSON.stringify(arrayUser));
        event.target.email.value="";
        event.target.password.value="";
        event.target.text.value="";
        window.location.href="/products"
    }
    return(
        <form onSubmit={handleRegister} className="bg-orange-600 px-5 py-6 rounded-lg shadow-2xl">
            <InputForm text="UserName" placeholder="Enter Your Name" type="text" name="text"/>
            <InputForm text="Email" placeholder="exemple@gmail.com" type="email" name="email"/>
            <InputForm text="Password" placeholder="password" type="password" name="password"/>
            <Button classname="bg-blue-600 w-auto shadow-lg hover:bg-blue-800" content="Register" type="submit"/>
        </form>
    )
}
export default FormRegister;