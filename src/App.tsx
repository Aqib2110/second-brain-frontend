import React from 'react'
import { Toaster } from "react-hot-toast";
import './App.css'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
<Toaster position="bottom-center" reverseOrder={false} />

<BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard />}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/signin' element={<Signin/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App

