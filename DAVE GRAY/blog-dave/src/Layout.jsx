import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({search,setSearch,navName,setNavName,width}) {
    return (
        <div className="flex flex-col h-screen max-h-screen justify-between items-center w-full max-w-xl mx-auto">
            <Header search={search} setSearch={setSearch} navName={navName} setNavName={setNavName} width={width} />
             <Outlet/>
            <Footer/>
        </div>
    )
}