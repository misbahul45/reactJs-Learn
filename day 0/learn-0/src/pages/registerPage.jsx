import AuthLayouts from "../components/Layouts/AuthLayouts"
import { Link } from "react-router-dom";
const RegisterPage=()=>{
    return(
            <div className="flex justify-center items-center min-h-screen flex-col gap-3">
                <AuthLayouts title="register" />
                <p className="text-slate-700 text-xl drop-shadow-lg shadow-black">
                Have an account? <Link to="/login" className="text-blue-500 font-bold text-2xl">Login</Link>
                </p>
            </div>
    )
}

export default RegisterPage;