import { Container, Heading } from "@/components"
import TetstimonalsCard from "@/components/card/TetstimonalsCard"
import {TestimonalsItems} from '@/constant/data'


const Testimonials = () => {
  return (
    <section className="bg-[#162B32] pb-12">
      <div className="px-8 py-4 pt-12 text-white ">
        <Heading
          title="What Our Client Say About Us"
          subtitle="Our clients rave about our exceptional service, professionalism, reliability, and attention to detail. See what they have to say!"
        />
      </div>
     <Container>

      <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4 mb-12">
      {/* Customer Feedback List */}
      {TestimonalsItems?.map(item => {
        return (
          <TetstimonalsCard
            key={item.id}
            {...item}
          />
        )
        }
            )
      }
      </div>
     </Container>
    </section>
  )
}

export default Testimonials