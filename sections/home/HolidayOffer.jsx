import { Button, Heading, PackageCardDemo } from "@/components"
import { Packages } from "@/constant/data"

const HolidayOffer = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <Heading
          title="Choose Holiday Offer"
          subtitle="Explore and select from a variety of enticing holiday offers for your perfect getaway and memorable vacation."
          pos
        />
      </div>
      {/* holiday offers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Packages.slice(4,7).map(item=>{
          return(
            <div key={item.id}>
              <PackageCardDemo {...item}/>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button
          label="Load More Offers"
          link="/load-more"
        />
      </div>
    </section>
  )
}

export default HolidayOffer