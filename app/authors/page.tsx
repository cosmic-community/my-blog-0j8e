import { getAllAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export const metadata = {
  title: 'Authors — My Blog',
  description: 'Meet the cosmic writers.',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <span className="text-4xl block mb-4">👤</span>
        <h1 className="text-4xl font-extrabold nebula-text mb-3">Authors</h1>
        <p className="text-cosmic-star/60">
          The voyagers behind the stories.
        </p>
      </header>

      {authors.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-cosmic-star/50">
          <span className="text-5xl block mb-4">🌠</span>
          <p>No authors found yet.</p>
        </div>
      )}
    </div>
  )
}