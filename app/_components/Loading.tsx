// app/components/LoadingSkeleton.tsx
'use client'
import React from 'react'

export default function Loading() {
  return (
    <div className='container mx-auto px-4 mt-6'>
      <div className='h-64 rounded-lg bg-gray-100 animate-pulse mb-6' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='h-48 bg-gray-100 rounded-lg animate-pulse' />
        ))}
      </div>
    </div>
  )
}
