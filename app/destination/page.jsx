import { Banner, DestinationCard, Container } from '@/components'
import { DestinationItems } from '@/constant/data'
import React from 'react'

const Destination = () => {
  return (
    <main>
      <Banner
        title="Destination"
        bgImg="https://images.unsplash.com/photo-1571401835393-8c5f35328320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmVwYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
      />

      <Container>
        <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          {DestinationItems.map(item => {
            return (
              <DestinationCard
                key={item.id}
                {...item} 
              />
            )
          })
          }
        </div>
      </Container>
    </main>
  )
}

export default Destination