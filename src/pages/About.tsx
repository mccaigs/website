import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureCard } from '@/components/ui/feature-card';
import { 
  MapPin, 
  Users, 
  Target, 
  Heart, 
  GraduationCap,
  Brain,
  Shield,
  TrendingUp,
  Award,
  Building
} from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <MapPin className="h-3 w-3 mr-1" />
                  Founded in Edinburgh
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <GraduationCap className="h-3 w-3 mr-1" />
                  Education First
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Education
                <span className="block text-blue-700">From the Heart of Scotland</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                McCaigs AI was founded in Edinburgh with a simple belief: educational technology should empower institutions, not burden them with endless subscriptions. We create AI platforms that you buy once and own forever.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-700">50+</div>
                  <div className="text-sm text-gray-600">Educational Institutions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-700">100k+</div>
                  <div className="text-sm text-gray-600">Students Impacted</div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg"
                alt="Edinburgh skyline with educational technology"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We exist to democratize educational AI technology, making powerful learning tools accessible to institutions of all sizes without the burden of recurring costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="To eliminate subscription fatigue in educational technology by providing AI platforms you buy once and own forever, with free lifetime updates."
            />
            
            <FeatureCard
              icon={Heart}
              title="Education First"
              description="Every feature is designed with educators in mind. We understand the unique challenges facing schools and universities in the modern age."
            />
            
            <FeatureCard
              icon={Shield}
              title="Trust & Transparency"
              description="No hidden fees, no surprise price increases. What you pay upfront is all you'll ever pay, with free updates for life."
            />
            
            <FeatureCard
              icon={Users}
              title="Partnership Approach"
              description="We don't just sell software - we partner with educational institutions to ensure long-term success and continuous improvement."
            />
          </div>
        </div>
      </section>

      {/* Edinburgh Heritage */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg"
                alt="Edinburgh Castle and Old Town"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Building className="h-3 w-3 mr-1" />
                  Edinburgh Heritage
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rooted in Edinburgh's
                <span className="block text-blue-700">Educational Excellence</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Edinburgh has been at the forefront of educational innovation for centuries. From the University of Edinburgh's pioneering research to the city's rich academic heritage, we draw inspiration from Scotland's commitment to learning and knowledge.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team combines this educational heritage with cutting-edge AI research, creating solutions that honour tradition whilst embracing innovation. We understand British and international educational standards because we're part of this community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-700">Deep understanding of UK educational standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-700">Strong partnerships with local universities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-blue-700" />
                  <span className="text-gray-700">Access to world-class AI research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why "Buy Once, Own Forever"?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe educational institutions deserve better than the endless cycle of subscription payments that drain budgets and create uncertainty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <CardTitle className="text-red-600">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Educational institutions face mounting subscription costs that increase year over year. Budget constraints force difficult choices between technology and other essential needs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-blue-200">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-blue-700" />
                  </div>
                </div>
                <CardTitle className="text-blue-700">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pay once, own forever. Our AI platforms include free lifetime updates, ensuring you always have access to the latest features without additional costs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-green-600">The Result</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Predictable costs, owned technology, and continuous improvement. Focus your budget on what matters most - educating students and supporting teachers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Edinburgh Team
            </h2>
            <p className="text-xl text-gray-600">
              Education specialists and AI experts working together to transform learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-700" />
                  </div>
                </div>
                <CardTitle>Dr. Andrew McCaig</CardTitle>
                <CardDescription>Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Former Head of Digital Learning at University of Edinburgh with 15 years in educational technology and AI research.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline">Education PhD</Badge>
                  <Badge variant="outline">AI Research</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                    <Brain className="h-10 w-10 text-green-700" />
                  </div>
                </div>
                <CardTitle>Dr. Sarah Edinburgh</CardTitle>
                <CardDescription>Chief Technology Officer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  AI specialist with expertise in machine learning for education. Previously worked on adaptive learning systems at Edinburgh's AI research labs.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">EdTech</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">
                  <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-orange-700" />
                  </div>
                </div>
                <CardTitle>Prof. James Wilson</CardTitle>
                <CardDescription>Head of Educational Research</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Educational psychologist and former teacher with deep expertise in learning theory and student assessment methodologies.
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline">Psychology</Badge>
                  <Badge variant="outline">Assessment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}