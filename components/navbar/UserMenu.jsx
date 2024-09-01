"use client"

import MenuIcon from './MenuIcon'
import {BiUserCircle, BiSearchAlt, BiCategory} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import useCategoryModal from '@/hooks/useCategoryModal'
import useMobileViewModal from '@/hooks/useMobileViewModal'

const UserMenu = () => {
  const router = useRouter()
  const categoryModal = useCategoryModal()
  const mobileViewModal = useMobileViewModal()

  return (
    <div className="flex items-center gap-2">
      <MenuIcon
        onClick={()=>categoryModal.onOpen()}
        icon={<BiCategory/>}
      />
      <MenuIcon
        onClick={()=>{}}
        icon={<BiSearchAlt/>}
      />
      {/* <MenuIcon
        onClick={()=>router.push('/user/101')}
        icon={<BiUserCircle/>}
      /> */}
      <div className="block md:hidden hover:text-orange-500 text-2xl">
        <GiHamburgerMenu onClick={()=>mobileViewModal.onOpen()} />
      </div>
    </div>
  )
}

export default UserMenu