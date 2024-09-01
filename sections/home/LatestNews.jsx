import { Heading } from '@/components'
import BlogCard from '@/components/card/BlogCard'
import { BlogItems } from '@/constant/data'

const LatestNews = () => {
  return (
    <section className='mt-12'>
      <div className='flex items-center justify-center'>

        <Heading
          title="Latest News"
          subtitle="we have latest news about tourism"
          pos
        />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 '>
        {BlogItems.slice(0, 3).map(item => {
          return (
            <BlogCard
              key={item.id}
              {...item} />
          )
        })
        }
      </div>


    </section>
  )
}

export default LatestNews