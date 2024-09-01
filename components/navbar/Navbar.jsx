import React from 'react'
import Logo from './Logo'
import NavItems from './NavItems'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 bg-white py-4 sticky top-0 z-40">
      <Logo/>
      <NavItems/>
      <UserMenu/>
    </nav>
  )
}

export default Navbar