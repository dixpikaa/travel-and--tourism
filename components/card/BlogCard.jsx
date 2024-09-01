
import { BsPersonCircle } from "react-icons/bs"
import { AiOutlineCalendar } from "react-icons/ai"
import React from 'react'
const BlogCard = ({ id, img, category,authername,date,title }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden group">
      <div className="relative ">
        <img
          src={img}
          alt="palce image"
          className="object-cover  w-full h-[300px] hover:scale-x-110 transition duration-100 rounded-md"
        />
        <div className="text-white bg-orange-500 px-4 py-2 w-[max-content] absolute left-8 top-2  justify-start align-top   hover:bg-gray-500" >
          <span className=" hover:scale-110 duration-100  a"> {category}</span>
        </div>
      </div>
      <div className="flex flex-cols-2 text-sm gap-10 ">
        <div className="flex items-center px-10 gap-2" >
          <BsPersonCircle />
          <span>

           {authername}
          </span>
        </div>
        <div className=" py-5 flex items-center gap-2">
          <AiOutlineCalendar />
          <span>

          {date}
          </span>
        </div>

      </div>
      <div className=" font-semibold text-center mb-4">
        {title}
      </div>





    </div>
  )
}

export default BlogCard