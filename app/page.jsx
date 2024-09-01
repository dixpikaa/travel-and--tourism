import { Container } from "@/components"
import { Hero, HolidayOffer, LatestNews, NewsLetter, PopularPackage, Testimonials, TopDestination, TourGuide, TravelGallary } from "@/sections/home"

const Home = () => {
  return (
    <main>
      <Hero />
      <PopularPackage />
      <TopDestination />
      <NewsLetter />
      <Container>
        <HolidayOffer />
        <TravelGallary />
      </Container>
      <Testimonials />
      <Container>
        <TourGuide />
        <LatestNews />
      </Container>
    </main>
  )
}

export default Home