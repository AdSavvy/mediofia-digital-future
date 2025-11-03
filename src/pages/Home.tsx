import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Zap, Globe, TrendingUp, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import servicesMarketing from '@/assets/services-marketing.jpg';
import servicesDev from '@/assets/services-dev.jpg';
import servicesAi from '@/assets/services-ai.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital transformation" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="gradient-text glow-text">Results-Driven</span>
            <br />
            Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            A full-stack marketing and IT agency helping brands grow through data, design, and automation —
            trusted by startups, SMEs, and global enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" asChild className="animate-pulse-glow">
              <Link to="/contact">
                🚀 Get Free Strategy Call
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/case-studies">📈 See Our Results</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Why Choose Mediofia */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose <span className="gradient-text">Mediofia</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Award, title: '15+ Years of Combined Expertise', desc: 'Deep industry knowledge across all digital channels' },
            { icon: Target, title: '360° Digital & Development Services', desc: 'Complete solutions from strategy to execution' },
            { icon: TrendingUp, title: 'ROI-Focused Strategies', desc: 'Every decision backed by data and results' },
            { icon: Users, title: 'Trusted by 250+ Businesses', desc: 'Proven track record of client success' },
            { icon: Globe, title: 'Global Remote Team', desc: 'World-class talent, accessible anywhere' },
            { icon: Zap, title: 'AI-Powered Solutions', desc: 'Cutting-edge automation and intelligence' },
          ].map((item, index) => (
            <Card
              key={index}
              className="glass-card hover-lift text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card hover-lift overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={servicesMarketing} 
                  alt="Digital Marketing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">SEO & Performance Marketing</h3>
                <p className="text-muted-foreground mb-4">
                  Drive organic traffic and maximize ROI with data-driven campaigns across all platforms.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="glass-card hover-lift overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={servicesDev} 
                  alt="Web Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Web & App Development</h3>
                <p className="text-muted-foreground mb-4">
                  Custom websites, e-commerce platforms, and mobile apps built for scale and performance.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="glass-card hover-lift overflow-hidden group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={servicesAi} 
                  alt="AI Automation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">AI Automation & Virtual Agents</h3>
                <p className="text-muted-foreground mb-4">
                  Streamline operations with intelligent chatbots, predictive analytics, and workflow automation.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/services">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card hover-lift p-8">
            <div className="text-6xl font-bold gradient-text mb-4">15x</div>
            <h3 className="text-2xl font-semibold mb-2">E-Commerce Growth</h3>
            <p className="text-muted-foreground">
              Shopify store scaled from $10K → $150K/mo in just 90 days through strategic SEO and paid ads.
            </p>
          </Card>
          <Card className="glass-card hover-lift p-8">
            <div className="text-6xl font-bold gradient-text mb-4">63%</div>
            <h3 className="text-2xl font-semibold mb-2">Lower Cost-Per-Lead</h3>
            <p className="text-muted-foreground">
              Local business reduced acquisition costs by 63% while increasing lead quality by 40%.
            </p>
          </Card>
        </div>
        <div className="text-center">
          <Button variant="gradient" size="lg" asChild>
            <Link to="/case-studies">
              View All Case Studies <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Mediofia grew our ROI by 5x in 2 months. Their team just gets it.",
                author: "Sarah Johnson",
                role: "CEO, E-Commerce Brand"
              },
              {
                quote: "The best digital marketing partner we've ever worked with. Results speak for themselves.",
                author: "Michael Chen",
                role: "Founder, Tech Startup"
              },
              {
                quote: "From strategy to execution, Mediofia delivered beyond our expectations.",
                author: "Emma Williams",
                role: "Marketing Director, SaaS Company"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-card neon-border text-center p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your <span className="gradient-text">Growth Engine</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your business? Get a free 30-minute strategy consultation with our experts.
          </p>
          <Button variant="hero" size="xl" asChild className="animate-pulse-glow">
            <Link to="/contact">
              Book a Free Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
