import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from 'react';
import { Button } from '@/components/ui/button';

interface X30e8Props {
  siteName?: string;
  siteDescription?: string;
  logoSrc?: string;
  columns?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export default function X30e8({
  siteName = "business site",
  siteDescription = "A site that deals with information about businesses",
  logoSrc = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/c045817d-b414-49d6-8e2d-740b01f28200/public",
  columns = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "Learn",
      links: [
        { label: "Blog", href: "/learn" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "About Businesses", href: "/about" },
        { label: "Latest Insights", href: "/learn" },
      ],
    },
  ],
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
}: X30e8Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-primary/10 bg-gradient-to-br from-muted/30 via-background to-secondary/5">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-4" data-astro-prefetch>
              {logoSrc ? (
                <img 
                  src={logoSrc} 
                  alt={`${siteName} logo`} 
                  className="h-[10.5rem] w-auto object-contain"
                />
              ) : (
                <>
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {siteName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-bold text-xl">{siteName}</span>
                </>
              )}
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              {siteDescription}
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.facebook && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.instagram && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.linkedin && (
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((column) => (
            <div key={column.title} className="col-span-1 md:col-span-1">
              <h3 className="font-semibold text-sm mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-astro-prefetch
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-astro-prefetch>
              About Us
            </a>
            <a href="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-astro-prefetch>
              Learn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}