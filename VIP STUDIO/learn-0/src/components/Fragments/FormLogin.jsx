import { login } from "../../services/auth.service";
import Button from "../Elements/Buttons";
import InputForm from "../Elements/input";
import { useState } from "react";

const FormLogin=()=>{
    const [loginFailed, setLoginFailed] =useState(false);
    const handleLogin=(e)=>{
        e.preventDefault();
        const data={
            username:e.target.userName.value,
            password:e.target.password.value}
        login(data, (status,Response)=>{
            if(status){
                localStorage.setItem("token",Response)
                window.location.href="/products"
            }else{
                console.log(Response.response.data)
                setLoginFailed(Response.response.data)
            }
        })
        e.target.userName.value=""
        e.target.password.value=""
    }
    return(
        <div>
                    <form onSubmit={handleLogin} className="bg-orange-600 px-5 py-6 rounded-lg shadow-2xl">
            <InputForm text="userName" placeholder="Misbahulmu756" type="text" name="userName" />
            <InputForm text="Password" placeholder="password" type="password" name="password" />
            <Button classname="bg-blue-600 w-auto" content="Login" type="submit"/>
        </form>
         {loginFailed && <p className="text-red-500 text-center">{loginFailed}</p>}
        </div>

    )
}
export default FormLogin