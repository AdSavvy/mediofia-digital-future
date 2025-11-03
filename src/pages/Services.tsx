import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Search,
  TrendingUp,
  Globe,
  Smartphone,
  Bot,
  Video,
  Palette,
  Users,
  BarChart,
  MessageSquare,
  Zap,
  Database
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Digital Marketing & Growth',
      icon: TrendingUp,
      services: [
        { name: 'SEO & Local SEO', icon: Search, desc: 'Dominate search results and drive organic traffic' },
        { name: 'Google / Meta / TikTok Ads', icon: BarChart, desc: 'High-converting paid campaigns across all platforms' },
        { name: 'Conversion Rate Optimization', icon: Zap, desc: 'Maximize conversions from existing traffic' },
        { name: 'Analytics & Data Strategy', icon: Database, desc: 'Data-driven insights for better decisions' },
      ]
    },
    {
      category: 'Social Media & Content Studio',
      icon: Video,
      services: [
        { name: 'Social Media Management', icon: MessageSquare, desc: 'Engaging content across all platforms' },
        { name: 'UGC & Video Production', icon: Video, desc: 'Authentic content that converts' },
        { name: 'Influencer Marketing', icon: Users, desc: 'Leverage creator networks for brand growth' },
        { name: 'Content Strategy', icon: Palette, desc: 'Strategic content that resonates with your audience' },
      ]
    },
    {
      category: 'Web, App & E-Commerce Development',
      icon: Globe,
      services: [
        { name: 'WordPress Development', icon: Globe, desc: 'Custom WordPress sites built for performance' },
        { name: 'Shopify & E-Commerce', icon: TrendingUp, desc: 'Scalable online stores that drive sales' },
        { name: 'Custom Web Applications', icon: Smartphone, desc: 'Bespoke solutions for unique business needs' },
        { name: 'Mobile App Development', icon: Smartphone, desc: 'Native and cross-platform mobile apps' },
      ]
    },
    {
      category: 'AI & Automation',
      icon: Bot,
      services: [
        { name: 'AI Chatbots & Virtual Agents', icon: Bot, desc: 'Intelligent automation for customer service' },
        { name: 'Predictive Analytics', icon: BarChart, desc: 'AI-powered insights for strategic planning' },
        { name: 'Workflow Automation', icon: Zap, desc: 'Streamline operations with smart automation' },
        { name: 'AI Content Generation', icon: Palette, desc: 'Scale content creation with AI assistance' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to drive your business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-12">
              <category.icon className="w-12 h-12 text-primary" />
              <h2 className="text-4xl font-bold">{category.category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="glass-card hover-lift group p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Future-Focused Services */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Future-Focused</span> Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'AR/VR Brand Experiences', desc: 'Immersive experiences that captivate audiences' },
              { title: 'Web3 Marketing', desc: 'Navigate the decentralized future' },
              { title: 'AI Video Influencers', desc: 'Synthetic creators for scalable content' },
              { title: 'Voice Search Optimization', desc: 'Optimize for the voice-first future' },
              { title: 'CDP Integration', desc: 'Unified customer data platforms' },
              { title: 'Metaverse Marketing', desc: 'Establish your presence in virtual worlds' }
            ].map((service, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-card neon-border text-center p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss which services are right for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
