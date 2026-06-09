import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cosmic-dark/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-float">🚀</span>
            <span className="text-xl font-bold nebula-text">My Blog</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-cosmic-star/80 hover:text-cosmic-glow transition-colors"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-cosmic-star/80 hover:text-cosmic-glow transition-colors"
            >
              Posts
            </Link>
            <Link
              href="/categories"
              className="text-cosmic-star/80 hover:text-cosmic-glow transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/authors"
              className="text-cosmic-star/80 hover:text-cosmic-glow transition-colors"
            >
              Authors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}