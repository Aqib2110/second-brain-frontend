import React, { useRef, useState } from 'react'
import { Button } from '../components/Button'
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
interface signupprops{
  username:string,
  password:string
}
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState<boolean>(false);
  const inputref1 = useRef<any>('');
  const inputref2 = useRef<any>('');
  const handleSignup = async()=>{
    setloading(true);
    const val1 = inputref1.current.value;
    const val2 = inputref2.current.value;
const signupobj:signupprops = {
  username:val1,
  password:val2
}
    const data = await fetch('http://localhost:3000/api/v1/signin',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(signupobj)
    });
    const response = await data.json();
    if(response.data)
    {
      setloading(false);
      localStorage.setItem('token',JSON.stringify(response.token));
      toast.success("signin successfully");
navigate('/');
    }
else{
  setloading(false);
  inputref1.current.value = "";
  inputref2.current.value = "";
  toast.error("invalid username or password");
}
  }
  return (
    <div className='bg-gray-600 flex flex-col justify-center items-center h-screen w-screen'>
      <h1 className='font-bold pb-3 text-white text-3xl'>Sign in</h1>
      <div className='bg-white rounded-md  justify-center  flex flex-col px-15 gap-4 w-1/3 h-2/4'>
     
   
      <label htmlFor="" className='flex flex-col gap-2 w-full justify-center  '> Username 
  <input type="text" ref={inputref1} placeholder='Enter username...' className='rounded-md w-full border px-2 py-2'/>
</label>
      

     
      <label htmlFor="" className='flex flex-col gap-2 w-full justify-center mb-4 '>Password 
  <input type="password" ref={inputref2} placeholder='Enter password...' className='rounded-md w-full border px-2 py-2'/>
</label>
      
  
    <Button size='md'  text={loading ? "signing in..." :"sign in"} disable={loading} variant='primary' onClick={handleSignup}/>
      </div>
    
 

    </div>
  )
}

export default Signup
