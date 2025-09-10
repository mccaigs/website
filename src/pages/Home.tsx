import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureCard } from '@/components/ui/feature-card';
import { 
  GraduationCap, 
  Brain, 
  Users, 
  TrendingUp, 
  Shield, 
  CheckCircle,
  Star,
  MapPin,
  Infinity
} from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center space-x-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <MapPin className="h-3 w-3 mr-1" />
                  Edinburgh, Scotland
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Infinity className="h-3 w-3 mr-1" />
                  Lifetime Updates
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Educational AI
                <span className="block text-blue-700">Built for Scotland</span>
              </h1>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-r-lg">
                <p className="text-xl md:text-2xl font-semibold text-orange-800 mb-2">
                  Buy Once, Use Forever
                </p>
                <p className="text-orange-700">
                  With Free Lifetime Updates - No Subscriptions, No Monthly Fees
                </p>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your educational institution with AI-powered platforms designed by education specialists in Edinburgh. Own your tools, don't rent them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link to="/models">Explore Our Platforms</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="AI Education Technology"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">AI Learning Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Educational Institutions Choose McCaigs AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for educators, by education specialists. Our Edinburgh-based team understands the unique challenges facing educational institutions today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Infinity}
              title="No Subscription Fatigue"
              description="Buy once and own forever. No monthly fees, no surprise price increases, no subscription cancellations. Your investment is protected with free lifetime updates."
              badge="Lifetime Value"
            />
            
            <FeatureCard
              icon={GraduationCap}
              title="Built for Education"
              description="Every feature designed specifically for educational institutions. From primary schools to universities, our platforms understand the unique needs of educators and students."
              badge="Education Focused"
            />
            
            <FeatureCard
              icon={MapPin}
              title="Edinburgh Innovation"
              description="Proudly based in Scotland's capital, we combine cutting-edge AI research with deep understanding of UK and international educational standards."
              badge="Scottish Heritage"
            />
            
            <FeatureCard
              icon={Brain}
              title="Adaptive AI Technology"
              description="Our AI adapts to individual learning styles, providing personalised experiences that improve student outcomes and engagement."
            />
            
            <FeatureCard
              icon={Shield}
              title="Data Protection First"
              description="GDPR compliant by design with enterprise-grade security. Your students' data remains protected with the highest privacy standards."
            />
            
            <FeatureCard
              icon={Users}
              title="Dedicated Support"
              description="Local Edinburgh support team with deep education expertise. We're not just a tech company - we're education partners."
            />
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Educational Institutions
            </h2>
            <p className="text-xl text-gray-600">
              From universities to schools across Scotland and beyond
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
                <CardTitle>University of Edinburgh</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  "McCaigs AI has transformed how we deliver education to our 35,000 students. The lifetime updates mean we're always current without additional costs."
                </CardDescription>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Dr. Sarah Mitchell, Director of Digital Learning</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-700" />
                  </div>
                </div>
                <CardTitle>Royal High School</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  "McCaigs AI's Edinburgh roots mean they truly understand Scottish education. Their lifetime support is exceptional."
                </CardDescription>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Fiona MacLeod, Deputy Head Teacher</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-orange-700" />
                  </div>
                </div>
                <CardTitle>Glasgow College</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  "The buy-once model was perfect for our budget constraints. Three years later, we're still receiving valuable updates."
                </CardDescription>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">James Robertson, Head of Assessment</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/brands">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Educational AI Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for every aspect of modern education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Brain className="h-16 w-16 text-blue-700" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  AI Tutor Pro
                  <Badge className="bg-blue-700 text-white">Buy Once</Badge>
                </CardTitle>
                <CardDescription>
                  Personalized AI tutoring that adapts to each student's learning style and pace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Adaptive learning algorithms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Real-time progress tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Multi-subject support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-green-700" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Smart LMS Edinburgh
                  <Badge className="bg-blue-700 text-white">Buy Once</Badge>
                </CardTitle>
                <CardDescription>
                  Comprehensive Learning Management System with AI-powered insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">AI content recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Automated grading system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Student engagement analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800">
              <Link to="/models">Explore All Platforms</Link>
            </Button>
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
            Join leading educational institutions across Scotland and beyond. Schedule a demo to see how our AI platforms can revolutionise your teaching and learning.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
              <Link to="/models">View Pricing</Link>
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-2">Trusted by educational institutions across Scotland</p>
            <div className="flex justify-center items-center space-x-6 opacity-60">
              <span className="text-sm">University of Edinburgh</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Royal High School</span>
              <span className="text-sm">•</span>
              <span className="text-sm">Glasgow College</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}