"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      onClick={()=>router.push('/')}
      src="/img/logo.png"
      width="100"
      height="100"
      alt="Logo"
      className="cursor-pointer"
    />
  )
}

export default Logo