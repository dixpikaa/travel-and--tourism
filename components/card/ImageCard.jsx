"use client"

import useImgPreviewModal from '@/hooks/useImgPreviewModal'
import ImgPreviewModal from '@/modals/ImgPreviewModal'
import { AiOutlineEye } from 'react-icons/ai'

const ImageCard = ({img, title }) => {
  const { onOpen, isOpen, onClose} = useImgPreviewModal()

  return (
    <div className="relative group">
      <img
        src={img}
        alt={title}
        className="object-cover rounded-md hover:shadow-md"
      />
      <div className="hidden group-hover:block absolute left-0 top-0 w-full h-full bg-opacity-60 bg-pink-300">
        <div className='w-full h-full flex items-center justify-center'>
          <AiOutlineEye
            onClick={()=>onOpen()}
            className="text-4xl text-orange-500 cursor-pointer"
          />
        </div>
      </div>
      {isOpen && <ImgPreviewModal img={img} onClick={()=>onClose()} />}
    </div>
  )
}

export default ImageCard