"use client"

import { Navitems } from "@/constant/data"
import MenuItem from '../components/navbar/MenuItem'
import useMobileViewModal from "@/hooks/useMobileViewModal"
import { AiOutlineClose } from "react-icons/ai"


const MobileViewMenuModal = () => {
  const { isOpen, onClose } = useMobileViewModal()

  return (
    <>
      {isOpen && <section className="z-50 fixed top-0 right-0 w-2/3 h-full bg-gray-800 transition duration-700">

        <div className="pl-4 py-4 w-8 h-8 rounded-full text-red-500 flex items-center justify-center">
          <AiOutlineClose
            onClick={()=>onClose()}
            className="text-2xl"
          />
        </div>
        <div className="pl-8 text-white space-x-4">
          {Navitems.map(({ label, link }) => {
            return (
              <MenuItem
                key={link}
                label={label}
                link={link}
                onClick={()=>onClose()}
              />
            )
          })}
        </div>
      </section>}
    </>
  )
}

export default MobileViewMenuModal