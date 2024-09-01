import { Heading, ImageCard } from "@/components"
import { Packages } from "@/constant/data"

const TravelGallary = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-center">
        <Heading
          title="Travel Gallary"
          subtitle="Explore our captivating Travel Gallery filled with breathtaking images and discover your next destination through stunning visuals."
          pos
        />
      </div>
      {/* Image Gallary */}
      <div className="grid grid-cols-3 gap-2">
        {Packages.map(item=>(
          <ImageCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default TravelGallary