import Link from "next/link"

const PackageOfferCard = ({ id, title, img, price }) => {
  return (
    <Link href={`/package-details/${id}`}>
      <div className="flex items-center gap-2 group">
        <img
         src={img} 
         alt="" 
         className="h-20"
        />
        <div>
          <h1 className="font-bold group-hover:text-blue-500">{title}</h1>
          <span className="text-sm text-gray-400">From</span>
          <div>
            <span className="text-orange-500 font-bold">{price} </span>
            Per Person
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PackageOfferCard