import { Banner } from '@/components'
import { TourItems } from '@/constant/data'
import { TourGuide } from '@/sections/home'
import { Container } from '@/components'
import BlogCard from '@/components/card/BlogCard'
import { BlogItems } from '@/constant/data'

const Blog = () => {
  return (
    <main>
      <Banner
        title="Blog"
        bgImg="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
      />
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
          {BlogItems.map(item => {
            return (
              <BlogCard
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

export default Blog