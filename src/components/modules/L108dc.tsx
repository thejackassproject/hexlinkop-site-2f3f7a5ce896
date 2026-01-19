import { Quote, Star } from "lucide-react";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

interface L108dcProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
}

export default function L108dc({
  title = "What Business Leaders Say",
  subtitle = "Discover insights from entrepreneurs and executives who have leveraged our business information resources to drive success",
  testimonials = [
    {
      quote: "This platform provided invaluable data that helped us identify market opportunities we never knew existed. Our revenue grew by 40% in just six months.",
      author: "Alex Rivera",
      role: "Founder",
      company: "Growth Ventures",
      rating: 5
    },
    {
      quote: "The comprehensive business insights here are unparalleled. It transformed our strategy and positioned us as industry leaders in competitive analysis.",
      author: "Jordan Lee",
      role: "CEO",
      company: "Insight Partners",
      rating: 5
    },
    {
      quote: "Accessing real-time business information has been a game-changer. We've made informed decisions that saved us thousands and boosted our efficiency.",
      author: "Taylor Morgan",
      role: "Operations Manager",
      company: "Dynamic Enterprises",
      rating: 5
    },
    {
      quote: "The depth of business data and analytics on this site is incredible. It empowered our team to innovate and expand into new markets confidently.",
      author: "Casey Nguyen",
      role: "Chief Strategy Officer",
      company: "Future Forward Inc.",
      rating: 5
    },
    {
      quote: "We've relied on this resource for years. The accurate and up-to-date business information has been crucial for our planning and risk management.",
      author: "Riley Thompson",
      role: "VP of Business Development",
      company: "Global Strategies",
      rating: 5
    }
  ],
  className,
}: L108dcProps) {
  return (
    <section className={cn("py-20 px-6 lg:py-32 bg-muted/30", className)}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="flex flex-col justify-between p-8 h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-primary/40" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg text-foreground mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="border-t pt-4">
                        <p className="font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
