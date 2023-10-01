import React from 'react'

function Section({ title, description,rightBtn, leftBtn, bgImage}) {
  return (
    <section className={`h-screen w-full ${bgImage} bg-center bg-no-repeat bg-cover flex flex-col justify-between`} >
        <div className="pt-[15vh] text-center">
            <h1 className="text-6xl font-bold font-Gabarito">{title}</h1>
            <p className="text-lg font-PlayfairDisplay">{description}</p>
        </div>
      <div className="flex flex-col items-center">
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