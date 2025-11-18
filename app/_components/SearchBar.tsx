'use client'
import { useEffect, useState } from 'react'

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
      <div className='mt-6 relative max-w-2xl mx-auto'>
        <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none'>
          🔍
        </span>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search articles, headlines, topics…'
          className='
            w-full
            pl-12 pr-12
            py-3
            rounded-full
            border border-gray-300
            bg-white
            text-gray-800
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            transition-all
            placeholder-gray-400
          '
        />

        {value.length > 0 && (
          <button
            onClick={() => setValue('')}
            className='
              absolute right-4 top-1/2 -translate-y-1/2
              text-gray-400 hover:text-gray-600
              transition-colors
              text-lg
            '
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}
