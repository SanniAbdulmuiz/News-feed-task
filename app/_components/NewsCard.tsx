'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '../types'

export default function NewsCard({ article }: { article: Article }) {
  const encodedUrl = encodeURIComponent(article.url)

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <Link href={`/article/${encodedUrl}`}>
        <div className="relative w-full h-40">
          {article.urlToImage ? (
            <Image
              src={article.urlToImage}
              alt={article.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">
          <Link href={`/article/${encodedUrl}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">{article.description}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{article.source?.name}</span>

          <Link href={`/article/${encodedUrl}`} className="text-blue-600">
            Read
          </Link>
        </div>
      </div>
    </article>
  )
}
