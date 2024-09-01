"use client"

import { SwitchBtn } from '@/components'
import {BsWindowDock, BsImages, BsInfoCircle} from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { useState } from 'react'
import Information from './Information'
import TravelPlan from './TravelPlan'
import TourGallary from './TourGallary'
import Location from './Location'

const TabSection = [<Information/>, <TravelPlan/>,<TourGallary/>, <Location/>]

const PackageDesc = () => {
  const [id, setId] = useState(0)

  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <SwitchBtn
          label="Information"
          icon={<BsInfoCircle/>}
          onClick={()=>setId(0)}
        />
        <SwitchBtn
          label="Travel Plan"
          icon={<BsWindowDock/>}
          onClick={()=>setId(1)}
        />
        <SwitchBtn
          label="Tour Gallary"
          icon={<BsImages/>}
          onClick={()=>setId(2)}
        />
        <SwitchBtn
          label="Location"
          icon={<CiLocationOn/>}
          onClick={()=>setId(3)}
        />
      </div>

    {TabSection[id]}
      
    </section>
  )
}

export default PackageDesc