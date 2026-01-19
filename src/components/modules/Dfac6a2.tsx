import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionItem {
  question: string;
  answer: string;
}

interface Dfac6a2Props {
  title?: string;
  subtitle?: string;
  items?: AccordionItem[];
}

export default function Dfac6a2({
  title = "Frequently Asked Questions About Businesses",
  subtitle = "Get the information you need to understand and grow your business",
  items = [
    {
      question: "What types of businesses do you provide information about?",
      answer: "Our site covers a wide range of businesses, from startups to established enterprises across various industries. We provide insights on entrepreneurship, management, finance, marketing, and more to help you make informed decisions."
    },
    {
      question: "How can I find specific business information on your site?",
      answer: "You can browse our categories or use the search function to find articles, guides, and resources tailored to your needs. Our content is organized for easy navigation, from beginner tips to advanced strategies."
    },
    {
      question: "Do you offer advice on starting a new business?",
      answer: "Yes, we have comprehensive resources for aspiring entrepreneurs. Learn about business planning, funding options, legal requirements, and best practices to launch your venture successfully."
    },
    {
      question: "What resources do you have for business owners?",
      answer: "We provide articles on operations, growth strategies, compliance, and innovation. Whether you're running a small shop or a large corporation, our content helps optimize performance and adapt to market changes."
    },
    {
      question: "How often is your business information updated?",
      answer: "Our team regularly updates content to reflect current trends, regulations, and tools in the business world. We ensure accuracy and relevance to keep you informed with the latest developments."
    }
  ]
}: Dfac6a2Props) {
  return (
    <section className="py-16 px-6 lg:py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
