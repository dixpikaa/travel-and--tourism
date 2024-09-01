
const Card = ({icon, title, subtitle}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-orange-500 text-3xl">{icon}</div>
      <div>
        <h1 className=" font-semibold text-xl">{title}</h1>
        <h2 className="text-gray-400">{subtitle}</h2>
      </div>
    </div>
  )
}

export default Card