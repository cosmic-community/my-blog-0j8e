// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function AuthorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/authors"
        className="inline-flex items-center gap-1 text-sm text-cosmic-glow/70 hover:text-cosmic-glow transition-colors mb-8"
      >
        ← Back to Authors
      </Link>

      <header className="glass-card p-8 mb-12 text-center max-w-2xl mx-auto">
        <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-cosmic-glow/40 shadow-glow bg-cosmic-deep">
          {avatar ? (
            <img
              src={`${avatar.imgix_url}?w=224&h=224&fit=crop&auto=format,compress`}
              alt={name}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">👤</div>
          )}
        </div>
        <h1 className="text-3xl font-extrabold text-cosmic-star mb-1">{name}</h1>
        {role && <p className="text-cosmic-glow/80 font-medium mb-4">{role}</p>}
        {bio && <p className="text-cosmic-star/60">{bio}</p>}
      </header>

      <h2 className="text-2xl font-bold mb-6 text-cosmic-star flex items-center gap-2">
        <span>📝</span> Posts by {name}
      </h2>

      {posts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-cosmic-star/50">
          <span className="text-5xl block mb-4">🌠</span>
          <p>No posts by this author yet.</p>
        </div>
      )}
    </div>
  )
}