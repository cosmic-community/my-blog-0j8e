import Link from 'next/link'
import { getAllPosts, getAllCategories, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import CategoryCard from '@/components/CategoryCard'
import { formatDate } from '@/lib/utils'

export default async function HomePage() {
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 7)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="text-center py-16 sm:py-24">
        <span className="inline-block text-5xl mb-6 animate-float">🌌</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
          <span className="nebula-text">Journey Through</span>
          <br />
          <span className="text-cosmic-star">the Cosmos of Ideas</span>
        </h1>
        <p className="text-lg text-cosmic-star/60 max-w-2xl mx-auto mb-8">
          Explore stories, insights, and discoveries that span the universe.
          A blog built for curious minds and cosmic wanderers.
        </p>
        <Link
          href="/posts"
          className="inline-block px-8 py-3 rounded-full bg-nebula-gradient text-white font-semibold shadow-glow hover:shadow-glow-lg transition-all"
        >
          Explore All Posts
        </Link>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-cosmic-star flex items-center gap-2">
            <span>⭐</span> Featured Post
          </h2>
          <Link href={`/posts/${featuredPost.slug}`} className="group block">
            <article className="glass-card overflow-hidden grid md:grid-cols-2 transition-all duration-300 hover:shadow-glow hover:border-cosmic-glow/40">
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-cosmic-deep">
                {featuredPost.metadata?.featured_image ? (
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=750&fit=crop&auto=format,compress`}
                    alt={featuredPost.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">🌌</div>
                )}
              </div>
              <div className="p-8 flex flex-col justify-center">
                {featuredPost.metadata?.category && (
                  <span className="self-start px-3 py-1 text-xs font-semibold rounded-full bg-nebula-gradient text-white mb-4">
                    {getMetafieldValue(featuredPost.metadata.category.metadata?.name) || featuredPost.metadata.category.title}
                  </span>
                )}
                <h3 className="text-2xl sm:text-3xl font-bold text-cosmic-star mb-3 group-hover:text-cosmic-glow transition-colors">
                  {featuredPost.title}
                </h3>
                {featuredPost.metadata?.excerpt && (
                  <p className="text-cosmic-star/60 mb-4 line-clamp-3">
                    {getMetafieldValue(featuredPost.metadata.excerpt)}
                  </p>
                )}
                {featuredPost.metadata?.publish_date && (
                  <time className="text-sm text-cosmic-glow/70">
                    {formatDate(featuredPost.metadata.publish_date)}
                  </time>
                )}
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-cosmic-star flex items-center gap-2">
            <span>📝</span> Recent Posts
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-cosmic-star flex items-center gap-2">
            <span>🏷️</span> Browse Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <div className="text-center py-20 text-cosmic-star/50">
          <span className="text-5xl block mb-4">🌠</span>
          <p>No posts found in this galaxy yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}