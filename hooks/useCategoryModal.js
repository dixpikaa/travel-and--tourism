import { create } from 'zustand'

const useCategoryModal = create((set)=>({
  isOpen: false,
  onOpen: ()=>set({isOpen: true}),
  onClose: ()=>set({isOpen: false})
}))

export default useCategoryModal