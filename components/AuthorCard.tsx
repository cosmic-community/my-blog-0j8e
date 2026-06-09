import Link from 'next/link'
import { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const avatar = author.metadata?.avatar
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const role = getMetafieldValue(author.metadata?.role)

  return (
    <Link href={`/authors/${author.slug}`} className="group block">
      <div className="glass-card p-6 text-center transition-all duration-300 hover:shadow-glow hover:border-cosmic-glow/40 hover:-translate-y-1">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-cosmic-glow/30 group-hover:ring-cosmic-glow transition-all bg-cosmic-deep">
          {avatar ? (
            <img
              src={`${avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">👤</div>
          )}
        </div>
        <h3 className="text-lg font-bold text-cosmic-star group-hover:text-cosmic-glow transition-colors">
          {name}
        </h3>
        {role && <p className="text-sm text-cosmic-glow/70 mt-1">{role}</p>}
      </div>
    </Link>
  )
}