'use client'
import React from 'react'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const headerOffset = 100 // adjust for your sticky header height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }

  return (
    <footer className='mt-8 border-t py-6 bg-gray-50'>
      <div className='container mx-auto px-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-2'>
        <span>© {new Date().getFullYear()} News Today. All rights reserved.</span>

        <div className='flex gap-4'>
          <button
            onClick={() => scrollToSection('top-news')}
            className='hover:text-blue-600 transition-colors cursor-pointer'
          >
            Top News
          </button>
          <button
            onClick={() => scrollToSection('articles')}
            className='hover:text-blue-600 transition-colors cursor-pointer'
          >
            Articles
          </button>
        </div>
      </div>
    </footer>
  )
}
