import {HiChevronDoubleRight} from 'react-icons/hi'

const Banner = ({title, bgImg}) => {
  return (
    <div className="relative">
      <img
        src={bgImg}
        alt="Pexels"
        width="100"
        height="100"
        className="object-cover w-full h-[400px]"
      />
      <div className="w-full h-full bg-black bg-opacity-40 hover:opacity-60 absolute top-0 left-0 flex items-center justify-center">
        <div>
          <h1 className="text-[30px] md:text-[60px] text-white font-extrabold">{title}</h1>
          <div className="flex items-center justify-center gap-4 text-xl text-white">
            Home <HiChevronDoubleRight className="text-orange-500"/> {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner