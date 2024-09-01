import Link from "next/link"

const IconBtn = ({icon, link}) => {
  return (
    <Link href={link}>
      <button className="text-2xl cursor-pointer hover:text-orange-500 hover:border hover:border-orange-600 bg-orange-600 hover:bg-gray-800 text-white  rounded-full p-2" >
        {icon}
      </button>
    </Link>
  )
}

export default IconBtn