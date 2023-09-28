import AuthLayouts from "../components/Layouts/AuthLayouts"
import { Link } from "react-router-dom"
const LoginPage=()=>{
    return(
        <div className="flex justify-center items-center min-h-screen flex-col gap-5">
            <AuthLayouts title="Login" />
            <p className="text-slate-700 text-xl drop-shadow-lg shadow-black">
            Don't have an account? <Link to="/register" className="text-blue-500 font-bold text-2xl">Sign Up</Link>
            </p>
        </div>
        )
}

export default LoginPage