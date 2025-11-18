'use client'

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
    <div className='container mx-auto px-4 mt-6 flex justify-center'>
      <div className='flex gap-3 overflow-x-auto py-2 scrollbar-hide'>
        {categories.map((c) => {
          const active = selected === c.id

          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={[
                'px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200',
                'border shadow-sm backdrop-blur-sm',
                active
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white/80 text-gray-700 hover:bg-gray-100 border-gray-300',
              ].join(' ')}
            >
              {c.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
