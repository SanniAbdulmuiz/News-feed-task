import { fetchTopHeadlines } from '@/app/_lib/api'
import { Article } from '@/app/types'

export default async function ArticlePage({ params }: { params: { id: string } }) {
  // Fetch all articles
  const articles = await fetchTopHeadlines('', '')

  // Find the clicked article
  const article = articles.find((a: Article) => encodeURIComponent(a.url) === params.id)

  if (!article) {
    return <h1 className='p-6'>Article not found.</h1>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>

      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className='rounded-lg mb-4' />
      )}

      <p className='text-gray-700 leading-relaxed'>{article.content || article.description}</p>

      <div className='mt-6'>
        <a href={article.url} className='text-blue-600 underline' target='_blank'>
          View original source
        </a>
      </div>
    </div>
  )
}
