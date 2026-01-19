import React from 'react';

function Faac3d({
  badge = "About Our Business",
  heading = "Discover what drives our business information platform",
  items = [
    {
      badge: "Business Insights",
      title: "Comprehensive Business Data",
      description: "Access detailed information on various businesses, including market trends, financials, and operational insights to make informed decisions.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/ffec7f02-3f78-47ae-dcd8-182e88b8a600/public",
      colSpan: 3
    },
    {
      badge: "Industry Reports",
      title: "Latest Industry Trends",
      description: "Stay updated with in-depth reports on business sectors, emerging markets, and competitive analysis tailored for modern enterprises.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/4d4d3c03-a3d0-4af5-fee1-cae863d44600/public",
      colSpan: 3
    },
    {
      badge: "Company Profiles",
      title: "Detailed Business Profiles",
      description: "Explore comprehensive profiles of companies, including leadership, products, and performance metrics.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/5615bab0-596a-4f96-ed3c-d973a50dd900/public",
      colSpan: 2
    },
    {
      badge: "Market Analysis",
      title: "Strategic Market Insights",
      description: "Gain access to analytical tools and data that help understand market dynamics and business opportunities.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/9e442cfc-fcdd-4220-fa9b-b4c27858e600/public",
      colSpan: 2
    },
    {
      badge: "Business Tools",
      title: "Essential Business Resources",
      description: "Utilize a range of tools and resources designed to support business planning and strategic growth.",
      image: "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/753bec1f-6cb5-4d72-cb5c-87f3635a7600/public",
      colSpan: 2
    }
  ]
}: Faac3dProps) {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary">{badge}</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl">
          {heading}
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-[repeat(2,400px)]">
          {/* First item - top left (spans 3 cols) */}
          {items[0] && (
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left" 
                  src={items[0].image} 
                  alt={items[0].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[0].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[0].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"></div>
            </div>
          )}
          
          {/* Second item - top right (spans 3 cols) */}
          {items[1] && (
            <div className="relative lg:col-span-3">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-tr-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left lg:object-right" 
                  src={items[1].image} 
                  alt={items[1].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[1].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[1].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-tr-[2rem]"></div>
            </div>
          )}
          
          {/* Third item - bottom left (spans 2 cols) */}
          {items[2] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card lg:rounded-bl-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover object-left" 
                  src={items[2].image} 
                  alt={items[2].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[2].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[2].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border lg:rounded-bl-[2rem]"></div>
            </div>
          )}
          
          {/* Fourth item - bottom middle (spans 2 cols) */}
          {items[3] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <img 
                  className="h-80 object-cover" 
                  src={items[3].image} 
                  alt={items[3].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[3].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[3].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border"></div>
            </div>
          )}
          
          {/* Fifth item - bottom right (spans 2 cols) */}
          {items[4] && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg bg-card dark:bg-card max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <img 
                  className="h-80 object-cover" 
                  src={items[4].image} 
                  alt={items[4].title}
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-primary">{items[4].badge}</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground">
                    {items[4].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground">
                    {items[4].description}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-border max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Faac3d;