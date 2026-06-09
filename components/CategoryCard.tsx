import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="glass-card p-6 transition-all duration-300 hover:shadow-glow hover:border-cosmic-glow/40 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🏷️</span>
          <h3 className="text-lg font-bold text-cosmic-star group-hover:text-cosmic-glow transition-colors">
            {name}
          </h3>
        </div>
        {description && (
          <p className="text-sm text-cosmic-star/60 line-clamp-3">{description}</p>
        )}
      </div>
    </Link>
  )
}