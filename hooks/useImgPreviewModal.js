const { create } = require("zustand");

const useImgPreviewModal = create((set)=>({
  isOpen: false,
  onOpen: ()=>set({isOpen: true}),
  onClose: ()=>set({isOpen: false}),
}))

export default useImgPreviewModal