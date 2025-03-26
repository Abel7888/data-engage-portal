
import React, { useEffect, useRef } from 'react';
import { Users, BarChart, Award } from 'lucide-react';

type StatItem = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const Stats = () => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.setProperty('--progress', el.dataset.progress || '0%');
            el.classList.add('animated');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.progress-bar').forEach(el => {
      observer.observe(el);
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats: StatItem[] = [
    {
      icon: <Users className="h-8 w-8 text-blue" />,
      value: "40,000+",
      label: "Executive Subscribers"
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue" />,
      value: "48%",
      label: "Average Open Rate"
    },
    {
      icon: <Award className="h-8 w-8 text-blue" />,
      value: "40+",
      label: "Newsletter Editions"
    }
  ];

  return (
    <section className="py-12 bg-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center text-center animate-on-scroll hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
              ref={el => progressRefs.current[index] = el}
            >
              <div className="mb-4 bg-blue-light/20 p-3 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 animate-on-scroll">
          <h3 className="text-xl font-semibold mb-6 text-center">Audience Engagement Metrics</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Open Rate</span>
                <span className="text-blue">43-48%</span>
              </div>
              <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
                <div className="progress-bar h-full bg-blue/20 rounded-full" data-progress="48%"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Click Rate</span>
                <span className="text-blue">12-15%</span>
              </div>
              <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
                <div className="progress-bar h-full bg-blue/20 rounded-full" data-progress="15%"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Subscriber Growth</span>
                <span className="text-blue">8% monthly</span>
              </div>
              <div className="h-2 bg-gray-dark/10 rounded-full overflow-hidden">
                <div className="progress-bar h-full bg-blue/20 rounded-full" data-progress="8%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
