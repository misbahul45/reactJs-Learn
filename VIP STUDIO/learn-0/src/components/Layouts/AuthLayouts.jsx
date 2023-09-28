import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
const AuthLayouts=(props)=>{
    const { title }=props
    return(
            <div className="w-full max-w-xs">
                <h1 className="mb-2 text-blue-500 font-bold text-3xl">{title}</h1>
                <p className="font-medium text-slate-500 mb-3">
                Welcome, Please enter your details
                </p>
                {title==="Login"?<FormLogin /> : <FormRegister />}
            </div>
    )
}
export default AuthLayouts;