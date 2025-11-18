import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const category: string | null = searchParams.get('category')
    const query: string | null = searchParams.get('q')

    const API_KEY = process.env.NEWS_API_KEY
    if (!API_KEY) throw new Error('Missing NEWS_API_KEY environment variable.')

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=30`
    if (category) url += `&category=${encodeURIComponent(category)}`
    if (query) url += `&q=${encodeURIComponent(query)}`

    const res = await fetch(url)
    const data = (await res.json()) as Record<string, unknown>

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown server error'
    return NextResponse.json({ status: 'error', message }, { status: 500 })
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
