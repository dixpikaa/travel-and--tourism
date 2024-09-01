'use client'

const { useState, useEffect } = require("react")

const ClientOnly = ({children})=>{
 const [hasMounted, setHasMounted] = useState(false)
 
 useEffect(()=>{
  setHasMounted(true)
 }, [])

 if(!hasMounted) return null

 return (
  <>
    {children}
  </>
 )
}

export default ClientOnly