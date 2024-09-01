
const SwitchBtn = ({icon, label, onClick}) => {
  
  return (
    <button
      className="border-2 border-orange-500 rounded-3xl hover:bg-orange-500 flex items-center gap-2 text-orange-500 hover:text-white px-4 py-2"
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

export default SwitchBtn