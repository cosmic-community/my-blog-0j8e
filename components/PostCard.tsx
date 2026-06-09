import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const category = post.metadata?.category
  const publishDate = post.metadata?.publish_date

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-glow hover:border-cosmic-glow/40 hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden bg-cosmic-deep">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={post.title}
              width={400}
              height={225}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">🌌</div>
          )}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-nebula-gradient text-white shadow-glow">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          {publishDate && (
            <time className="text-xs text-cosmic-glow/70 mb-2">
              {formatDate(publishDate)}
            </time>
          )}
          <h3 className="text-lg font-bold text-cosmic-star mb-2 group-hover:text-cosmic-glow transition-colors line-clamp-2">
            {post.title}
          </h3>
          {excerpt && (
            <p className="text-sm text-cosmic-star/60 line-clamp-3 flex-grow">
              {excerpt}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}