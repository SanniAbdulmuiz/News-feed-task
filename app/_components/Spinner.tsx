// app/_components/Spinner.tsx
export default function Spinner() {
  return (
    <div className='flex items-center justify-center py-10'>
      <div className='relative w-10 h-10'>
        <div className='absolute inset-0 rounded-full border-2 border-[var(--foreground)]/20'></div>

        <div
          className='
            absolute inset-0 rounded-full 
            border-2 border-blue-600 border-t-transparent 
            animate-spin-slow
          '
        ></div>
      </div>
    </div>
  )
}
