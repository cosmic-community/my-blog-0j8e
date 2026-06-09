export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-2xl">🚀</span>
          <span className="text-lg font-bold nebula-text">My Blog</span>
        </div>
        <p className="text-cosmic-star/50 text-sm">
          Exploring the universe of ideas, one post at a time.
        </p>
        <p className="text-cosmic-star/30 text-xs mt-4">
          © {year} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}