'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoadAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setTimeout(() => setIsLoaded(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0, 
        y: isLoaded ? 0 : 20 
      }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-white"
    >
      <h1 className="text-2xl font-bold">Selamat Datang di Website Kami</h1>
      <p>Ini adalah contoh animasi saat halaman dimuat</p>
    </motion.div>
  )
}
