// _lib/api.ts
import { Article } from '../types'

/**
 * Fetch top headlines from API with optional category and search query.
 * Works server-side and client-side.
 */
export async function fetchTopHeadlines(category?: string, query?: string): Promise<Article[]> {
  const params = new URLSearchParams()
  if (category) params.append('category', category)
  if (query) params.append('q', query)

  // Absolute URL for server-side fetch
  const base = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

  const url = params.toString() ? `${base}/api/news?${params.toString()}` : `${base}/api/news`

  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch articles')

  const data: { articles?: Article[] } = await res.json()
  return data.articles || []
}

/**
 * Fetch all articles (for homepage)
 */
export const getArticles = async (category?: string, query?: string): Promise<Article[]> => {
  return await fetchTopHeadlines(category, query)
}

/**
 * Fetch a single article by URL (encoded as articleId)
 */
export const getArticle = async (
  articleId: string,
  category?: string,
  query?: string
): Promise<Article | null> => {
  const url = decodeURIComponent(articleId)
  const articles = await fetchTopHeadlines(category, query)

  // Type the parameter to avoid TS implicit any
  const article = articles.find((a: Article) => a.url === url)
  return article || null
}
