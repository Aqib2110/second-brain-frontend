import { useState,useEffect, useRef } from 'react'
import Modal from '../components/Modal';
import ShowCard from '../components/ShowCard';
import { Button } from '../components/Button';
import Sidebar from '../components/Sidebar';
import Share from '../icons/Share';
import PlusIcons from '../icons/PlusIcons';
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { useParams } from 'react-router-dom';
function Seeboard() {
  const {shareLink} = useParams();
  const [data, setdata] = useState<{ _id: string; title: string;link:string }[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [nav, setnav] = useState<boolean>(false);
const inputref3 = useRef<any>('');
const getCardType = (link: string) => {
  if (link?.includes("https://youtu.be")) return "youtube";
  if (link?.includes("https://X")) return "twitter";
  if (link?.includes("https://x")) return "twitter"; 
  if (link?.includes("https://twitter")) return "twitter";
  return "notes";
};
function fetchData()
{
    fetch(`http://localhost:3000/api/v1/brain/:${shareLink}`,{
      headers: {
        // 'Authorization': `Bearer ${parsetoken}`,
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json()).then(data=>{
      if(data.data){
        setdata(data.data);
      }
     
      console.log(data);
    }).catch(error=>{
      console.log(error);
    });
  
}

useEffect((): void => {
fetchData();
  }, []);
  

const handleClick = (): void => {
  toast.success("sorry, You don't have access ");
}
const handleShare = ()=>{
  toast.success("sorry, You don't have access ");
}
const handlenav = ()=>{
  setnav(true);
}
  return (
    <div className='flex  justify-between h-[100%]'>

<div className='bg-[#FFFFFF] hidden md:block  h-[100vh] w-1/5 border border-gray-300'>
  <Sidebar />
</div>
<div className='bg-[#FFFFFF] block md:hidden sm:w-2/5 z-10 h-[100vh] fixed top-0 left-0 w-[350px]  border border-gray-300'
style={{
  display:`${nav ? "block" : "none"}`
}}
>
  <Sidebar setnav={setnav}/>
</div>
<div className='flex flex-col h-[100vh] w-[100%] md:w-4/5  md:overflow-scroll pb-5 bg-[#F9FBFC] '>
<div className=' md:h-[15%] h-[100px] md:py-4 py-0 flex  justify-between items-center  md:px-8 px-4'>
  <h1 className='font-bold text-2xl  hidden md:block'>All Notes</h1>
 <GiHamburgerMenu className='text-6xl block md:hidden'  onClick={handlenav}/>
  <div className='flex gap-0  '>
    <div className=' flex-row  hidden  md:flex gap-3'>
    
      <Button variant={"secondary"}  size={"md"} startIcon={<Share size={"md"}/>}  text={"Share Brain"}  onClick={handleShare}/>
     

 <Button variant={"primary"} size={"md"} startIcon={<PlusIcons size='md'/>} text={"Add Content"}  onClick={handleClick}/>


</div>
<div className='flex  flex-col md:hidden  gap-2'> 
<Button variant={"secondary"}  size={"sm"} startIcon={<Share size={"md"}/>}  text={"Share Brain"}  onClick={handleShare}/>
<Button variant={"primary"} size={"sm"} startIcon={<PlusIcons size='md'/>} text={"Add Content"}  onClick={handleClick}/>
</div>
    </div>
</div>
<div  className=' flex  w-[100%] pt-5 md:pt-2 flex-wrap gap-5 px-4 md:px-9'>
<h1 className='font-bold text-2xl w-full block md:hidden'>All Notes</h1>
{ data?.length == 0 ? <div className='w-full flex justify-center'><p>No Data Found</p></div> : data?.map(({_id,title,link}) => {
  return <ShowCard id={_id}  title={title} Cardtype={getCardType(link)} link={link} />
})}
</div>
</div>
  <Modal open={open} ref={inputref3} setOpen={setOpen}/>
</div>
   
  )
}

export default Seeboard
