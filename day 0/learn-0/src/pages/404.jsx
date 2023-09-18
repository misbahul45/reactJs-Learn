import { useRouteError } from "react-router-dom";

const ErorPage=()=>{
    const error=useRouteError()
    return (
        <div className="flex justify-center items-center min-h-screen flex-col gap-5">
            <h1 className="text-7xl text-orange-500 font-bold">Opps!</h1>
            <p className="text-2xl text-white">Sorry, an Unexpected eror has occured</p>
            <p className="text-xl font-semibold text-red-900">
                {error.statusText||error.message}
            </p>
        </div>
    )
}

export default ErorPage