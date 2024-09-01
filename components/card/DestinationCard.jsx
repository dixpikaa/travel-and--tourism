'use client'
import Link from "next/link"

const DestinationCard = ({ id, img, place }) => {

  return (
    <Link href={`/destination-details/${id}`}>
      <div className="bg-white group" >
        <div className="group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
          <div>
            <img className="h-60 w-full object-cover rounded-md"
              src={img} alt=" Loading" />
          </div>
          <div className="absolute   group-hover:from-black/30 group-hover:via-black/25 group-hover:to-black/30"></div>
          <div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration- group-hover:translate-y-0">
            <h1 className="text-xl md:text-3xl font-bold text-white">{place}</h1>
            <button className=" rounded-full bg-orange-500 py-2 px-3.5  justify-end font-com text-sm capitalize text-white hidden group-hover:block ">See More Photos</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DestinationCard