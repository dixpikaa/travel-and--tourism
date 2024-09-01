'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {BsArrowRight} from 'react-icons/bs'


const PackageCardDemo = ({id, img, title, duration, price}) => {
  const router = useRouter()

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden group">
      <div className="relative">
        <Image
          src={img}
          alt="palce image"
          width="100"
          height="100"
          className="object-cover w-full h-[150px] hover:scale-110 transition duration-100"
        />
        <div className="bg-orange-500 px-4 py-2 w-[max-content] absolute left-12 -bottom-4">
          <span className="text-white">{duration}</span>
        </div>
      </div>

      <div className="px-4 py-2 mt-3 space-y-4">
        <h1 className="font-bold mt-1">{title}</h1>
        <div className="flex items-center gap-3">
          <button 
            className="border-[1px] border-orange-500 group-hover:bg-orange-500 group-hover:text-white px-2 py-1 rounded-md flex items-center justify-between gap-2"
            onClick={()=>router.push(`/package-details/${id}`)}  
          >
            <span>Book Now</span>
            <BsArrowRight size={16} />
          </button>
          <div>
            <div>Form</div>
            <div>
              <span className="font-bold text-orange-500">${price} </span>
              per person
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PackageCardDemo