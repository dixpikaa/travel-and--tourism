import { BlogCard } from "@/components"
import { BlogItems } from "@/constant/data"

const BlogList = () => {
  return (
    <section>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Latest Blog</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {BlogItems.slice(1,4).map(item=>(
          <BlogCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogList