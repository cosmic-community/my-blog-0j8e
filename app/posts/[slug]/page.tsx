// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const featuredImage = post.metadata?.featured_image
  const content = getMetafieldValue(post.metadata?.content)
  const author = post.metadata?.author
  const category = post.metadata?.category
  const publishDate = post.metadata?.publish_date
  const tags = post.metadata?.tags || []

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center gap-1 text-sm text-cosmic-glow/70 hover:text-cosmic-glow transition-colors mb-8"
      >
        ← Back to Posts
      </Link>

      <header className="mb-8">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-nebula-gradient text-white mb-4"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-cosmic-star mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-cosmic-star/60">
          {author && (
            <Link
              href={`/authors/${author.slug}`}
              className="flex items-center gap-2 hover:text-cosmic-glow transition-colors"
            >
              {author.metadata?.avatar ? (
                <img
                  src={`${author.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(author.metadata?.name) || author.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-cosmic-glow/30"
                />
              ) : (
                <span className="w-8 h-8 rounded-full bg-cosmic-deep flex items-center justify-center text-xs">👤</span>
              )}
              <span>{getMetafieldValue(author.metadata?.name) || author.title}</span>
            </Link>
          )}
          {publishDate && <time>{formatDate(publishDate)}</time>}
        </div>
      </header>

      {featuredImage && (
        <div className="rounded-2xl overflow-hidden mb-10 shadow-glow">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-cosmic-star prose-a:text-cosmic-glow prose-strong:text-cosmic-star"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags.length > 0 && (
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-cosmic-star/70"
              >
                #{getMetafieldValue(tag)}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}