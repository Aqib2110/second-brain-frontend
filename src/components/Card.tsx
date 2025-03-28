import Share from '../icons/Share'
import Delete from '../icons/Delete'
import toast from "react-hot-toast";
import Twitter from '../icons/Twitter'
import Youtube from '../icons/Youtube'
import Document from '../icons/Document'

interface CardProps{
  id:string,
  setdel:(n:boolean)=>void,
title:any,
Cardtype:"youtube" | "twitter" | "notes",
link:string
}
const Card = (props:CardProps) => {
 
  const token:any = localStorage.getItem('token');
  const parsetoken = JSON.parse(token);
  const handleDelete = (id:any)=>{
    props.setdel(false);
    const contentid = {
      _id:id
    }
fetch('https://second-brain-backend-zzh3.vercel.app/api/v1/content',{
  method:"DELETE",
  headers: {
    'Authorization': `Bearer ${parsetoken}`,
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(contentid)
}).then(res=>res.json()).then(data=>{
  if(data.message){
    props.setdel(true);
    toast.success(data.message);
  }
  else{
    toast.error("content deleted failed");
  }
})
  }
  return (
    <>
      {props.Cardtype == "notes" && (<div key={props.id} className='border border-gray-300 h-[400px] rounded-xl  w-[100%] sm:w-[250px] px-4'>
      <div className='h-[18%]  w-full flex justify-between items-center '>
      <div className='w-[70%]  flex gap-3 items-center '>
     <span className='text-[#AAABAF]'>
     {/* <Share size='md'/> */}
     <Document h={"25"} w={"25"}/>
      </span> 
      <p className='font-semibold  overflow-hidden text-lg'>{props.title}</p>
      </div>
<div className='flex justify-end gap-4 w-[20%] text-[#AAABAF]'>
  <span className='cursor-pointer'>
    {/* <a href={props.link} target='_blank'> */}
    <Share size='md'/>
    {/* </a> */}
  </span>
<span className='cursor-pointer' onClick={()=>{handleDelete(props.id)}}>
<Delete size='md'/>
</span>


</div>
      </div>
      <div>

<h1 className='font-bold pb-3 text-[23px]'>Future Projects</h1>
<div className='px-4 text-[#56565E]'>
<ol className='font-medium'>
  <li className='list-disc '>Build a Personal Knowledge Base</li>
  <li className='list-disc'>Create a Habit Tracker</li>
  <li className='list-disc'>Design a minimalist todo app</li>
</ol>
</div>
<div className='flex gap-2 mt-5 text-[#5046E4]'>
  <span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#productivity</span>
  <span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#ideas</span>
        </div>
      </div>
      </div>)}
      {
props.Cardtype == "youtube" && <div key={props.id} className='border border-gray-300 rounded-xl  w-[100%] sm:w-[250px] px-4'>
<div className='h-[100px]  w-full flex justify-between items-center '>
<div className='w-[70%] flex gap-3 items-center '>
<span className='text-[#AAABAF]'>               
 
     <Youtube h={"150"} w={"50"}/>
    
</span> 
<p className='font-semibold overflow-hidden text-lg'>{props.title}</p>
</div>
<div className='flex justify-end gap-4 w-[20%] text-[#AAABAF]'>
<span className='cursor-pointer'>
<Share size='md'/>
</span>
<span className='cursor-pointer'onClick={()=>{handleDelete(props.id)}}>
<Delete size='md'/>
</span>
</div>
</div>
<div>

<iframe
  className="w-full h-[300px] md:h-full"
  src={props.link?.replace('https://youtu.be/', 'https://youtube.com/embed/')}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>



<div className='flex gap-2 mt-5 text-[#5046E4]'>
<span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#productivity</span>
<span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#ideas</span>
</div>
</div>
<p className='text-[#AAABAF] mt-4'>Added on 10/12/2024</p>
</div>
      }
      {props.Cardtype == "twitter"  && 
<div key={props.id} className='border border-gray-300 rounded-xl  w-[100%] sm:w-[250px] px-4'>
<div className='h-[18%]  w-full flex justify-between items-center '>
<div className='w-[70%] flex gap-3 items-center '>
<span className='text-[#AAABAF]'>
<Twitter h={"25"} w={"25"}/>
</span> 
<p className='font-semibold  overflow-hidden text-lg'>{props.title}</p>
</div>
<div className='flex justify-end gap-4 w-[20%] text-[#AAABAF]'>
<span className='cursor-pointer'>
<Share size='md'/>
</span>
<span className='cursor-pointer' onClick={()=>{handleDelete(props.id)}}>
<Delete size='md'/>
</span>


</div>
</div>
<div >
<blockquote className="twitter-tweet">
<a href="https://twitter.com/WR4NYGov/status/1863498207864803634?s=19"></a>
</blockquote> 

<div className='flex gap-2 mt-5 text-[#5046E4]'>
<span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#productivity</span>
<span className='rounded-2xl px-2 py-1  bg-[#EDF2FE]'>#ideas</span>
</div>

</div>
<p className='text-[#AAABAF] mt-4'>Added on 10/12/2024</p>
</div>
}
    </>
  );

 

}

export default Card
