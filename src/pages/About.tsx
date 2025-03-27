
import React, { useEffect } from 'react';
import { Users, Mail, Award, LineChart, Newspaper, Target } from 'lucide-react';
import Stats from '@/components/Stats';
import ContactForm from '@/components/ContactForm';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Data Shield Partners";
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 -top-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-48 top-48 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-6 animate-fade-in">
              About Data Shield Partners testing this lets check
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Connecting Industry Leaders with Innovation
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
              We publish three industry-focused newsletters, reaching nearly 40,000 CEOs, CTOs, CIOs, and IT leaders with insights on emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
                Empowering Decision-Makers with Technology Insights
              </h2>
              <p className="text-lg text-muted-foreground animate-on-scroll">
                We're dedicated to bridging the gap between emerging technologies and industry leaders, providing actionable insights that drive innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
              <div className="glass-card p-6 hover-lift">
                <div className="bg-blue/10 p-3 inline-block rounded-lg mb-4">
                  <Target className="h-6 w-6 text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Focus</h3>
                <p className="text-muted-foreground">
                  We specialize in emerging technologies across healthcare, finance, real estate, and supply chain sectors, delivering targeted insights to industry leaders.
                </p>
              </div>

              <div className="glass-card p-6 hover-lift">
                <div className="bg-blue/10 p-3 inline-block rounded-lg mb-4">
                  <Award className="h-6 w-6 text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Value</h3>
                <p className="text-muted-foreground">
                  Through high-quality content and strategic partnerships, we help our subscribers stay ahead of industry trends and technological advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Newsletters Section */}
      <section className="section bg-gray-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
              Our Publications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Industry-Leading Newsletters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-on-scroll">
              Each newsletter is carefully curated to deliver relevant insights and analysis to specific industry segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover-lift animate-on-scroll">
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-6">
                <Newspaper className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare & MedTech</h3>
              <p className="text-sm text-muted-foreground mb-4">
                15,000 subscribers including hospital executives, MedTech innovators, and pharmaceutical leaders.
              </p>
              <div className="border-t border-gray-dark/10 pt-4 mt-4">
                <h4 className="font-medium mb-2">Key Topics:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Digital Health Innovation</li>
                  <li>• Medical Technology Advances</li>
                  <li>• Healthcare AI Applications</li>
                  <li>• Regulatory Compliance</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 hover-lift animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-6">
                <Newspaper className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate & Finance</h3>
              <p className="text-sm text-muted-foreground mb-4">
                15,000 subscribers in banking, asset management, investment, and construction sectors.
              </p>
              <div className="border-t border-gray-dark/10 pt-4 mt-4">
                <h4 className="font-medium mb-2">Key Topics:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PropTech Solutions</li>
                  <li>• Financial Technology</li>
                  <li>• Investment Strategies</li>
                  <li>• Construction Innovation</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 hover-lift animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-blue/10 p-3 inline-block rounded-lg mb-6">
                <Newspaper className="h-6 w-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supply Chain & Manufacturing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                6,000 subscribers including logistics, supply chain, and manufacturing executives.
              </p>
              <div className="border-t border-gray-dark/10 pt-4 mt-4">
                <h4 className="font-medium mb-2">Key Topics:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Supply Chain Technology</li>
                  <li>• Industry 4.0</li>
                  <li>• Logistics Optimization</li>
                  <li>• Smart Manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-blue/10 text-blue mb-4 animate-on-scroll">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
                Connect With Our Team
              </h2>
              <p className="text-lg text-muted-foreground animate-on-scroll">
                Interested in advertising or have questions about our newsletters? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="animate-on-scroll">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-blue mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@datashieldpartners.com" className="text-muted-foreground hover:text-blue transition-colors">
                          info@datashieldpartners.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue mt-0.5" />
                      <div>
                        <p className="font-medium">Audience</p>
                        <p className="text-muted-foreground">
                          40,000+ Industry Executives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <LineChart className="h-5 w-5 text-blue mt-0.5" />
                      <div>
                        <p className="font-medium">Engagement</p>
                        <p className="text-muted-foreground">
                          43-48% Average Open Rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 animate-on-scroll">
                  <h3 className="text-lg font-semibold mb-3">Looking to Advertise?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our team will help you create a customized advertising strategy that reaches your target audience effectively.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Strategic audience targeting</li>
                    <li>• Multiple pricing options</li>
                    <li>• Performance tracking</li>
                    <li>• Custom campaign solutions</li>
                  </ul>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
