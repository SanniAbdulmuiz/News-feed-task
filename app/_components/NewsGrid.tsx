'use client'
import { Article } from '../types'
import NewsCard from './NewsCard'

export default function NewsGrid({ articles }: { articles: Article[] }) {
  return (
    <div className='container mx-auto px-4 mt-8'>
      <h2 className='text-2xl font-semibold mb-4'>Recent Articles</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.map((a) => (
          <NewsCard key={a.url} article={a} />
        ))}
      </div>
    </div>
  )
}
