import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaQuoteLeft } from "react-icons/fa"


const TetstimonalsCard = ({ id, image, text, name }) => {
  return (
    <div className="  bg-white  hover:bg-gray-400 px-8 py-5 group">
      <div className=" justify-middle items-center ml-36  relative">
        <img src={image}
          alt=" Loading"
          className=" h-[100px] w-[100px] rounded-full absolute -top-8 object-cover"
        />
      </div>
      <div className=" ml-12 flex flex-cols-2 text-5xl gap-48 text-gray-200 py-10">
        <span>
          <FaQuoteLeft />
        </span>
        <span> {id}</span>
      </div>
      <div className="text-center text-gray-300 group-hover:text-white">
        <p> {text}</p>
      </div>
      <div className="flex flex-cols-2 gap-24 mt-8">
        <span>
          <h1 className=" text-1xl font-bold group-hover:text-orange-500">{name}</h1>
          <h1 className="text-gray-200"> Traveller</h1>
        </span>
        {/* Rating Star */}
        <div className="flex items-center gap-1 text-orange-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
    </div>
  )
}

export default TetstimonalsCard