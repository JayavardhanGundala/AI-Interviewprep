import React, { useState } from 'react'
import {App_Features} from "./../utils/data.js"
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate=useNavigate()
    const [openAuthModel,setOpenAuthModel]=useState(false)
    const [currentPage,setCurrentPage]=useState("login")
    const handleCTA=()=>{}
  return (
    <div className='w-full max-h-full bg-[#FFFCEF]'>
        <div className='w-125 h-125 bg-amber-200/20 blur-[65px] absolute top-0 left-0'/>
        <div className='container mx-auto px-4 pt-6 pb-50 relative z-10'>
            {/*Header*/}
            <header className='flex justify-between items-center mb-16'>
                <div className='text-xl text-black font-bold' >
                    Interview Prep-Ai
                </div>
                <button className='bg-linear-to-r  from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white  px-7  py-2.5 rounded-full hover:bg-black hover:text-white boder border-white transistion-colors cursor-pointer '
                 onClick={()=>setOpenAuthModel(true)}>
                    Login/signUp

                </button>
            </header>
            {/*Hero Content*/}
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            AI-Powered

                        </div>

                    </div>
                    <h1 className=''>
                        Ace Interview With <br/>
                        <span className=''>Ai-powered</span>
                        {" "} Learning
                    </h1>

                </div>
                <div className=''>
                    <p className=''>
                        Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way. From preparation to mastery your ultimate interview toolkit is here. 
                    </p>
                    <button className='' onClick={handleCTA}>
                        Get Startred

                    </button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default LandingPage