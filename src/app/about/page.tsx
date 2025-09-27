'use client'

import React from 'react';
import { Droplets, Users, Award, Globe, Leaf, Heart, Target, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to provide the purest water' },
    { year: '2019', title: 'First Production Facility', description: 'Opened our state-of-the-art bottling facility' },
    { year: '2020', title: '1M Bottles Sold', description: 'Reached our first million bottles milestone' },
    { year: '2021', title: 'Carbon Neutral', description: 'Achieved carbon-neutral production and delivery' },
    { year: '2022', title: 'Premium Line Launch', description: 'Introduced our alkaline and mineral-rich products' },
    { year: '2023', title: '25K+ Customers', description: 'Built a community of health-conscious customers' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded operations to serve customers worldwide' }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b03c?w=300&h=300&fit=crop',
      bio: 'Former environmental scientist with 15+ years in sustainable business practices.',
      linkedin: '#'
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Chief Quality Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'PhD in Water Chemistry, ensuring every drop meets our premium standards.',
      linkedin: '#'
    },
    {
      name: 'Emily Chen',
      role: 'Head of Sustainability',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Leading our mission for 100% sustainable packaging and carbon-neutral operations.',
      linkedin: '#'
    },
    {
      name: 'Michael Thompson',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: '20+ years in manufacturing and supply chain optimization.',
      linkedin: '#'
    }
  ];

  const values = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: 'Purity First',
      description: 'We never compromise on the quality and purity of our water, sourcing only from the most pristine natural springs.'
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: 'Environmental Responsibility',
      description: 'Our commitment to the planet drives every decision, from sustainable packaging to carbon-neutral operations.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Customer Care',
      description: 'Your health and satisfaction are at the heart of everything we do, from product development to customer service.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Community Impact',
      description: 'We believe in giving back to the communities that support us and protecting the water sources we share.'
    }
  ];

  const certifications = [
    { name: 'FDA Approved', icon: '🏛️', description: 'Certified by the Food and Drug Administration' },
    { name: 'NSF International', icon: '🔬', description: 'Independent testing and certification' },
    { name: 'Carbon Neutral', icon: '🌱', description: 'Verified carbon-neutral operations' },
    { name: 'BRC Grade A', icon: '⭐', description: 'Highest level of food safety certification' },
    { name: 'ISO 22000', icon: '📋', description: 'Food safety management system' },
    { name: 'Organic Certified', icon: '🌿', description: 'USDA Organic certification for natural processes' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About AquaPure</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Born from a passion for purity and a commitment to sustainability, 
            we're on a mission to deliver the world's finest water while protecting our planet.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span>Founded in 2018</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>25,000+ Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6" />
              <span>Global Reach</span>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At AquaPure, we believe that access to pure, clean water is a fundamental right. Our mission is to provide 
                the highest quality water while maintaining our commitment to environmental sustainability and community wellness.
              </p>
              <p className="text-gray-600 mb-8">
                Every bottle we produce is a testament to our dedication to purity, quality, and environmental responsibility. 
                We source our water from protected natural springs, use sustainable packaging, and operate with complete 
                transparency in all our processes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Quality First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">Sustainability</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" 
                alt="Pure mountain spring"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
                <div className="text-gray-600 font-medium">Bottles of Pure Water Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every bottle we produce
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">From a simple idea to a global mission</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="md:ml-20 bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">{milestone.year}</div>
                      <div className="text-sm text-gray-500 md:text-right">Milestone #{index + 1}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">The passionate people behind AquaPure's success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto space-x-1">
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">Trusted by leading certification bodies worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl mr-4">{cert.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the AquaPure Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the difference that comes from our commitment to purity, quality, and sustainability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Shop Our Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}