"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#ff4f00]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to maximize your AI potential? Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="h-fit bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Contact <span className="text-[#ff4f00]">Information</span>
              </CardTitle>
              <CardDescription className="text-gray-400">Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#ff4f00] bg-opacity-20 p-3 rounded-full border border-[#ff4f00] border-opacity-30">
                  <Mail className="h-6 w-6 text-[#ff4f00]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300">hello@maximisedai.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#ff4f00] bg-opacity-20 p-3 rounded-full border border-[#ff4f00] border-opacity-30">
                  <Phone className="h-6 w-6 text-[#ff4f00]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#ff4f00] bg-opacity-20 p-3 rounded-full border border-[#ff4f00] border-opacity-30">
                  <MapPin className="h-6 w-6 text-[#ff4f00]" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300">Global Remote Services</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Send us a <span className="text-[#ff4f00]">Message</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="text-white font-medium">
                    Inquiry Type *
                  </Label>
                  <Select name="inquiryType" required>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-[#ff4f00] focus:ring-[#ff4f00]">
                      <SelectValue placeholder="Select inquiry type" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem
                        value="ai-consultation"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        AI Consultation
                      </SelectItem>
                      <SelectItem
                        value="automation"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Process Automation
                      </SelectItem>
                      <SelectItem
                        value="training"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        AI Training & Workshops
                      </SelectItem>
                      <SelectItem
                        value="integration"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        System Integration
                      </SelectItem>
                      <SelectItem
                        value="support"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Technical Support
                      </SelectItem>
                      <SelectItem
                        value="partnership"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Partnership Opportunities
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white font-medium">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Brief description of your inquiry"
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us more about your project, goals, and how we can help..."
                    className="min-h-[120px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#ff4f00] focus:ring-[#ff4f00] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-white font-medium">
                    Project Budget (Optional)
                  </Label>
                  <Select name="budget">
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-[#ff4f00] focus:ring-[#ff4f00]">
                      <SelectValue placeholder="Select budget range" className="text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem
                        value="under-10k"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Under $10,000
                      </SelectItem>
                      <SelectItem
                        value="10k-25k"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        $10,000 - $25,000
                      </SelectItem>
                      <SelectItem
                        value="25k-50k"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        $25,000 - $50,000
                      </SelectItem>
                      <SelectItem
                        value="50k-100k"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        $50,000 - $100,000
                      </SelectItem>
                      <SelectItem
                        value="over-100k"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Over $100,000
                      </SelectItem>
                      <SelectItem
                        value="discuss"
                        className="text-white hover:bg-gray-700 focus:bg-[#ff4f00] focus:text-white"
                      >
                        Prefer to discuss
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ff4f00] hover:bg-[#e6470a] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-0"
                >
                  Send Message
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}