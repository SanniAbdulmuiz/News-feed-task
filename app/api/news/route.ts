import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const query = searchParams.get('q')

  const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=30`

  if (category) url += `&category=${category}`
  if (query) url += `&q=${query}`

  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json(data)
}
