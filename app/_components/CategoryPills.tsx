// app/components/CategoryPills.tsx
'use client'
import React from 'react'

const categories = [
  { id: '', label: 'All' },
  { id: 'general', label: 'Top Stories' },
  { id: 'world', label: 'World' },
  { id: 'politics', label: 'Politics' },
  { id: 'business', label: 'Business' },
  { id: 'technology', label: 'Tech' },
  { id: 'culture', label: 'Culture' },
]

type Props = {
  selected: string
  onSelect: (cat: string) => void
}

export default function CategoryPills({ selected, onSelect }: Props) {
  return (
    <div className='container mx-auto px-4 mt-4'>
      <div className='flex gap-3 overflow-x-auto py-2'>
        {categories.map((c) => {
          const active = selected === c.id
          return (
            <button
              key={c.id + c.label}
              onClick={() => onSelect(c.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full border ${
                active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {c.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
