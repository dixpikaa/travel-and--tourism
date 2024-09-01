import { Banner, Container } from '@/components'
import { BlogList } from '@/sections/about-us'
import { Testimonials, TourGuide } from '@/sections/home'

const AboutUs = () => {
  return (
    <main>
      <Banner
        title="About Us"
        bgImg="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
        <Testimonials/>
      <Container>
        <TourGuide/>
        <BlogList/>
      </Container>
    </main>
  )
}

export default AboutUs