const { create } = require("zustand");


const useMobileViewModal = create((set)=>({
  isOpen:false,
  onOpen: ()=>set({isOpen:true}),
  onClose: ()=>set({isOpen:false}),
}))

export default useMobileViewModal