"use client"

import { AiOutlineClose } from "react-icons/ai"

const ImgPreviewModal = ({img, onClick}) => {

  return (
    <main className="fixed top-0 left-0 w-full h-[100vh] bg-black bg-opacity-20 flex items-center justify-center z-50">
      <div className="h-[80vh] w-[80vw] relative">
        <AiOutlineClose
          onClick={onClick}
          className="bg-red-500 p-2 rounded-full text-4xl cursor-pointer absolute -right-2 -top-2 hover:bg-white hover:text-red-500"
        />
        <img 
          src={img} 
          alt="Preview Image"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  )
}

export default ImgPreviewModal