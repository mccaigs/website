import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin,
  Star,
  Building2,
  School,
  BookOpen
} from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { Link } from 'react-router-dom';

export function Brands() {
  const universityCases = caseStudies.filter(cs => cs.type === 'University');
  const schoolCases = caseStudies.filter(cs => cs.type === 'School');
  const trainingCases = caseStudies.filter(cs => cs.type === 'Training Center');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Award className="h-3 w-3 mr-1" />
                Success Stories
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <MapPin className="h-3 w-3 mr-1" />
                Scotland & Beyond
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted by Leading
              <span className="block text-blue-700">Educational Institutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From universities to schools across Scotland and beyond, educational institutions choose McCaigs AI for transformative results and unmatched value. See how our "buy once, own forever" approach is changing education.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">50+</div>
                <div className="text-sm text-gray-600">Partner Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">100k+</div>
                <div className="text-sm text-gray-600">Students Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">£0</div>
                <div className="text-sm text-gray-600">Recurring Costs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories by Category */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories Across All Educational Sectors
            </h2>
            <p className="text-xl text-gray-600">
              See how different types of institutions are benefiting from our AI educational platforms
            </p>
          </div>

          <Tabs defaultValue="universities" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="universities" className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4" />
                <span>Universities</span>
              </TabsTrigger>
              <TabsTrigger value="schools" className="flex items-center space-x-2">
                <School className="h-4 w-4" />
                <span>Schools</span>
              </TabsTrigger>
              <TabsTrigger value="training" className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Training Centers</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="universities" className="space-y-8">
              {universityCases.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <GraduationCap className="h-6 w-6 text-blue-700" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{caseStudy.institution}</CardTitle>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="h-3 w-3" />
                                <span>{caseStudy.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {caseStudy.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                          <ul className="space-y-1">
                            {caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-center space-x-2 text-gray-600">
                                <TrendingUp className="h-4 w-4 text-green-600" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                    
                    <div className="bg-slate-50 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-700 italic mb-4 text-center">
                          "{caseStudy.testimonial}"
                        </blockquote>
                        
                        <div className="text-center">
                          <p className="font-medium text-gray-900">{caseStudy.contactName}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="w-full justify-center bg-green-100 text-green-800">
                          Zero Ongoing Costs Since Implementation
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="schools" className="space-y-8">
              {schoolCases.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                              <School className="h-6 w-6 text-green-700" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{caseStudy.institution}</CardTitle>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="h-3 w-3" />
                                <span>{caseStudy.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {caseStudy.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                          <ul className="space-y-1">
                            {caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-center space-x-2 text-gray-600">
                                <TrendingUp className="h-4 w-4 text-green-600" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                    
                    <div className="bg-slate-50 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-700 italic mb-4 text-center">
                          "{caseStudy.testimonial}"
                        </blockquote>
                        
                        <div className="text-center">
                          <p className="font-medium text-gray-900">{caseStudy.contactName}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="w-full justify-center bg-green-100 text-green-800">
                          Budget-Friendly Forever Ownership
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="training" className="space-y-8">
              {trainingCases.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="h-6 w-6 text-orange-700" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{caseStudy.institution}</CardTitle>
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="h-3 w-3" />
                                <span>{caseStudy.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            {caseStudy.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                          <ul className="space-y-1">
                            {caseStudy.results.map((result, index) => (
                              <li key={index} className="flex items-center space-x-2 text-gray-600">
                                <TrendingUp className="h-4 w-4 text-green-600" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                    
                    <div className="bg-slate-50 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-center space-x-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-700 italic mb-4 text-center">
                          "{caseStudy.testimonial}"
                        </blockquote>
                        
                        <div className="text-center">
                          <p className="font-medium text-gray-900">{caseStudy.contactName}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="w-full justify-center bg-green-100 text-green-800">
                          Perfect for Budget-Conscious Training
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Impact Across Scotland and Beyond
            </h2>
            <p className="text-xl opacity-90">
              Real results from real educational institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-blue-200">Average increase in student engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-blue-200">Reduction in administrative workload</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-blue-200">Improvement in course completion rates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">£500k+</div>
              <div className="text-blue-200">Total subscription savings across partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Scotland's Leading Educational Institutions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See why over 50 institutions across Scotland and beyond trust McCaigs AI for their educational technology needs. Schedule a demo to discover how our platforms can transform your institution.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild className="bg-blue-700 hover:bg-blue-800">
                <Link to="/contact">Schedule Your Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/models">Explore Our Platforms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}