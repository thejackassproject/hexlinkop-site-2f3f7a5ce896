/**
 * BentoGrid01 - Three Column Bento Grid
 * Modern bento-style grid layout with 5 feature sections
 * Features: 3-column responsive layout, image placeholders, theme-aware
 */

import React from 'react';

interface BentoItem {
  title: string;
  description: string;
  image: string;
  span?: 'tall' | 'wide' | 'normal';
}

interface D0acc17Props {
  badge?: string;
  heading?: string;
  description?: string;
  items?: BentoItem[];
}

export default function D0acc17({
  badge = "Business Insights",
  heading = "Everything you need to know about businesses",
  description = "Discover comprehensive information on business strategies, market trends, and entrepreneurial success stories to help you grow and innovate.",
  items = [
    {
      title: "Market Trends",
      description: "Stay ahead with the latest business market trends, analysis, and forecasts that impact industries worldwide.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/f6c6d01a-340b-456b-a7fd-92a533468900/public",
      span: "tall"
    },
    {
      title: "Startup Guides",
      description: "Learn how to launch and scale successful startups with expert advice and proven strategies.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/de4bbafe-d49f-4548-69db-9b1bb1985100/public",
      span: "normal"
    },
    {
      title: "Financial Management",
      description: "Master budgeting, investing, and financial planning to ensure your business thrives.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/b76b41cb-7f6b-4394-29c0-622ff8510d00/public",
      span: "normal"
    },
    {
      title: "Leadership & Culture",
      description: "Build strong teams and foster a positive company culture with insights from top business leaders.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/622b544a-46c6-4e13-bc7c-2e0cebd00500/public",
      span: "tall"
    }
  ]
}: D0acc17Props) {
  return (
    <div className="bg-muted/30 dark:bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-primary">{badge}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
          {heading}
        </p>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            {description}
          </p>
        )}
        
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-[repeat(2,380px)]">
          {/* First tall item - left column */}
          {items[0] && (
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[0].description}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-border bg-muted shadow-2xl">
                    <img 
                      className="size-full object-cover object-top" 
                      src={items[0].image} 
                      alt={items[0].title}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-l-[2rem]"></div>
            </div>
          )}
          
          {/* Second item - top middle */}
          {items[1] && (
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[1].description}
                  </p>
                </div>
                <div className="relative h-52 px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={items[1].image} 
                    alt={items[1].title}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-t-[2rem]"></div>
            </div>
          )}
          
          {/* Third item - bottom middle */}
          {items[2] && (
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[2].description}
                  </p>
                </div>
                <div className="relative h-52 px-8 max-lg:py-6 lg:pb-2">
                  <img 
                    className="w-full h-full object-cover rounded-lg" 
                    src={items[2].image} 
                    alt={items[2].title}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border"></div>
            </div>
          )}
          
          {/* Fourth tall item - right column */}
          {items[3] && (
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    {items[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    {items[3].description}
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-muted dark:bg-card shadow-2xl border border-border">
                    <img 
                      className="w-full h-full object-cover" 
                      src={items[3].image} 
                      alt={items[3].title}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
