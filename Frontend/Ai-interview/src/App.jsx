import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import DashBoard from './pages/Home/DashBoard'
import Interviewprep from './pages/interviewprep/interviewprep'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/interview-prep/:sessionId' element={<Interviewprep/>}/>

      </Routes>
      
      </BrowserRouter>
      <Toaster
      toastOptions={{
        className:"",
        style:{
          fontSize:"13px"

        }
      }}
      />
    

    </div>
  )
}

export default App