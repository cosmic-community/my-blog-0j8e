// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/categories"
        className="inline-flex items-center gap-1 text-sm text-cosmic-glow/70 hover:text-cosmic-glow transition-colors mb-8"
      >
        ← Back to Categories
      </Link>

      <header className="text-center mb-12">
        <span className="text-4xl block mb-4">🏷️</span>
        <h1 className="text-4xl font-extrabold nebula-text mb-3">{name}</h1>
        {description && (
          <p className="text-cosmic-star/60 max-w-2xl mx-auto">{description}</p>
        )}
      </header>

      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-cosmic-star/50">
          <span className="text-5xl block mb-4">🌠</span>
          <p>No posts in this category yet.</p>
        </div>
      )}
    </div>
  )
}