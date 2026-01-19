import { GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface N1b8993Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  backgroundImage?: string;  // Background image for hero section (SEO: used for og:image)
  variant?: 'centered' | 'split' | 'minimal';
}

function N1b8993({
  title = "Unlock Business Success",
  subtitle = "Your ultimate resource for business information, strategies, and insights to drive growth and innovation.",
  ctaText = "Learn More About Us",
  ctaLink = "/about",
  secondaryCtaText = "Start Learning",
  secondaryCtaLink = "/learn",
  imageSrc,
  backgroundImage = "https://imagedelivery.net/W0Tyu0H3jD0178dqoxnJSA/b8cce092-d37e-4304-f304-fe8ac110d000/public",
  variant = 'centered'
}: N1b8993Props) {
  // Determine background style: use backgroundImage if provided, otherwise gradient
  const backgroundStyle = backgroundImage 
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};
  
  const textColorClass = backgroundImage ? 'text-white' : 'text-foreground';
  const subtextColorClass = backgroundImage ? 'text-gray-200' : 'text-muted-foreground';
  
  return (
    <section 
      className="relative min-h-[600px] py-32 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center"
      style={backgroundStyle}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${variant === 'split' ? 'lg:flex-row' : ''} items-center gap-12`}>
          <div className={`flex-1 ${variant === 'centered' ? 'text-center' : 'text-left'}`}>
            <h1 className={`text-5xl md:text-6xl font-bold ${textColorClass} mb-6 leading-tight`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl ${subtextColorClass} mb-8 max-w-2xl ${variant === 'centered' ? 'mx-auto' : ''}`}>
              {subtitle}
            </p>
            <div className={`flex gap-4 ${variant === 'centered' ? 'justify-center' : 'justify-start'}`}>
              <Button size="lg" className="text-lg px-8 py-6">
                <Rocket className="w-5 h-5 mr-2" />
                <a href={ctaLink}>{ctaText}</a>
              </Button>
              {secondaryCtaText && (
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <a href={secondaryCtaLink}>{secondaryCtaText}</a>
                </Button>
              )}
            </div>
          </div>
          {imageSrc && variant === 'split' && (
            <div className="flex-1">
              <img 
                src={imageSrc} 
                alt="Hero visual" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default N1b8993;