# My Blog - Space Edition

![App Preview](https://imgix.cosmicjs.com/0e382c80-645b-11f1-90e0-f3b2a742330f-autopilot-photo-1419242902214-272b3f66ee7a-1781047766844.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive blog application built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Featuring a stunning space-themed design with cosmic gradients, glowing accents, and a deep-space aesthetic, this app showcases posts, authors, and categories from your Cosmic bucket.

## Features

- 🚀 **Space-themed Design** — Deep cosmic gradients, starfield backgrounds, and glowing nebula accents
- 📝 **Dynamic Posts** — Full blog posts with featured images, content, tags, and publish dates
- 👤 **Author Profiles** — Dedicated pages for each author with bio, role, and avatar
- 🏷️ **Category Browsing** — Filter and explore posts organized by category
- 📱 **Fully Responsive** — Beautiful experience across mobile, tablet, and desktop
- ⚡ **Server Components** — Fast, SEO-optimized data fetching with Next.js App Router
- 🎨 **Optimized Images** — Imgix-powered image optimization for crisp visuals

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a28a198c199a4ad253abb86&clone_repository=6a28a2e7c199a4ad253abbcd)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories
>
> IMPORTANT: The user provided reference URLs (https://emperorplanetx.com). External web content from these URLs is included in this message. Use the actual titles, descriptions, and content found on those pages as the basis for demo objects. Do NOT generate generic placeholder content when real content is available from the crawled pages.
>
> The user is rebuilding an existing website and provided these design notes: Use images of space. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type. A blog with posts, authors, and categories. Use images of space. Incorporate these preferences into the visual design, layout, and overall look and feel of the application.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) — React framework with App Router
- [React 19](https://react.dev) — UI library
- [TypeScript](https://www.typescriptlang.org) — Type-safe development
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `authors`, `categories`, and `posts` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are automatically configured when cloning from Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

Fetching all posts with related authors and categories:

```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const posts = response.objects
```

Fetching a single post by slug:

```typescript
const response = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1)

const post = response.object
```

## Cosmic CMS Integration

This application leverages [Cosmic](https://www.cosmicjs.com/docs) to manage all content:

- **Posts** include excerpt, content, featured image, publish date, author (object relationship), category (object relationship), and tags
- **Authors** include name, role, bio, and avatar
- **Categories** include name and description

The `depth(1)` parameter is used to automatically resolve connected objects (authors and categories) in a single query, making rendering related data seamless.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project into [Netlify](https://netlify.com)
3. Add your environment variables
4. Deploy

<!-- README_END -->