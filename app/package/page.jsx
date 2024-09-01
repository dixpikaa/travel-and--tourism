import { Banner, Container, PackageCard } from '@/components'
import { Packages } from '@/constant/data'

const Package = () => {
  return (
    <main>
      <Banner
        title="Tour Package"
        bgImg="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5lcGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
      />

      <Container>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-8'>
          {Packages.map(item => {
            return (
              <PackageCard
                key={item.id}
                {...item} />
            )
          })
          }
        </div>
      </Container>
    </main>
  )
}
export default Package