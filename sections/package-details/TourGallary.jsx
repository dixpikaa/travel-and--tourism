import { ImageCard } from "@/components"
import { Packages } from "@/constant/data"

const TourGallary = () => {
  return (
    <div>
      {/* Image Gallary */}
      <div className="grid grid-cols-3 gap-2">
        {Packages.map(item=>(
          <ImageCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default TourGallary