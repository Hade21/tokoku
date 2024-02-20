import { useState, useEffect } from "react";

export default function useWindowsDimension() {
  const [windowsDimension, setWindowsDimension] = useState(
    { width: 0, height: 0 }
  )

  const handleResize = () => {
    setWindowsDimension({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowsDimension
}