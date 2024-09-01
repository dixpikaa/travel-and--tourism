import useCategoryModal from '@/hooks/useCategoryModal'
import Link from 'next/link'
import React from 'react'

const CategoryItemCard = ({ id, title, icon }) => {
  const {onClose} = useCategoryModal()

  return (
    <Link
     href="/package"
     onClick={()=>onClose()}
    >
      <div className="group border-[1px] border-gray-400 rounded-md relative h-[100px] hover:bg-orange-500 cursor-pointer">
        <div className="text-[40px] text-orange-500 shadow-md rounded-full p-2 absolute right-0 left-0 mx-auto -top-8 w-[max-content] bg-white">{icon}</div>
        <div className="text-gray-500 group-hover:text-white mt-10 text-center">{title}</div>
      </div>
    </Link>
  )
}

export default CategoryItemCard