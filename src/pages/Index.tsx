
import React, { useEffect } from 'react';
import { ArrowRight, Mail, Users, TrendingUp, LightbulbIcon, LineChart, Shield } from 'lucide-react';
import Stats from '@/components/Stats';
import NewsletterCard from '@/components/NewsletterCard';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = "Data Shield Partners | Media Kit";
  }, []);

  const handleIntersection = () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  };
  
  useEffect(() => {
    handleIntersection();
    window.addEventListener('scroll', handleIntersection);
    
    return () => {
      window.removeEventListener('scroll', handleIntersection);
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-gray-light">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 top-40 w-72 h-72 bg-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-6 animate-fade-in">
              <Shield className="h-4 w-4 mr-2" />
              Industry-leading newsletters for decision makers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Connect with 40,000+ Industry Executives
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              High-impact advertising opportunities in our specialized newsletters with exceptional engagement rates reaching C-suite decision makers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <a href="#newsletters" className="button-primary flex items-center justify-center gap-2">
                <span>Our Newsletters</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/about" className="button-outline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Newsletters Section */}
      <section id="newsletters" className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
              Our Publications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Industry-Specific Newsletters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Each newsletter is carefully crafted for specific industry executives, delivering valuable insights and emerging technology trends.
            </p>
          </div>

          <div className="space-y-12">
            <NewsletterCard
              title="Healthcare & MedTech Insights"
              subscriberCount="15,000"
              description="Reaching hospital executives, clinic leaders, MedTech innovators, and pharmaceutical decision-makers with crucial industry trends and technology innovations."
              coverageAreas={["AI in Healthcare", "MedTech Innovation", "Digital Health", "Pharma Advances", "Healthcare Compliance"]}
              imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              color="#3182CE"
            />

            <NewsletterCard
              title="Commercial Real Estate & Finance"
              subscriberCount="15,000"
              description="Connecting with banking executives, asset management firms, investment leaders, and construction decision-makers through relevant industry analysis."
              coverageAreas={["PropTech", "Investment Trends", "Construction Innovation", "Banking Technology", "Asset Management"]}
              imageSrc="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              color="#38A169"
              isReversed={true}
            />

            <NewsletterCard
              title="Logistics & Manufacturing Trends"
              subscriberCount="6,000"
              description="Delivering critical insights to supply chain executives, logistics leaders, and manufacturing decision-makers focused on operational innovation."
              coverageAreas={["Supply Chain Tech", "Manufacturing Innovation", "Logistics Optimization", "Industry 4.0", "Smart Operations"]}
              imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              color="#DD6B20"
            />
          </div>

          <div className="mt-16 text-center">
            <Link to="/about" className="button-outline inline-flex items-center gap-2">
              <span>Learn More About Our Audience</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Advertise Section */}
      <section id="advertising" className="section bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Why Advertise With Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Our newsletters provide direct access to decision-makers with exceptional engagement rates and targeted reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover-lift animate-on-scroll">
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Engagement</h3>
              <p className="text-muted-foreground">
                Our newsletters achieve 43%-48% open rates, ensuring your message reaches and resonates with decision-makers.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift animate-on-scroll">
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-4">
                <Users className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Executive Audience</h3>
              <p className="text-muted-foreground">
                Direct access to nearly 40,000 C-suite executives, directors, and senior leaders across key industries.
              </p>
            </div>

            <div className="glass-card p-6 hover-lift animate-on-scroll">
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-4">
                <LightbulbIcon className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Alignment</h3>
              <p className="text-muted-foreground">
                We partner with advertisers who add value to our audience while effectively showcasing their innovation.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 mb-12 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-center">Advertising Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-dark rounded-lg p-6 text-center hover-lift transition-all">
                <h4 className="text-lg font-semibold mb-2">CPM Pricing</h4>
                <div className="text-3xl font-bold text-blue my-4">$10</div>
                <p className="text-muted-foreground text-sm mb-6">
                  Cost per thousand impressions in our premium newsletters
                </p>
                <a href="#contact" className="button-outline w-full block">Select</a>
              </div>
              
              <div className="border border-gray-dark rounded-lg p-6 text-center hover-lift transition-all relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <h4 className="text-lg font-semibold mb-2">CPC Pricing</h4>
                <div className="text-3xl font-bold text-blue my-4">$1</div>
                <p className="text-muted-foreground text-sm mb-6">
                  Cost per click on your advertisements in our newsletters
                </p>
                <a href="#contact" className="button-primary w-full block">Select</a>
              </div>
              
              <div className="border border-gray-dark rounded-lg p-6 text-center hover-lift transition-all">
                <h4 className="text-lg font-semibold mb-2">Flat Fee</h4>
                <div className="text-3xl font-bold text-blue my-4">Custom</div>
                <p className="text-muted-foreground text-sm mb-6">
                  Customized flat fee pricing for dedicated campaigns
                </p>
                <a href="#contact" className="button-outline w-full block">Contact Us</a>
              </div>
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4">Interested in advertising with us?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Reach out to learn more about our advertising options and how we can help you connect with industry leaders.
            </p>
            <Link to="/about#contact" className="button-primary inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Focus Areas */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
              Editorial Focus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Content Focus Areas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Our newsletters cover key emerging technologies and innovation trends relevant to each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Artificial Intelligence</h3>
              <p className="text-muted-foreground text-sm">
                Industry-specific AI applications, machine learning developments, and practical implementation strategies.
              </p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Internet of Things</h3>
              <p className="text-muted-foreground text-sm">
                Connected device ecosystems, IoT infrastructure, and data insights for operational improvement.
              </p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Digital Twin Technology</h3>
              <p className="text-muted-foreground text-sm">
                Virtual replicas of physical assets, processes, and systems for simulation and optimization.
              </p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Cybersecurity</h3>
              <p className="text-muted-foreground text-sm">
                Threat analysis, security frameworks, and data protection strategies for enterprise systems.
              </p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Emerging Tech Regulations</h3>
              <p className="text-muted-foreground text-sm">
                Compliance updates, regulatory frameworks, and impact analysis for new technologies.
              </p>
            </div>
            <div className="glass-card p-6 animate-on-scroll">
              <h3 className="font-semibold mb-3">Risk Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Evaluation methodologies, risk mitigation strategies, and industry-specific risk management approaches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
