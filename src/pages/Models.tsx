import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  GraduationCap, 
  BarChart3, 
  FileText, 
  CheckCircle,
  Users,
  Building2,
  School,
  ArrowRight,
  Infinity,
  Shield
} from 'lucide-react';
import { educationalModels } from '@/data/models';
import { Link } from 'react-router-dom';

const iconMap = {
  'AI Tutoring': Brain,
  'LMS': GraduationCap,
  'Assessment': FileText,
  'Analytics': BarChart3,
};

export function Models() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredModels = selectedCategory === 'all' 
    ? educationalModels 
    : educationalModels.filter(model => model.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(educationalModels.map(m => m.category)))];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Infinity className="h-3 w-3 mr-1" />
                Buy Once, Own Forever
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Shield className="h-3 w-3 mr-1" />
                Free Lifetime Updates
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Educational
              <span className="block text-blue-700">AI Platforms</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI-powered educational solutions built specifically for institutions. Each platform is yours to own forever, with free lifetime updates and no subscription fees.
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                No Subscription Fatigue
              </h3>
              <p className="text-orange-700">
                Pay once and own your educational AI platforms forever. Never worry about budget constraints or unexpected cost increases again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Educational AI Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From AI tutoring to analytics - everything you need to transform education
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Platforms</TabsTrigger>
              <TabsTrigger value="AI Tutoring">AI Tutoring</TabsTrigger>
              <TabsTrigger value="LMS">Smart LMS</TabsTrigger>
              <TabsTrigger value="Assessment">Assessment</TabsTrigger>
              <TabsTrigger value="Analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationalModels.map((model) => {
                const IconComponent = iconMap[model.category];
                return (
                  <Card key={model.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-slate-200 transition-all duration-300">
                      <IconComponent className="h-16 w-16 text-blue-700" />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{model.name}</CardTitle>
                        <Badge className="bg-blue-700 text-white">
                          Buy Once
                        </Badge>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {model.category}
                      </Badge>
                      <CardDescription className="mt-2 text-base">
                        {model.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {model.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trusted By</h4>
                        <div className="flex flex-wrap gap-1">
                          {model.institutions.slice(0, 2).map((institution, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {institution}
                            </Badge>
                          ))}
                          {model.institutions.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{model.institutions.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                          <Link to="/contact">
                            Learn More & Get Demo
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
            
            {['AI Tutoring', 'LMS', 'Assessment', 'Analytics'].map((category) => (
              <TabsContent key={category} value={category} className="grid grid-cols-1 gap-8">
                {educationalModels
                  .filter((model) => model.category === category)
                  .map((model) => {
                    const IconComponent = iconMap[model.category];
                    return (
                      <Card key={model.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="p-6">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <IconComponent className="h-6 w-6 text-blue-700" />
                                </div>
                                <div>
                                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                                  <Badge variant="outline">{model.category}</Badge>
                                </div>
                              </div>
                              <CardDescription className="text-base">
                                {model.description}
                              </CardDescription>
                            </CardHeader>
                            
                            <CardContent className="p-0 space-y-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Complete Feature Set</h4>
                                <ul className="space-y-2">
                                  {model.features.map((feature, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                      <span className="text-gray-600">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Successfully Implemented At</h4>
                                <div className="flex flex-wrap gap-2">
                                  {model.institutions.map((institution, index) => (
                                    <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-800">
                                      {institution}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </div>
                          
                          <div className="bg-slate-50 p-6 flex flex-col justify-between">
                            <div className="space-y-4">
                              <div className="text-center">
                                <Badge className="bg-green-100 text-green-800 mb-4">
                                  <Infinity className="h-3 w-3 mr-1" />
                                  Lifetime Ownership
                                </Badge>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">One-time purchase price</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">Free lifetime updates</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">No subscription fees</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">Edinburgh-based support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span className="text-sm text-gray-700">Full source code access</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6 space-y-3">
                              <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                                <Link to="/contact">Request Demo & Pricing</Link>
                              </Button>
                              <Button variant="outline" asChild className="w-full">
                                <Link to="/brands">View Success Stories</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Institution Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Educational Institution
            </h2>
            <p className="text-xl text-gray-600">
              Our platforms are designed to meet the unique needs of different educational sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-700" />
                  </div>
                </div>
                <CardTitle>Universities & Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Comprehensive AI platforms that scale to serve thousands of students with advanced features for research and higher education.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Advanced AI tutoring systems</li>
                  <li>• Research-grade analytics</li>
                  <li>• Multi-department support</li>
                  <li>• Integration with existing systems</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <School className="h-8 w-8 text-green-700" />
                  </div>
                </div>
                <CardTitle>Schools & Academies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Age-appropriate AI solutions designed for primary and secondary education with intuitive interfaces and curriculum alignment.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Curriculum-aligned content</li>
                  <li>• Student progress tracking</li>
                  <li>• Parent engagement tools</li>
                  <li>• Safeguarding compliance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-orange-700" />
                  </div>
                </div>
                <CardTitle>Training Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Specialised platforms for vocational and professional training with industry-specific features and certifications.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Skills-based assessments</li>
                  <li>• Certification tracking</li>
                  <li>• Industry partnerships</li>
                  <li>• Competency mapping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Model */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why "Buy Once, Own Forever" 
                <span className="block text-blue-700">Makes Sense for Education</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Educational institutions need predictable budgets and long-term technology solutions. Our ownership model provides exactly that - no surprises, no subscription fatigue, just powerful AI tools that grow with your institution.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Predictable one-time investment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Free updates and improvements forever</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">No vendor lock-in or dependency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Edinburgh-based support and expertise</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-slate-50">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Comparison Example</h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Traditional Subscription Model</span>
                      <span className="text-red-600 font-semibold">Ongoing Cost</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      £500/month × 60 months = £30,000 + price increases
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">McCaigs AI Model</span>
                      <span className="text-green-600 font-semibold">One-time Cost</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      £15,000 one-time + £0 forever
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Save £15,000+ over 5 years
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Educational Institution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a personalised demo to see how our AI platforms can revolutionise teaching and learning at your institution. No subscriptions, no surprises - just powerful educational technology you'll own forever.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule Your Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
              <Link to="/brands">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}