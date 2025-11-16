// app/components/Header.tsx
'use client'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-white border-b'>
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold'>
              N
            </div>
            <span className='text-xl font-semibold'>News Today</span>
          </div>

          <nav className='hidden md:flex gap-6 ml-8 text-sm text-gray-600'>
            <a className='hover:text-gray-900'>Top Stories</a>
            <a className='hover:text-gray-900'>World</a>
            <a className='hover:text-gray-900'>Politics</a>
            <a className='hover:text-gray-900'>Business</a>
            <a className='hover:text-gray-900'>Tech</a>
            <a className='hover:text-gray-900'>Culture</a>
          </nav>
        </div>

        <div className='flex items-center gap-4 text-gray-500'>
          <button aria-label='toggle theme' className='p-2 rounded hover:bg-gray-100'>
            🌙
          </button>
          <button aria-label='notifications' className='p-2 rounded hover:bg-gray-100'>
            🔔
          </button>
        </div>
      </div>
    </header>
  )
}
