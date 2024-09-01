"use client"

import { Navitems } from '@/constant/data'
import MenuItem from './MenuItem'

const NavItems = () => {

  return (
    <div className=" hidden md:block">
      <div className="flex items-center gap-4 font-semibold">
        {Navitems.map(({ label, link }) => {
          return (
            <MenuItem
              key={link}
              label={label}
              link={link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NavItems