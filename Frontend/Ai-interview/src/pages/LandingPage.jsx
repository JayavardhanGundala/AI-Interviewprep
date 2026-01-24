import React, { useState } from 'react'
import {App_Features} from "./../utils/data.js"
import { useNavigate } from 'react-router-dom'
import {LuSparkles} from "react-icons/lu"

const LandingPage = () => {
    const navigate=useNavigate()
    const [openAuthModel,setOpenAuthModel]=useState(false)
    const [currentPage,setCurrentPage]=useState("login")
    const handleCTA=()=>{}
  return (
    <>
    <div className='w-full max-h-full bg-[#FFFCEF] pb-6'>
        <div className='w-125 h-125 bg-amber-200/20 blur-[65px] absolute top-0 left-0'/>
        <div className='container mx-auto px-4 pt-6 pb-50 relative z-10'>
            {/*Header*/}
            <header className='flex justify-between items-center mb-16'>
                <div className='text-xl text-black font-bold' >
                    Interview Prep-Ai
                </div>
                <button className='bg-linear-to-r  from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white  px-7  py-2.5 rounded-full hover:bg-black hover:text-white border border-white transistion-colors cursor-pointer '
                 onClick={()=>setOpenAuthModel(true)}>
                    Login/signUp

                </button>
            </header>
            {/*Hero Content*/}
            <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
                    <div className='flex items-center justify-left mb-2'>
                        <div className='flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300 '>
                           <LuSparkles/> AI-Powered

                        </div>

                    </div>
                    <h1 className='text-5xl text-black font-medium mb-6  leading-tight'>
                        Ace Interview With <br/>
                        <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold'>Ai-powered</span>
                        {" "} Learning
                    </h1>

                </div>
                <div className='w-full md:w-1/2'>
                    <p className='text-[17px] text-gray-800 mr-0 md:mr-20 mb-6 font-semibold'>
                        Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery your ultimate interview toolkit is here. 
                    </p>
                    <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors  cursor-pointer' 
                    onClick={handleCTA}>
                        Get Startred

                    </button>

                </div>

            </div>

        </div>

    </div>
    <div className='w-[50%] container mx-auto  relative z-10 mb-56 text-right '  >
        <div>
            <section className='flex items-center justify-center -mt-36'>
                <img src={"https://jobwinner.ai/wp-content/uploads/assets_task_01k2nd56e7e479zb5xy3s2nvtz_1755212653_img_1.png"} alt="image" className='w-[800vw] rounder-lg rounded-2xl' />
            </section>
        </div>

    </div>
    </>
  )
}

export default LandingPage