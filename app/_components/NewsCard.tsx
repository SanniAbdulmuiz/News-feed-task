'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Article } from '../types'

export default function NewsCard({ article }: { article: Article }) {
  const router = useRouter()
  const encodedUrl = encodeURIComponent(article.url)

  const handleClick = () => {
    router.push(`/article/${encodedUrl}`)
  }

  return (
    <article
      onClick={handleClick}
      className='cursor-pointer group overflow-hidden rounded-2xl shadow-md bg-white transition-shadow hover:shadow-xl hover:scale-[1.02] duration-300'
    >
      <div className='relative w-full h-48 md:h-56'>
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
          />
        ) : (
          <div className='w-full h-full bg-gray-200 animate-pulse' />
        )}
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/60' />
      </div>

      <div className='p-4 md:p-6'>
        <h3 className='text-lg md:text-xl font-bold text-gray-900 line-clamp-2 mb-2'>
          {article.title}
        </h3>
        <p className='text-gray-600 text-sm md:text-base line-clamp-3'>
          {article.description || 'No description available.'}
        </p>

        <div className='mt-4 flex items-center justify-between text-xs md:text-sm text-gray-500'>
          <span>{article.source?.name}</span>
          <span className='text-blue-600 font-medium group-hover:underline'>Read</span>
        </div>
      </div>
    </article>
  )
}
