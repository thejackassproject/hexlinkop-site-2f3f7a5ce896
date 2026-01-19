import { ArrowRight, CheckCircle } from "lucide-react";
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Cc0769Props {
  backgroundImage?: string;
  heading?: string;
  description?: string;
  features?: string[];
  primaryButton?: {
    text: string;
    url: string;
  };
  secondaryButton?: {
    text: string;
    url: string;
  };
  className?: string;
}

export default function Cc0769({
  backgroundImage = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/b846344f-4884-4c78-4885-4d3d06a24400/public",
  heading = "Unlock Business Insights Today",
  description = "Discover comprehensive information on businesses, trends, and strategies to help your enterprise thrive in the competitive world.",
  features = [
    "Free access to business articles",
    "Expert analysis and advice",
    "Stay updated with latest trends"
  ],
  primaryButton = {
    text: "About Us",
    url: "/about"
  },
  secondaryButton = {
    text: "Learn More",
    url: "/learn"
  },
  className,
}: Cc0769Props) {
  return (
    <section className={cn("relative py-24 px-6 lg:py-32", className)}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="CTA background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
          
          <p className="mb-8 text-xl text-white/90 leading-relaxed">
            {description}
          </p>
          
          {/* Features */}
          <ul className="mb-10 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-black hover:bg-white/90 shadow-2xl text-base px-8"
            >
              <a href={primaryButton.url} className="flex items-center gap-2" data-astro-prefetch>
                {primaryButton.text}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-white/50 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white hover:text-white text-base px-8"
            >
              <a href={secondaryButton.url} data-astro-prefetch>
                {secondaryButton.text}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}