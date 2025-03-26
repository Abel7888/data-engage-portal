
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type NewsletterCardProps = {
  title: string;
  subscriberCount: string;
  description: string;
  coverageAreas: string[];
  imageSrc: string;
  color: string;
  isReversed?: boolean;
};

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title,
  subscriberCount,
  description,
  coverageAreas,
  imageSrc,
  color,
  isReversed = false
}) => {
  return (
    <div className={cn(
      "flex flex-col md:flex-row glass-card overflow-hidden",
      isReversed && "md:flex-row-reverse"
    )}>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <div className="pill mb-4" style={{ backgroundColor: `${color}20`, color: color }}>
          {subscriberCount} subscribers
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Coverage Areas:</h4>
          <div className="flex flex-wrap gap-2">
            {coverageAreas.map((area, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray px-2 py-1 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        
        <button className="button-outline flex items-center justify-center gap-2 w-full md:w-auto">
          <span>View Sample</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
      <div className="md:w-1/2 bg-muted h-60 md:h-auto overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default NewsletterCard;
