// app/components/SearchBar.tsx
'use client'
import React, { useEffect, useState } from 'react'

type Props = {
  onSearch: (q: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const t = setTimeout(() => onSearch(value.trim()), 500)
    return () => clearTimeout(t)
  }, [value, onSearch])

  return (
    <div className='container mx-auto px-4'>
      <div className='mt-6'>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search for news, topics...'
          className='w-full rounded-lg border px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm'
        />
      </div>
    </div>
  )
}
