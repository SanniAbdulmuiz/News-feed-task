'use client'

export default function Footer() {
  return (
    <footer className='mt-8 border-t py-6'>
      <div className='container mx-auto px-4 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} News Today. All rights reserved.
      </div>
    </footer>
  )
}
