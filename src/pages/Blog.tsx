import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'AI in Marketing: The Future is Now',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing strategies and delivering unprecedented ROI.',
      category: 'AI & Technology',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      featured: true
    },
    {
      title: 'Google Ads Hacks for 2025',
      excerpt: 'Expert tips and strategies to maximize your Google Ads performance and reduce cost per acquisition.',
      category: 'Paid Advertising',
      date: 'Jan 12, 2025',
      readTime: '6 min read'
    },
    {
      title: 'SEO Trends You Can\'t Ignore',
      excerpt: 'Stay ahead of the curve with these essential SEO strategies for dominating search rankings in 2025.',
      category: 'SEO',
      date: 'Jan 10, 2025',
      readTime: '10 min read'
    },
    {
      title: 'Conversion Optimization Secrets',
      excerpt: 'Learn proven techniques to boost your website conversion rates and turn more visitors into customers.',
      category: 'CRO',
      date: 'Jan 8, 2025',
      readTime: '7 min read'
    },
    {
      title: 'E-Commerce Growth Playbook',
      excerpt: 'A comprehensive guide to scaling your online store from $10K to $100K+ monthly revenue.',
      category: 'E-Commerce',
      date: 'Jan 5, 2025',
      readTime: '12 min read'
    },
    {
      title: 'Social Media ROI Masterclass',
      excerpt: 'How to measure and maximize return on investment from your social media marketing efforts.',
      category: 'Social Media',
      date: 'Jan 3, 2025',
      readTime: '9 min read'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert advice, industry trends, and actionable strategies to grow your business
          </p>
          
          {/* Newsletter Signup */}
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              📩 Join 10,000+ Marketers
            </h3>
            <p className="text-muted-foreground mb-6">
              Get weekly growth insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-background/50"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 container mx-auto px-4">
        {/* Featured Post */}
        {posts[0].featured && (
          <Card className="glass-card overflow-hidden mb-12 hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
                <h2 className="text-4xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Button variant="hero" className="w-fit">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="glass-card p-12 text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    {posts[0].category}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Recent Posts Grid */}
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Card key={index} className="glass-card overflow-hidden hover-lift group cursor-pointer">
              <div className="p-6">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="link" className="p-0 group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['SEO', 'Paid Ads', 'Social Media', 'E-Commerce', 'AI & Tech', 'Analytics'].map((category) => (
              <Button key={category} variant="glass" className="h-20">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
