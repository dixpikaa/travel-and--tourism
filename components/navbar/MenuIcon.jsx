const MenuIcon = ({icon, onClick}) => {

  return (
    <div
      onClick={onClick}
      className="text-[24px] bg-white rounded-full p-2 shadow-xl hover:bg-orange-500 text-orange-500 hover:text-white cursor-pointer"
    >
      {icon}
    </div>
  )
}

export default MenuIcon