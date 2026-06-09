import { getAllCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata = {
  title: 'Categories — My Blog',
  description: 'Browse posts by category.',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <span className="text-4xl block mb-4">🏷️</span>
        <h1 className="text-4xl font-extrabold nebula-text mb-3">Categories</h1>
        <p className="text-cosmic-star/60">
          Navigate the constellations of topics.
        </p>
      </header>

      {categories.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-cosmic-star/50">
          <span className="text-5xl block mb-4">🌠</span>
          <p>No categories found yet.</p>
        </div>
      )}
    </div>
  )
}