import { DestinationCard, Heading } from "@/components"
import { DestinationItems } from "@/constant/data"

const TopDestination = () => {
  return (
    <section className="mb-8 px-4 md:px-0">
      <div className="md:ml-20">
        <Heading
          title="Explore Top Destination"
          subtitle="Embark on a journey of discovery as you explore the most captivating and sought-after destinations, unveiling their wonders and enchantment."
        />
      </div>

      {/* Top destination card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-2">
        {DestinationItems.slice(3,7).map(item=>(
          <DestinationCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default TopDestination