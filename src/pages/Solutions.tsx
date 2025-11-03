import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Laptop, Home, Heart, GraduationCap, Wrench, Users } from 'lucide-react';

const Solutions = () => {
  const industries = [
    {
      icon: ShoppingCart,
      name: 'E-Commerce',
      pain: 'Low conversion rates and high cart abandonment',
      solution: 'Optimized product pages, retargeting campaigns, and conversion funnels',
      result: '150% increase in sales, 40% lower cart abandonment'
    },
    {
      icon: Laptop,
      name: 'SaaS / Tech',
      pain: 'Difficulty acquiring qualified leads and demonstrating value',
      solution: 'Targeted content marketing, demo optimization, and trial nurture sequences',
      result: '3x increase in qualified demo requests, 45% higher trial-to-paid conversion'
    },
    {
      icon: Home,
      name: 'Real Estate',
      pain: 'Generating quality leads in competitive local markets',
      solution: 'Hyperlocal SEO, virtual tours, and automated lead nurturing',
      result: '200% more qualified leads, 60% faster sales cycle'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      pain: 'Building trust and patient acquisition online',
      solution: 'Educational content, reputation management, and compliant advertising',
      result: '85% increase in new patient bookings, 4.8★ average rating'
    },
    {
      icon: GraduationCap,
      name: 'Education',
      pain: 'Low enrollment rates and poor student engagement',
      solution: 'Social proof campaigns, webinar funnels, and enrollment automation',
      result: '120% increase in course enrollments, 50% higher completion rates'
    },
    {
      icon: Wrench,
      name: 'Local Services',
      pain: 'Inconsistent lead flow and seasonal revenue gaps',
      solution: 'Local SEO dominance, Google Ads, and review generation',
      result: '180% more service calls, consistent year-round bookings'
    },
    {
      icon: Users,
      name: 'Influencers & Creators',
      pain: 'Monetizing audience and scaling brand partnerships',
      solution: 'Brand deal facilitation, digital product launches, and audience growth',
      result: '5x revenue growth, premium partnership opportunities'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Industry <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored strategies for your specific industry challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`glass-card overflow-hidden ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{industry.name}</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-destructive mb-2">Challenge:</h3>
                      <p className="text-muted-foreground">{industry.pain}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Our Solution:</h3>
                      <p className="text-muted-foreground">{industry.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Typical Results:</h3>
                      <p className="text-muted-foreground font-medium">{industry.result}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="glass-card p-8 text-center max-w-sm">
                    <div className="text-6xl font-bold gradient-text mb-4">
                      {index === 0 ? '150%' : index === 1 ? '3x' : index === 2 ? '200%' : '85%'}
                    </div>
                    <p className="text-muted-foreground">
                      {index === 0 && 'Average Sales Increase'}
                      {index === 1 && 'More Qualified Leads'}
                      {index === 2 && 'Lead Generation Growth'}
                      {index === 3 && 'New Patient Acquisition'}
                      {index === 4 && 'Enrollment Boost'}
                      {index === 5 && 'Service Request Increase'}
                      {index === 6 && 'Revenue Multiplier'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-card neon-border text-center p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Industry-Specific Results
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create a custom strategy for your industry and business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/case-studies">See Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
