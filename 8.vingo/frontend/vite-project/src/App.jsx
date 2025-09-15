import React from 'react'
import {Routes,Route} from "react-router-dom"

import Signup from './Pages/signup.jsx'
import SignIn from './Pages/signIn.jsx'

function  App(){
  return (
    <Routes>
  <Route path ='/Signup' element={<Signup/>}/>
  <Route path ='/Signin' element ={<SignIn/>}/>
</Routes>
  )

}
  


export default App
