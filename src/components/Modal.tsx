import React, { useRef,useState } from 'react'
import Croos from '../icons/Croos'
import toast from "react-hot-toast";
import { Button } from './Button';
interface modelInter {
    open: boolean,
    setOpen: (n:boolean) => void,
    text:string,
    ref:any

}

const Modal = (props:modelInter) => {
    const [loading, setloading] = useState<boolean>(false)
const inputref1 = useRef<any>('');
const inputref2 = useRef<any>('');
    const handleClick = async()=>{
        const token:any = localStorage.getItem('token');
        const parsetoken = JSON.parse(token);
        setloading(true);
const title = inputref1.current.value;
const link = inputref2.current.value;
        const inputobj = {
            title:title,
            link:link
        }
fetch('http://localhost:3000/api/v1/content',{
    method:"POST",
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${parsetoken}`,
    },
    body:JSON.stringify(inputobj)
}).then(res=>res.json()).then(data=>{
    if(data.message)
    {
        setloading(false);
props.setOpen(false);
toast.success("content added successfully");
    }
    else{
        setloading(false);
        props.setOpen(false); 
        toast.error("content post failed,Try again");   
    }
})
    }
   
        const handleCopy = () => {
            if (props.ref.current.value) {
                props.setOpen(false);
              navigator.clipboard.writeText(props.ref.current.value)
                .then(() => {
                  toast.success("Copied to clipboard!");
                })
                .catch(() => {
                    props.setOpen(false);
                  toast.error("Failed to copy!");
                });
            }
          }
  return (
    <div>
    
   {props.open && <div className='h-screen w-screen  flex justify-center items-center bg-black opacity-70 fixed top-0 left-0'>

<div className='md:w-1/3 w-3/4 h-2/4 opacity-100 flex flex-col justify-center items-center  z-50 rounded-md bg-white relative'>
<span className='absolute top-2 right-2 cursor-pointer' onClick={()=>{props.setOpen(false)}}>
<Croos size='md'/>
</span>
{
    props.text == "content" && <div className='w-3/4 h-4/5 flex text-black flex-col gap-6 pt-5 '>
    <input type="text" ref={inputref1} placeholder='Enter a title' required className='rounded-md text-black  w-full px-3 py-4 border-2 '/>
    <input type="text" ref={inputref2} placeholder='Enter a link' required className='rounded-md  w-full text-black px-3 py-4 border-2 '/>
    <Button size='md' variant='primary' text={loading ? "creating..." :"create"} onClick={handleClick} />
    </div>
}
{
    props.text == "share" && <div className='w-3/4 h-4/5 flex text-black flex-col gap-6 pt-5 '>
    <input type="text" ref={props.ref} className='rounded-md text-black w-full px-3 py-4 border-2' readOnly/>
  
    <Button size='md' variant='primary' text='copy' onClick={handleCopy} />
    </div>
}
</div>

     </div>
    }
    </div>
  )
}

export default Modal
