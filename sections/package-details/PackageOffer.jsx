import { PackageOfferCard } from '@/components'
import { Packages } from '@/constant/data'

const PackageOffer = () => {
  return (
    <section className=" shadow-md">
      <div className="bg-gray-800 py-2">
        <h1 className="text-center font-bold text-white">Offer Package</h1>
      </div>

      {/* Offer package list */}
      <div className=" bg-white flex items-start justify-start flex-col gap-2 w-full">
        {Packages.map(item=>(
          <PackageOfferCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default PackageOffer