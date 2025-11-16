// app/lib/api.ts
import axios from 'axios'
import { Article } from '../types'

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2'

export const fetchTopHeadlines = async (category = '', q = ''): Promise<Article[]> => {
  const { data } = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: 'us',
      category: category || undefined,
      q: q || undefined,
      apiKey: API_KEY,
      pageSize: 30,
    },
  })
  return data.articles || []
}

// Fetch all articles (used for static generation or listing)
export const getArticles = async (): Promise<Article[]> => {
  return await fetchTopHeadlines()
}

// Fetch a single article by encoded URL
export const getArticle = async (encodedUrl: string): Promise<Article | null> => {
  const url = decodeURIComponent(encodedUrl)
  const articles = await fetchTopHeadlines()

  // Find the article that matches the URL
  const article = articles.find((a) => a.url === url)
  return article || null
}
