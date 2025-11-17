import { getArticle } from '@/app/_lib/api'
import { Article } from '@/app/types'

type Props = {
  params: {
    articleId: string
  }
}

export default async function ArticlePage(props: Props) {
  // Turbopack requires this: params may be a Promise
  const { articleId } = await props.params

  const article: Article | null = await getArticle(articleId)

  if (!article) {
    return (
      <div className='container mx-auto px-4 py-10'>
        <h1 className='text-xl font-semibold'>Article not found.</h1>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-10'>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className='w-full max-h-[400px] object-cover rounded-lg mb-6'
        />
      )}

      <h1 className='text-3xl font-bold mb-3'>{article.title}</h1>
      <p className='text-gray-600 text-sm mb-4'>{article.source?.name}</p>
      <p className='text-lg leading-relaxed'>{article.content || article.description}</p>

      <a
        href={article.url}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 underline block mt-6'
      >
        View full article on source website
      </a>
    </div>
  )
}
