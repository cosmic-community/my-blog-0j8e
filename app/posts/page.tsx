import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'All Posts — My Blog',
  description: 'Browse all cosmic posts.',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <span className="text-4xl block mb-4">📝</span>
        <h1 className="text-4xl font-extrabold nebula-text mb-3">All Posts</h1>
        <p className="text-cosmic-star/60">
          Explore every story across the cosmos.
        </p>
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
          <p>No posts found yet.</p>
        </div>
      )}
    </div>
  )
}