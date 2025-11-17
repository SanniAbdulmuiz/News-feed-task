'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Article } from '../types'

type Props = {
  article?: Article | null
}

export default function HeroCard({ article }: Props) {
  const router = useRouter()

  if (!article) {
    return (
      <div className='container mx-auto px-4 mt-10'>
        <div className='h-72 rounded-2xl bg-gray-200 overflow-hidden relative'>
          <div className='absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200'></div>
        </div>
      </div>
    )
  }

  const handleReadFullStory = () => {
    // Encode the URL so we can safely use it as a dynamic route
    const encodedUrl = encodeURIComponent(article.url)
    router.push(`/article/${encodedUrl}`)
  }

  return (
    <div className='container mx-auto px-4 mt-10'>
      <div className='relative rounded-2xl overflow-hidden group shadow-xl transition-all duration-300 hover:shadow-2xl'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105'
          style={{
            backgroundImage: article.urlToImage ? `url(${article.urlToImage})` : undefined,
          }}
        />

        {/* Dark Cinematic Vignette */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80'></div>

        {/* Content Layer */}
        <div className='relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[340px]'>
          {/* Frosted Glass Panel */}
          <div className='bg-black/30 backdrop-blur-md rounded-lg p-6 max-w-2xl border border-white/10'>
            {/* Title */}
            <h1 className='text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md'>
              {article.title}
            </h1>

            {/* Description */}
            {article.description && (
              <p className='mt-4 text-gray-200 text-base md:text-lg leading-relaxed'>
                {article.description}
              </p>
            )}

            {/* CTA Button */}
            <button
              onClick={handleReadFullStory}
              className='
                mt-6 inline-block bg-blue-600 hover:bg-blue-700 
                text-white px-5 py-2.5 rounded-md text-sm font-medium
                transition-all duration-200 shadow-md hover:shadow-lg
              '
            >
              Read Full Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
