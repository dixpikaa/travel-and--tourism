"use client"

import { CategoryItemCard } from '@/components'
import { CategoryList } from '@/constant/data'
import useCategoryModal from '@/hooks/useCategoryModal'
import {AiOutlineClose} from 'react-icons/ai'

const CategoryModal = () => {
  const {isOpen, onClose} = useCategoryModal()

  return (
    <>{isOpen &&
    <main className="w-full h-[100vh] bg-black bg-opacity-50 fixed left-0 top-0 z-50">
      <div className="w-full md:w-1/3 bg-white h-full shadow-md px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-orange-500 text-2xl font-semibold">Category</h1>
          <AiOutlineClose
            onClick={()=>onClose()}
            className="hover:text-red-600 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          {CategoryList.map(item=>{
            return (
              <CategoryItemCard
                key={item.id}
                {...item}
              />
            )
          })}
        </div>
      </div>
    </main>}
    </>
  )
}

export default CategoryModal