// app/components/NewsCard.tsx
'use client'
import React from 'react'
import { Article } from '../types'

export default function NewsCard({ article }: { article: Article }) {
  return (
    <article className='border rounded-lg overflow-hidden shadow-sm bg-white'>
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} className='w-full h-40 object-cover' />
      ) : (
        <div className='w-full h-40 bg-gray-100' />
      )}
      <div className='p-4'>
        <h3 className='font-semibold text-lg mb-1'>{article.title}</h3>
        <p className='text-sm text-gray-600 line-clamp-3'>{article.description}</p>
        <div className='mt-3 flex items-center justify-between text-xs text-gray-500'>
          <span>{article.source?.name}</span>
          <a href={article.url} target='_blank' rel='noopener noreferrer' className='text-blue-600'>
            Read
          </a>
        </div>
      </div>
    </article>
  )
}
