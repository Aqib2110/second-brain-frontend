import Twitter from '../icons/Twitter'
import Youtube from '../icons/Youtube'
import Document from '../icons/Document'
import Croos from '../icons/Croos'
const Sidebar = (props:any) => {
  const handlecross = ()=>{
props.setnav(false);
  }
  return (
    <div className=''>
      <div className='md:px-3 px-5 flex gap-2 py-10 md:py-3 justify-between relative md:justify-start items-center'>
        <img src="brain.svg" alt="" className='h-[40px] font-bold cursor-pointer'/>
      <h1 className='font-bold text-2xl '>Second Brain</h1>
    <span className='absolute md:relative md:hidden top-1 right-1 md:top-0 md:right-0'>
    <Croos size='lg' onclick={handlecross}/>
      </span>  
      </div>
<div className='px-6 mt-0 md:mt-6 text-[#56565E]'>
<div className='items-center my-10 md:my-5 flex cursor-pointer  gap-2'>
  <Twitter h={"25"} w={"25"}/>
  <h2 className='font-semibold'>Tweets</h2>
</div>
<div className='items-centermy-10 md:my-5 flex  cursor-pointer gap-2'>
<Youtube h={"25"} w={"25"}/>
  <h2 className='font-semibold'>Videos</h2>
</div>
<div className='items-center my-10 md:my-5 flex   gap-2'>
  <Document h={"25"} w={"25"}/>
  <h2 className='font-semibold'>Documents</h2>
</div>
<div className='items-center my-10 md:my-5 flex   gap-2'>
  <img src="link.svg" alt="" className='h-[25px]'/>
  <h2 className='font-semibold'>Links</h2>
</div>
<div className='items-center my-10 md:my-5 flex   gap-2'>
<img src="tag.svg" alt="" className='h-[25px]'/>
  <h2 className='font-semibold'>Tags</h2>
</div>
</div>
    </div>
  )
}

export default Sidebar
