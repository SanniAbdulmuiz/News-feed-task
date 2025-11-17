'use client'

import React, { useEffect, useState } from 'react'

export default function Header() {
  // 1. Lazy initialization — no need to setState inside effect
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false

    const stored = localStorage.getItem('theme')
    if (stored === 'dark') return true
    if (stored === 'light') return false

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [showNotifications, setShowNotifications] = useState(false)

  // 2. Sync theme to DOM + localStorage (no setState here)
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  // Toggle handler
  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <header className='bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-lg'>
            N
          </div>
          <span className='text-xl font-semibold text-gray-900 dark:text-white'>News Today</span>
        </div>

        <div className='relative flex items-center gap-3 text-gray-600 dark:text-gray-300'>
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Notifications dropdown */}
          <div className='relative'>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
            >
              🔔
            </button>

            {showNotifications && (
              <div className='absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 text-sm border border-gray-200 dark:border-gray-700'>
                <p className='font-semibold mb-2 text-gray-700 dark:text-gray-200'>Notifications</p>

                <ul className='space-y-2 text-gray-600 dark:text-gray-300'>
                  <li className='hover:text-gray-900 dark:hover:text-white cursor-pointer'>
                    New article published in Technology.
                  </li>
                  <li className='hover:text-gray-900 dark:hover:text-white cursor-pointer'>
                    Trending: Market updates now live.
                  </li>
                  <li className='hover:text-gray-900 dark:hover:text-white cursor-pointer'>
                    Sports: Latest match results.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
