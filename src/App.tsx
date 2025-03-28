import { Toaster } from "react-hot-toast";
import './App.css'
import Dashboard from './pages/Dashboard'
import Seeboard from "./pages/Seeboard";
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div>
<Toaster position="bottom-center" reverseOrder={false} />

<BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/signin' element={<Signin />} />
  <Route path='/brain/share/:shareLink' element={<Seeboard />} />
  <Route path='*' element={<div>404 Not Found</div>} />
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App

