import { Article } from '../types'

// Fetch top headlines with optional category + search
export async function fetchTopHeadlines(category?: string, query?: string): Promise<Article[]> {
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (query) params.append('q', query)

  const res = await fetch(`/api/news?${params.toString()}`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch')

  const data: { articles?: Article[] } = await res.json()
  return data.articles || []
}

// Fetch all articles (used on homepage)
export const getArticles = async (category?: string, query?: string): Promise<Article[]> => {
  return await fetchTopHeadlines(category, query)
}

// Fetch a single article by encoded URL
export const getArticle = async (
  encodedUrl: string,
  category?: string,
  query?: string
): Promise<Article | null> => {
  const url = decodeURIComponent(encodedUrl)

  // Fetch with same filters used on the listing page
  const articles = await fetchTopHeadlines(category, query)

  const article = articles.find((a) => a.url === url)
  return article || null
}
