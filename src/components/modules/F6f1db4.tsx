import { ArrowRight, Calendar, Clock } from "lucide-react";
import React from 'react';

function F6f1db4({
  articles = [
    {
      slug: '/learn/top-business-strategies-2024',
      title: 'Top Business Strategies for 2024',
      excerpt: 'Discover the essential strategies every business owner needs to thrive in the competitive market. From digital transformation to sustainable practices, learn how to stay ahead.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/800093e2-0215-46cf-8e1e-59319c00b100/public',
      category: 'Business Tips',
      author: {
        name: 'John Entrepreneur',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/c0c01c72-2435-4712-4b6f-24b3a938d900/public',
      },
      date: '2024-01-15',
      readTime: '5 min read',
    },
    {
      slug: '/learn/entrepreneurship-fundamentals',
      title: 'Entrepreneurship Fundamentals',
      excerpt: 'A comprehensive guide to starting your own business. Cover the basics of planning, funding, and scaling your venture in today\'s economy.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/199354a2-cd66-41e4-58c5-114c95886400/public',
      category: 'Entrepreneurship',
      author: {
        name: 'Sarah Business',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/917ef7cd-9517-449f-bcf4-f43f9c752a00/public',
      },
      date: '2024-02-10',
      readTime: '8 min read',
    },
    {
      slug: '/learn/marketing-in-digital-age',
      title: 'Marketing in the Digital Age',
      excerpt: 'Explore how digital marketing can boost your business. Learn about social media strategies, SEO, and content creation for maximum reach.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/05c80fe5-9765-494a-4cb8-838fc925bc00/public',
      category: 'Marketing',
      author: {
        name: 'Mike Marketer',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/362bd3b9-f726-4e80-b33b-4cfa8283a500/public',
      },
      date: '2024-03-05',
      readTime: '6 min read',
    },
    {
      slug: '/learn/financial-management-basics',
      title: 'Financial Management Basics',
      excerpt: 'Master the art of managing business finances. From budgeting to cash flow analysis, get tips to keep your company financially healthy.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/0911012e-a612-4bc0-8e85-41c224a35300/public',
      category: 'Finance',
      author: {
        name: 'Anna Accountant',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/77f8cd59-e5b0-4dd9-c3c8-7e33daadca00/public',
      },
      date: '2024-04-20',
      readTime: '7 min read',
    },
    {
      slug: '/learn/leadership-skills',
      title: 'Developing Leadership Skills',
      excerpt: 'Learn how to become an effective leader in your business. Focus on team building, decision-making, and motivating employees for success.',
      coverImage: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/22ad185f-4623-4d00-98a8-450ed8e45900/public',
      category: 'Leadership',
      author: {
        name: 'David Leader',
        avatar: 'https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/59397078-3d16-47c5-f156-cdd4aef39600/public',
      },
      date: '2024-05-12',
      readTime: '9 min read',
    },
  ],
  columns = 3
}: F6f1db4Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Grid */}
      <div 
        className={`grid grid-cols-1 ${
          columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
        } gap-8`}
      >
        {articles.map((article, index) => (
          <article
            key={index}
            className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 flex flex-col"
          >
            {/* Cover Image */}
            <a href={article.slug} className="block aspect-[16/9] overflow-hidden bg-muted" data-astro-prefetch>
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Category */}
              <span className="inline-block w-fit px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-3">
                {article.category}
              </span>

              {/* Title */}
              <a href={article.slug} data-astro-prefetch>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </a>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-4 line-clamp-3 text-sm flex-1">
                {article.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {/* Author */}
                <div className="flex items-center gap-2">
                  {article.author.avatar ? (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        {article.author.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">{article.author.name}</span>
                </div>
              </div>

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <a
                href={article.slug}
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                data-astro-prefetch
              >
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default F6f1db4;