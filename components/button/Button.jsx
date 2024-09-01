'use client'

import { useRouter } from 'next/navigation'

const Button = ({label, link, border=false}) => {
  const router = useRouter()

  return (
    <div
      onClick={()=>router.push(link)}
      className={`${border ? 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white': 'bg-orange-500'} rounded-md px-4 py-2 cursor-pointer font-bold`}
    >
      {label}
    </div>
  )
}

export default Button