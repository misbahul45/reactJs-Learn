import React from 'react'
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
function Section({ title, description,rightBtn, leftBtn, bgImage, dataAosBtn, dataAosText, dataAosDurationBtn, dataAosDurationText}) {
  useEffect(() => {
    AOS.init();  
  },[])
  return (
    <section className={`h-screen w-full ${bgImage} bg-center bg-no-repeat bg-cover flex flex-col justify-between`} >
        <div className="pt-[15vh] text-center w-full" data-aos={dataAosText} data-aos-duration={dataAosDurationText}>
            <h1 className="font-bold font-Gabarito text-2xl sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-lg font-PlayfairDisplay">{description}</p>
        </div>
      <div div className="flex flex-col items-center" data-aos={dataAosBtn} data-aos-duration={dataAosDurationBtn}  data-aos-anchor-placement="top-bottom">    
          <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex justify-center items-center rounded-full bg-slate-950 h-11 w-[256px] text-white font-semibold font-Gabarito uppercase opacity-[0.85] hover:opacity-100 hover:shadow-xl">{leftBtn}</button>
              {rightBtn? <button className="flex justify-center items-center rounded-full bg-slate-400 h-11 w-[256px] font-Roboto text-black  uppercase font-bold opacity-[0.85] hover:opacity-100 hover:shadow-xl">{rightBtn}</button>:"" }
          </div>
           <div className="animate-animateDown mb-2">
                <img src="../../public/img/down-arrow.svg" alt="" className="h-10 mt-5 cursor-pointer" />
           </div>
      </div>
    </section>
  )
}

export default  Section