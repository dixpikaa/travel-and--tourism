
const FeatureCard = ({icon, count, title}) => {
  return (
    <div className="border-2 border-orange-500 rounded-md flex items-center justify-center flex-col gap-4 px-8 py-4 hover:bg-opacity-50 backdrop-blur hover:bg-gray-100 hover:border-[0px]">
      <div className="text-[50px] text-orange-500">{icon}</div>
      <h1 className="text-3xl font-bold text-white">{count}+</h1>
      <h2 className="text-white">{title}</h2>
    </div>
  )
}

export default FeatureCard