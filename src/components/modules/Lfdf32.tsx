import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function Lfdf32({
  articles = [
    {
      slug: "/business-strategies-for-2024",
      title: "Top Business Strategies for 2024",
      excerpt: "Discover the latest trends and strategies that are shaping the business landscape. From digital transformation to sustainable practices, learn how to stay ahead in a competitive market.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/02b477ec-f6b9-4a54-51db-1a57780baf00/public",
      category: "Strategy",
      readTime: "5 min read",
      featured: true,
    },
    {
      slug: "/entrepreneurship-basics",
      title: "Entrepreneurship Basics: Building Your Startup",
      excerpt: "A comprehensive guide for aspiring entrepreneurs. Cover everything from ideation to funding, with practical tips to turn your vision into a thriving business.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/fef71009-3ac4-4358-ccaa-eeb23f678100/public",
      category: "Entrepreneurship",
      readTime: "7 min read",
      featured: true,
    },
    {
      slug: "/financial-planning-for-businesses",
      title: "Financial Planning for Small Businesses",
      excerpt: "Master the essentials of financial management. Explore budgeting, cash flow analysis, and investment strategies to ensure your business's financial health.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/8a374aed-d048-4a1a-c153-5e1a6491ea00/public",
      category: "Finance",
      readTime: "6 min read",
      featured: true,
    },
    {
      slug: "/marketing-in-the-digital-age",
      title: "Effective Marketing in the Digital Age",
      excerpt: "Leverage digital tools and platforms to boost your brand. Learn about social media marketing, SEO, and data-driven campaigns for maximum impact.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/fb354ce1-1931-4622-eeb3-b66beb970e00/public",
      category: "Marketing",
      readTime: "8 min read",
      featured: true,
    },
    {
      slug: "/leadership-skills-for-managers",
      title: "Developing Leadership Skills for Managers",
      excerpt: "Enhance your leadership abilities to inspire teams. Focus on communication, motivation, and decision-making to drive organizational success.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/ad98f2be-d086-4339-4217-8082d4f50f00/public",
      category: "Leadership",
      readTime: "4 min read",
      featured: true,
    },
    {
      slug: "/innovation-in-business",
      title: "Fostering Innovation in Your Business",
      excerpt: "Unlock creativity and innovation. Discover techniques to encourage new ideas, implement change, and maintain a competitive edge.",
      coverImage: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/8f868097-9c6d-4b49-785f-00fb73d3f500/public",
      category: "Innovation",
      readTime: "6 min read",
      featured: true,
    },
  ],
  title = "Featured Business Insights",
}: Lfdf32Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-muted/30 to-background">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>
      </div>

      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, 6).map((article, index) => (
          <article
            key={index}
            className="group relative bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>Featured</span>
            </div>

            {/* Cover Image */}
            <a href={article.slug} className="block relative aspect-[16/9] overflow-hidden bg-muted" data-astro-prefetch>
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </a>

            {/* Content */}
            <div className="p-6">
              {/* Category & Read Time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Read More Button */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                asChild
              >
                <a href={article.slug} data-astro-prefetch className="flex items-center justify-center gap-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-12 text-center">
        <Button size="lg" variant="outline" asChild>
          <a href="/learn" data-astro-prefetch className="inline-flex items-center gap-2">
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Lfdf32;