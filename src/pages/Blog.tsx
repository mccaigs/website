import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Brain,
  GraduationCap
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const categoryIcons = {
  'AI Trends': Brain,
  'Education Tech': GraduationCap,
  'Case Study': TrendingUp,
  'Updates': BookOpen,
} as const;

const categoryColors = {
  'AI Trends': 'bg-blue-100 text-blue-800',
  'Education Tech': 'bg-green-100 text-green-800',
  'Case Study': 'bg-orange-100 text-orange-800',
  'Updates': 'bg-purple-100 text-purple-800',
} as const;

export function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <BookOpen className="h-3 w-3 mr-1" />
                Educational AI Insights
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Brain className="h-3 w-3 mr-1" />
                Edinburgh Expertise
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Educational AI
              <span className="block text-blue-700">Insights & Trends</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest developments in educational AI, success stories from institutions across Scotland, and insights from our Edinburgh-based team of education specialists.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  placeholder="Search articles..." 
                  className="flex-1" 
                />
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Articles
            </h2>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Editor's Choice
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => {
              const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons];
              return (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <div className="h-64 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge 
                      className={`absolute top-4 left-4 ${categoryColors[post.category as keyof typeof categoryColors]}`}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                    <Badge 
                      className="absolute top-4 right-4 bg-orange-500 text-white"
                    >
                      Featured
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-700 transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" asChild className="group/btn">
                        <Link to={`/blog/${post.id}`}>
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Deep insights into educational AI from our Edinburgh team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => {
              const CategoryIcon = categoryIcons[post.category as keyof typeof categoryIcons];
              return (
                <Card key={post.id} className="hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Badge 
                      className={`absolute top-3 left-3 ${categoryColors[post.category as keyof typeof categoryColors]}`}
                    >
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-blue-700 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" asChild className="text-blue-700 hover:text-blue-800 p-0 h-auto">
                          <Link to={`/blog/${post.id}`}>
                            Read more →
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find articles that match your interests and expertise level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryIcons).map(([category, IconComponent]) => {
              const postCount = blogPosts.filter(post => post.category === category).length;
              const categoryKey = category as keyof typeof categoryColors;
              return (
                <Card key={category} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[categoryKey].replace('text-', 'bg-').replace('-800', '-100')}`}>
                        <IconComponent className={`h-6 w-6 ${categoryColors[categoryKey].replace('bg-', 'text-').replace('-100', '-700')}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{postCount} articles</p>
                    <Button variant="ghost" size="sm" className="text-blue-700 hover:text-blue-800">
                      View Articles
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Educational AI Trends
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, success stories, and platform updates delivered to your inbox. No spam, just valuable educational AI content from our Edinburgh team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-gray-900" 
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              Join 500+ educational professionals staying informed about AI in education
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
