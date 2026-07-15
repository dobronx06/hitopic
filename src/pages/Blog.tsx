import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'

const posts = [
  {
    title: 'Premier Google Certified Publishing Partner en France depuis 2023',
    date: 'May 1, 2023',
    category: 'Publishers',
    excerpt:
      "In the ultra-competitive adtech sector, the Google Certified Publishing Partner (GCPP) certification represents much more than a simple badge. It's a recognition of deep expertise in Google's advertising ecosystem...",
    slug: '#',
  },
  {
    title: 'Google MCM: what you need to know',
    date: 'July 22, 2021',
    category: 'Publishers',
    excerpt:
      "Google Scaled Partner Management (SPM) was a program that allowed publishers to delegate the management of their ad inventory. With Google MCM, the framework has evolved to offer more transparency and control...",
    slug: '#',
  },
]

export default function Blog() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Insights, guides, and news about programmatic advertising, ad monetization, and the adtech ecosystem."
      />

      <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[280px] group border border-transparent hover:border-brand-blue/15 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-normal text-brand-navy/25">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-normal text-brand-navy tracking-tight leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-[13px] font-normal text-brand-navy/45 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-1.5 mt-6 text-brand-blue group-hover:text-brand-blue/70 transition-colors cursor-pointer">
                <span className="text-[13px] font-medium">Read more</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
