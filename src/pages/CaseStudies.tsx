import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Brand Scaling',
      industry: 'E-Commerce',
      challenge: 'Shopify store struggling with $10K monthly revenue and high advertising costs',
      strategy: 'Implemented comprehensive SEO strategy, optimized product pages, launched targeted Meta and Google campaigns with advanced audience segmentation',
      results: [
        { label: 'Revenue Growth', value: '15x', icon: DollarSign },
        { label: 'Monthly Revenue', value: '$150K', icon: TrendingUp },
        { label: 'ROAS', value: '7.2x', icon: Target },
        { label: 'Timeline', value: '90 days', icon: Users }
      ],
      metric: '$10K → $150K/mo'
    },
    {
      title: 'Local Service Business Transformation',
      industry: 'Home Services',
      challenge: 'HVAC company with inconsistent leads and expensive cost per acquisition',
      strategy: 'Dominated local SEO, optimized Google Business Profile, launched hyper-targeted local service ads, implemented automated review generation',
      results: [
        { label: 'Cost Per Lead', value: '-63%', icon: DollarSign },
        { label: 'Lead Quality', value: '+40%', icon: Target },
        { label: 'Service Calls', value: '+180%', icon: TrendingUp },
        { label: 'Review Rating', value: '4.9★', icon: Users }
      ],
      metric: '63% Lower CPL'
    },
    {
      title: 'SaaS Product Launch Success',
      industry: 'Technology',
      challenge: 'New SaaS product with zero market presence and no inbound leads',
      strategy: 'Content marketing strategy, thought leadership campaign, strategic LinkedIn ads, demo optimization, trial nurture automation',
      results: [
        { label: 'Demo Requests', value: '3x', icon: Users },
        { label: 'Trial Conversions', value: '+45%', icon: TrendingUp },
        { label: 'MRR Growth', value: '$75K', icon: DollarSign },
        { label: 'Timeline', value: '120 days', icon: Target }
      ],
      metric: '0 → 250 Qualified Leads/mo'
    },
    {
      title: 'Healthcare Practice Growth',
      industry: 'Healthcare',
      challenge: 'Medical practice with declining new patient bookings and poor online visibility',
      strategy: 'Reputation management, healthcare-compliant content marketing, local SEO optimization, patient education video series',
      results: [
        { label: 'New Patients', value: '+85%', icon: Users },
        { label: 'Website Traffic', value: '4x', icon: TrendingUp },
        { label: 'Avg. Rating', value: '4.8★', icon: Target },
        { label: 'ROI', value: '520%', icon: DollarSign }
      ],
      metric: '+85% New Patients'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies transform their digital presence.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                      {study.industry}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.title}</h2>
                    <div className="text-2xl font-bold gradient-text">{study.metric}</div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Challenge & Strategy */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="text-destructive">⚠️</span> Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <span className="text-primary">💡</span> Strategy
                      </h3>
                      <p className="text-muted-foreground">{study.strategy}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-secondary">📊</span> Results
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="glass-card p-4 text-center group hover:bg-primary/5 transition-colors"
                        >
                          <result.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold gradient-text mb-1">
                            {result.value}
                          </div>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Overall <span className="gradient-text">Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '250+', label: 'Clients Served' },
              { value: '$50M+', label: 'Revenue Generated' },
              { value: '15x', label: 'Avg. ROI' },
              { value: '98%', label: 'Client Retention' }
            ].map((stat, index) => (
              <Card key={index} className="glass-card p-8 text-center hover-lift">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-card neon-border text-center p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Similar Results for Your Business
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create a custom strategy that delivers measurable growth for your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Start Your Success Story</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
