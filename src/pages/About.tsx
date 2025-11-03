import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="gradient-text">Mediofia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Growth Partner in the Digital Era
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Founded by digital visionaries with a shared passion for innovation, Mediofia was born
              from the belief that every business deserves access to world-class digital marketing
              and technology solutions.
            </p>
            <p>
              We empower brands with future-ready marketing, development, and automation strategies
              that drive measurable growth. Our team combines decades of experience with cutting-edge
              AI technology to deliver results that exceed expectations.
            </p>
            <p>
              Today, we're proud to serve 250+ businesses worldwide, from ambitious startups to
              established enterprises, helping them navigate the digital landscape and achieve
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-muted-foreground italic mb-12">
              "Deliver measurable growth through creativity & technology."
            </p>
            <p className="text-lg text-muted-foreground">
              We're committed to combining human creativity, data precision, and AI innovation
              to scale brands worldwide. Every strategy we develop is rooted in understanding
              your unique challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core <span className="gradient-text">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: 'Results-Driven',
              desc: 'Every action is measured against clear, achievable goals'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'Embracing cutting-edge technology and creative solutions'
            },
            {
              icon: Heart,
              title: 'Integrity',
              desc: 'Transparent partnerships built on trust and honesty'
            },
            {
              icon: Eye,
              title: 'Transparency',
              desc: 'Clear communication and open reporting at every step'
            }
          ].map((value, index) => (
            <Card key={index} className="glass-card hover-lift text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Our global team brings together diverse expertise in digital marketing, web development,
              AI automation, and business strategy. We're passionate about helping businesses thrive
              in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: 'Digital Strategy Experts',
                count: '15+',
                desc: 'Certified professionals in SEO, PPC, and analytics'
              },
              {
                role: 'Creative Designers',
                count: '10+',
                desc: 'Award-winning designers and content creators'
              },
              {
                role: 'Tech Developers',
                count: '20+',
                desc: 'Full-stack developers and AI specialists'
              }
            ].map((team, index) => (
              <Card key={index} className="glass-card p-8 text-center">
                <div className="text-5xl font-bold gradient-text mb-4">{team.count}</div>
                <h3 className="text-xl font-semibold mb-2">{team.role}</h3>
                <p className="text-muted-foreground">{team.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <div className="glass-card neon-border text-center p-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business grow in the digital era.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
