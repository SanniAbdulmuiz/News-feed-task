'use client'
import React, { useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Article } from './types'
import { fetchTopHeadlines } from './_lib/api'
import SearchBar from './_components/SearchBar'
import CategoryPills from './_components/CategoryPills'
import NewsGrid from './_components/NewsGrid'
import Loading from './_components/Loading'
import HeroCard from './_components/Herocard'
import Spinner from './_components/Spinner'
import { Suspense } from 'react'

export default function HomePage() {
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')

  const {
    data: articles = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['news', category, query],
    queryFn: () => fetchTopHeadlines(category, query),
    staleTime: 1000 * 60 * 2,
  })

  const onSearch = useCallback((q: string) => setQuery(q), [])
  const onSelectCategory = useCallback((cat: string) => setCategory(cat), [])

  const featured = articles.length > 0 ? (articles[0] as Article) : null
  const gridArticles = articles.slice(1)

  return (
    <div className='pt-6 pb-16'>
      <SearchBar onSearch={onSearch} />
      <CategoryPills selected={category} onSelect={onSelectCategory} />

      {isLoading && <Loading />}

      {isError && (
        <div className='container mx-auto px-4 mt-8'>
          <p className='text-red-600'>Error loading articles. Please try again.</p>
        </div>
      )}

      {!isLoading && !isError && (
        <Suspense fallback={<Spinner />}>
          <HeroCard article={featured} />
          <NewsGrid articles={gridArticles as Article[]} />
        </Suspense>
      )}
    </div>
  )
}
