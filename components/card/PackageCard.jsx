 "use client"
import { useRouter } from 'next/navigation'

import React from 'react'
import { BsStopwatch } from 'react-icons/bs'

const PackageCard = ({ id, img, title, duration, price }) => {
  const router =useRouter()
  return (
    < div className='bg-white '>

      <div className='relative mb-4  '>
        <img
          src={img}
          alt=" place image "
          className='w-full rounded-md h-[200px] object-cover'
        />
        <div className='bg-orange-500 px-5 py-2 w-[max-content ] absolute -bottom-2 left-8 flex items-center gap-2 text-white'>
          <BsStopwatch />
          <span>
            {duration}
          </span>
        </div>
      </div>
      <div>
        <p className='px-4 py-2 font-bold'> {title}</p>
      </div>
      <div className=' flex px-4 pb-4'>
        <button className='border-2 border-red-500 px-2 py-1 rounded-md' 
          onClick={()=>router.push(`/package-details/${id}`)} 
        > Book now </button>
        <div>
          <div className='px-5'> From</div>
          <div >
            <span className='font-bold text-orange-500 px-5' >{price}</span>
            Per Person
          </div>
        </div>
      </div>
    </div>
  )
}
export default PackageCard