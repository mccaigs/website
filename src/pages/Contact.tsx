import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Building2,
  MessageCircle,
  Calendar,
  Users,
  CheckCircle,
  Star
} from 'lucide-react';
import { ContactForm } from '@/types';

export function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
    interest: 'Demo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <MapPin className="h-3 w-3 mr-1" />
                Edinburgh Office
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <MessageCircle className="h-3 w-3 mr-1" />
                Local Support
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch
              <span className="block text-blue-700">with Our Edinburgh Team</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your educational institution with AI? Our Edinburgh-based team is here to help. Schedule a demo, discuss your needs, or learn more about our "buy once, own forever" approach.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Let's Discuss Your Educational AI Needs
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and one of our education specialists will get back to you within 24 hours.
                </p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Tell us about your institution and how we can help
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your.email@institution.ac.uk"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="organization">Institution Name *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder="Your school, university, or training center"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role">Your Role</Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) => handleChange('role', e.target.value)}
                          placeholder="e.g., IT Director, Head Teacher"
                        />
                      </div>
                      <div>
                        <Label htmlFor="interest">Interest Type</Label>
                        <Select onValueChange={(value) => handleChange('interest', value as ContactForm['interest'])}>
                          <SelectTrigger>
                            <SelectValue placeholder="What are you interested in?" />
                          </SelectTrigger>
                          <SelectContent className="max-w-[calc(100vw-2rem)] w-full">
                            <SelectItem value="Demo">Schedule a Demo</SelectItem>
                            <SelectItem value="Partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="Pricing">Pricing Information</SelectItem>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your institution's needs, number of students, current challenges, or any specific questions you have about our AI platforms..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-blue-700" />
                    <span>Edinburgh Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">McCaigs AI Ltd</p>
                      <p className="text-gray-600">
                        Royal Mile Innovation Centre<br />
                        Edinburgh EH1 1RE<br />
                        Scotland, UK
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">+44 131 XXX XXXX</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 9am-5pm GMT</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">hello@mccaigsai.com</p>
                      <p className="text-sm text-gray-600">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 5:00 PM GMT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM GMT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency Support:</strong> Available 24/7 for existing customers
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-700" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Quick Response</p>
                        <p className="text-sm text-gray-600">24-hour response guarantee</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Expert Consultation</p>
                        <p className="text-sm text-gray-600">Speak with education AI specialists</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Personalised Demo</p>
                        <p className="text-sm text-gray-600">Tailored to your institution's needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">No Pressure</p>
                        <p className="text-sm text-gray-600">Educational consultation, not sales pitch</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Partners Say About Working With Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>University of Edinburgh</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic mb-4">
                    "The McCaigs AI team's responsiveness and expertise made our implementation seamless. Their local Edinburgh presence meant they truly understood our needs."
                  </blockquote>
                  <p className="font-medium text-gray-900">Dr. Sarah Mitchell</p>
                  <p className="text-sm text-gray-600">Director of Digital Learning</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle>Royal High School</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-700 italic mb-4">
                    "Outstanding support throughout the entire process. The team is knowledgeable, friendly, and genuinely cares about educational outcomes."
                  </blockquote>
                  <p className="font-medium text-gray-900">Fiona MacLeod</p>
                  <p className="text-sm text-gray-600">Deputy Head Teacher</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Answers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers to Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get immediate answers to frequently asked questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can we get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most institutions can be up and running within 2-4 weeks after purchase, including training and data migration.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the lifetime updates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All feature updates, security patches, new AI capabilities, and platform improvements - forever, at no additional cost.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer training for our staff?</CardTitle>
              </CardHeader>
             <CardContent>
                <p className="text-gray-600">
                  Yes, comprehensive training is included with every purchase, plus ongoing support from our Edinburgh team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}