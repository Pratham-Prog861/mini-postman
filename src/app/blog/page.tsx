import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - API Testing Tips & Tutorials',
  description: 'Learn about API testing, REST APIs, HTTP methods, and best practices for developers.',
};

const blogPosts = [
  {
    slug: 'what-is-api-testing',
    title: 'What is API Testing? A Complete Guide for Developers',
    excerpt: 'Learn the fundamentals of API testing, why it matters, and how to get started.',
    date: '2025-01-15',
  },
  {
    slug: 'postman-alternatives',
    title: 'Top 10 Free Postman Alternatives in 2025',
    excerpt: 'Discover the best free alternatives to Postman for API testing and development.',
    date: '2025-01-10',
  },
  {
    slug: 'rest-api-best-practices',
    title: 'REST API Best Practices Every Developer Should Know',
    excerpt: 'Essential best practices for designing and testing REST APIs.',
    date: '2025-01-05',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-zinc-400 mb-12">
          Tips, tutorials, and best practices for API testing
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-zinc-400 mb-4">{post.excerpt}</p>
              <time className="text-sm text-zinc-500">{post.date}</time>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
