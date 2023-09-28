import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";

const FormLogin=()=>{
    const handleLogin=(event)=>{
        event.preventDefault();
        const user={
            email:event.target.email.value,
            password:event.target.password.value
        }
        const arrayUser=JSON.parse(localStorage.getItem("arrayUser"));
        arrayUser.find((element)=>{
          if(element.email===user.email && element.password===user.password){
            window.location.href="/products"
          }else{
            alert("Email atau Password Salah")
          }  
        })
        event.target.email.value="";
        event.target.password.value="";
    }
    return(
        <form onSubmit={handleLogin} className="bg-orange-600 px-5 py-6 rounded-lg shadow-2xl">
            <InputForm text="Email" placeholder="exemple@gmail.com" type="email" name="email" />
            <InputForm text="Password" placeholder="password" type="password" name="password" />
            <Button classname="bg-blue-600 w-auto" content="Login" type="submit"/>
        </form>
    )
}
export default FormLogin