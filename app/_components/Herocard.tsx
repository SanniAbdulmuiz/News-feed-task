// app/components/HeroCard.tsx
'use client'
import React from 'react'
import { Article } from '../types'

type Props = {
  article?: Article | null
}

export default function HeroCard({ article }: Props) {
  if (!article) {
    return (
      <div className='container mx-auto px-4 mt-8'>
        <div className='h-64 rounded-xl bg-gray-100' />
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 mt-6'>
      <div
        className='rounded-xl overflow-hidden relative shadow-lg'
        style={{
          backgroundImage: article.urlToImage ? `url(${article.urlToImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='bg-gradient-to-b from-black/60 to-black/40 p-10 min-h-[260px] flex flex-col justify-end'>
          <h1 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
            {article.title}
          </h1>
          <p className='mt-4 text-gray-200 max-w-2xl'>{article.description}</p>
          <a
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}
