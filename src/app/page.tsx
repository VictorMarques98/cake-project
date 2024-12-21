'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  return (
    <div>
      <button onClick={() => setIsDarkMode((prev) => !prev)}>
        Change Theme
      </button>
    </div>
  )
}
