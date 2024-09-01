"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';

const MenuItem = ({ label, link, onClick }) => {
  const pathname = usePathname();

  const isActive = (path) => {
    return path === pathname;
  }

  return (
    <Link href={link}>
      <div className={isActive(link) ? 'text-orange-500' : ''}  onClick={onClick}>
        {label}
      </div>
    </Link>
  )
}

export default MenuItem