import React from 'react'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'
import Signin from '../pages/Signin/Signin'
import Signup from '../pages/Signup/Signup'
import Dashboard from '../Components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes >

        <Route exact path={"/"} element={<AuthRoute><Signin/></AuthRoute>}/>
        <Route path={"/signup"} element={<AuthRoute><Signup/></AuthRoute>}/>
        <Route path={"/Dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Router
