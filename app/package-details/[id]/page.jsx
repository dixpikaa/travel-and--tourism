import { Banner, Container, QuickInfoCard } from '@/components'
import { PackageQuickInfo } from '@/constant/data'
import { BookNowForm, PackageDesc, PackageOffer, PackageTag } from '@/sections/package-details'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'


const PackageDetails = () => {
  return (
    <main>
      <Banner
        title="Package Details"
        bgImg="https://images.unsplash.com/photo-1584884255471-e92d057f10ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <Container>
        <div className="flex gap-4">
          <div className="flex-auto w-60 space-y-6">
            {/* Quick Information of package 
            <div className="grid grid-cols-4 gap-4">
              {/* {PackageQuickInfo?.map(item => {
                return (
                  <Card
                    key={item.id}
                    {...item}
                  />
                )
              })} 
            </div>
              */}

             {/*Package main image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1584884789751-68dd2836ada1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="main image"
                className="rounded-md object-cover w-full h-[400px]"
              />
              <div className=" text-2xl text-orange-500 flex items-center justify-between mt-2 font-semibold">
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span>Pokhar, Nepal</span>
                </div>

                {/* Rating Star */}
                <div className="flex items-center gap-1">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
              <h1 className="text-4xl font-extrabold mt-2">Machhapuchhre Base Camp</h1>
            </div>
            <hr />

            {/* Package Details */}
            <div>
              <PackageDesc/>
            </div>
          </div>


          {/* Right site */}
          <div className="flex-none flex-40 space-y-8 sticky top-10">
            <BookNowForm />
            <PackageOffer />
            <PackageTag />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default PackageDetails 