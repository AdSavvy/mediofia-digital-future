import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Zap, Globe, TrendingUp, Award, Sparkles, Rocket, Brain } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import servicesMarketing from '@/assets/services-marketing.jpg';
import servicesDev from '@/assets/services-dev.jpg';
import servicesAi from '@/assets/services-ai.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-2000">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital transformation" 
            className="w-full h-full object-cover opacity-30 scale-110 animate-breath"
          />
          <div className="absolute inset-0 hero-gradient animate-gradient-shift" />
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-float-complex" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float-complex" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* 3D Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center'
          }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">AI-Powered Growth Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight preserve-3d">
            <span className="block mb-2 animate-slide-up">Transform Your Business</span>
            <span className="block gradient-text glow-text animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Into a Digital Powerhouse
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Where creativity meets technology. We build stunning digital experiences that convert visitors into customers and scale brands globally through data-driven strategies and AI innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="cyber" size="xl" asChild>
              <Link to="/case-studies">
                <TrendingUp className="w-5 h-5" />
                View Success Stories
              </Link>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '250+', label: 'Clients Worldwide' },
              { value: '15+', label: 'Years Experience' },
              { value: '500%', label: 'Avg ROI Growth' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 hover-lift">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-10">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 glow-border">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow" />
          </div>
        </div>
      </section>

      {/* Why Choose Mediofia */}
      <section className="py-32 container mx-auto px-4 relative">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Experience <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just deliver services – we create digital transformations that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {[
            { icon: Award, title: '15+ Years Combined Expertise', desc: 'Deep industry knowledge across all digital channels', color: 'from-blue-500/20 to-purple-500/20' },
            { icon: Target, title: '360° Digital Solutions', desc: 'Complete services from strategy to execution', color: 'from-purple-500/20 to-pink-500/20' },
            { icon: TrendingUp, title: 'ROI-Focused Strategies', desc: 'Every decision backed by data and results', color: 'from-pink-500/20 to-blue-500/20' },
            { icon: Users, title: '250+ Global Clients', desc: 'Proven track record of client success', color: 'from-blue-500/20 to-cyan-500/20' },
            { icon: Globe, title: 'Worldwide Coverage', desc: 'World-class talent, accessible anywhere', color: 'from-cyan-500/20 to-purple-500/20' },
            { icon: Zap, title: 'AI-Powered Innovation', desc: 'Cutting-edge automation and intelligence', color: 'from-purple-500/20 to-blue-500/20' },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative preserve-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="glass-card card-3d spotlight text-center h-full relative overflow-hidden border-primary/20">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Icon */}
                <div className="flex justify-center mb-6 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/30 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{item.desc}</p>
                
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 holographic opacity-30 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Powerful <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital services designed to accelerate your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {[
              {
                image: servicesMarketing,
                title: 'SEO & Performance Marketing',
                desc: 'Drive organic traffic and maximize ROI with data-driven campaigns across all platforms.',
                gradient: 'from-blue-600/20 to-cyan-600/20'
              },
              {
                image: servicesDev,
                title: 'Web & App Development',
                desc: 'Custom websites, e-commerce platforms, and mobile apps built for scale and performance.',
                gradient: 'from-purple-600/20 to-pink-600/20'
              },
              {
                image: servicesAi,
                title: 'AI Automation & Virtual Agents',
                desc: 'Streamline operations with intelligent chatbots, predictive analytics, and workflow automation.',
                gradient: 'from-pink-600/20 to-blue-600/20'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative preserve-3d"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="glass-card card-3d overflow-hidden border-primary/20 h-full relative">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 p-3 rounded-xl glass border border-primary/30 backdrop-blur-xl group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 relative">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 mb-6 transition-colors">
                      {service.desc}
                    </p>
                    
                    <Button variant="neon" size="lg" asChild className="w-full group/btn">
                      <Link to="/services">
                        Explore Service
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-32 container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 perspective-1000">
          {[
            {
              stat: '15x',
              title: 'E-Commerce Growth',
              desc: 'Shopify store scaled from $10K → $150K/mo in just 90 days through strategic SEO and paid ads.',
              gradient: 'from-blue-600/20 to-purple-600/20'
            },
            {
              stat: '63%',
              title: 'Lower Cost-Per-Lead',
              desc: 'Local business reduced acquisition costs by 63% while increasing lead quality by 40%.',
              gradient: 'from-purple-600/20 to-pink-600/20'
            }
          ].map((story, index) => (
            <Card key={index} className="glass-card card-3d p-10 relative overflow-hidden group border-primary/20">
              {/* Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
              
              {/* Stat Number */}
              <div className="relative mb-6">
                <div className="text-7xl md:text-8xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform inline-block">
                  {story.stat}
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 text-lg leading-relaxed transition-colors">
                {story.desc}
              </p>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="xl" asChild className="group">
            <Link to="/case-studies">
              View All Success Stories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
            {[
              {
                quote: "Mediofia grew our ROI by 5x in 2 months. Their team just gets it.",
                author: "Sarah Johnson",
                role: "CEO, E-Commerce Brand",
                gradient: 'from-blue-600/10 to-cyan-600/10'
              },
              {
                quote: "The best digital marketing partner we've ever worked with. Results speak for themselves.",
                author: "Michael Chen",
                role: "Founder, Tech Startup",
                gradient: 'from-purple-600/10 to-pink-600/10'
              },
              {
                quote: "From strategy to execution, Mediofia delivered beyond our expectations.",
                author: "Emma Williams",
                role: "Marketing Director, SaaS Company",
                gradient: 'from-pink-600/10 to-blue-600/10'
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="glass-card card-3d p-8 relative overflow-hidden group border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Quote Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl text-primary/30 font-serif leading-none">"</div>
                  <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-full blur-2xl" />
                </div>
                
                {/* Quote Text */}
                <p className="text-lg mb-8 italic leading-relaxed group-hover:text-white transition-colors relative z-10">
                  {testimonial.quote}
                </p>
                
                {/* Author Info */}
                <div className="border-t border-primary/20 pt-6 relative z-10">
                  <p className="font-bold text-lg mb-1">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                    {testimonial.role}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 container mx-auto px-4 relative">
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float-complex" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float-complex" style={{ animationDelay: '3s' }} />
        
        <div className="relative">
          <Card className="glass-card neon-border text-center p-12 md:p-16 max-w-5xl mx-auto relative overflow-hidden perspective-1000 border-primary/30">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-gradient-shift -z-10" />
            
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6">
                <Rocket className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Ready to Start?</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Let's Build Your{' '}
                <span className="gradient-text glow-text block mt-2">Growth Engine</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Get a free 30-minute strategy consultation with our experts and discover your growth potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/contact">
                    <Rocket className="w-5 h-5" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/services">
                    Explore All Services
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-primary/20">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">250+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="w-px h-8 bg-primary/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="w-px h-8 bg-primary/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">500%</div>
                  <div className="text-sm text-muted-foreground">Avg ROI Growth</div>
                </div>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-[100px]" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-tl-[100px]" />
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
