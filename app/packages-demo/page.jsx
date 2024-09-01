import { PackageCardDemo } from '@/components'
import { Packages } from '@/constant/data'

const PackgaeDemo = () => {
  return (
    <div className="px-8 py-4">
      <div className="grid grid-cols-4 gap-8">
        {Packages.map(item=>{
          return(
            <PackageCardDemo 
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PackgaeDemo