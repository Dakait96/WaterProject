'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Droplets, Shield, Recycle, Star, CheckCircle, ArrowRight, Play, Award, Users, Globe, Leaf, Heart, TrendingUp } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  features: string[];
  badge?: string;
  rating: number;
  reviews: number;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  verified: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const featuredProducts: Product[] = [
    {
      id: '1',
      name: "Pure Spring 500ml",
      price: "$2.99",
      originalPrice: "$3.99",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
      features: ["Natural Spring Water", "BPA-Free Bottle", "Recyclable"],
      badge: "Best Seller",
      rating: 4.8,
      reviews: 2847
    },
    {
      id: '2',
      name: "Alkaline Plus 1L",
      price: "$4.99",
      originalPrice: "$6.49",
      image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=400&fit=crop",
      features: ["pH 8.5+", "Electrolyte Enhanced", "Premium Glass"],
      badge: "Premium",
      rating: 4.9,
      reviews: 1923
    },
    {
      id: '3',
      name: "Sport Hydration 750ml",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1594736797933-d0ce71a7f600?w=400&h=400&fit=crop",
      features: ["Isotonic Formula", "Fast Absorption", "Sport Cap"],
      badge: "New",
      rating: 4.7,
      reviews: 856
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Sarah Johnson",
      role: "Fitness Enthusiast & Nutritionist",
      content: "AquaPure has completely transformed my hydration routine. The taste is incredibly clean and refreshing, and I love knowing it comes from pristine natural springs. My clients always ask what water I recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b03c?w=100&h=100&fit=crop",
      verified: true
    },
    {
      id: '2',
      name: "Mike Chen",
      role: "Restaurant Owner",
      content: "We switched to AquaPure for our restaurant six months ago, and our customers constantly compliment the water quality. It's become a point of pride for us. The premium packaging also elevates our dining experience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      verified: true
    },
    {
      id: '3',
      name: "Lisa Rodriguez",
      role: "Health Coach & Wellness Expert",
      content: "As a health coach, I'm very particular about what I recommend to my clients. AquaPure's alkaline water has the perfect mineral balance, and the eco-friendly packaging aligns perfectly with our values.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      verified: true
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: "The Science Behind Alkaline Water: Benefits and Myths",
      excerpt: "Discover the real health benefits of alkaline water and separate fact from fiction in our comprehensive guide.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      author: "Dr. Emma Thompson",
      date: "March 15, 2024",
      category: "Health",
      readTime: "8 min read"
    },
    {
      id: '2',
      title: "Sustainable Packaging: Our Journey to Zero Waste",
      excerpt: "Learn how AquaPure is leading the industry in sustainable packaging solutions and environmental responsibility.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      author: "Green Team",
      date: "March 10, 2024",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: '3',
      title: "Hydration for Athletes: Performance and Recovery",
      excerpt: "Professional insights on optimal hydration strategies for peak athletic performance and faster recovery.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      author: "Coach Martinez",
      date: "March 5, 2024",
      category: "Sports",
      readTime: "10 min read"
    }
  ];

  const stats = [
    { number: "50M+", label: "Bottles Sold", icon: <Droplets className="h-6 w-6" /> },
    { number: "99.9%", label: "Purity Level", icon: <Shield className="h-6 w-6" /> },
    { number: "100%", label: "Recyclable", icon: <Recycle className="h-6 w-6" /> },
    { number: "25K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌿 Now 100% Carbon Neutral Delivery
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Pure Water,
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl">Pure Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate in hydration with our premium spring water, 
              sourced from pristine natural springs and delivered fresh to your door. 
              <span className="block mt-2 text-lg md:text-xl text-gray-500">
                Join over 25,000 customers who trust AquaPure for their daily hydration needs.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/products">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <button 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-2"
                onClick={() => setIsVideoPlaying(true)}
              >
                <Play className="h-5 w-5" />
                <span>Watch Our Story</span>
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-gold-500" />
                <span className="text-sm font-medium">FDA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">100% Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium">Customer Loved</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">Fast Growing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-500"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose AquaPure?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every drop is a testament to our commitment to quality, sustainability, and your health. 
              Here's what makes us different from ordinary water brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Droplets className="h-12 w-12 text-blue-600" />,
                title: "Premium Spring Source",
                description: "Sourced from protected natural springs in the Colorado Rockies, our water travels through layers of volcanic rock for over 100 years, naturally filtering and enriching it with essential minerals.",
                details: ["Natural pH balance 7.2-7.8", "Rich in natural minerals", "Zero artificial additives", "Tested 300+ times daily"]
              },
              {
                icon: <Shield className="h-12 w-12 text-green-600" />,
                title: "Health & Safety Certified",
                description: "Rigorously tested and certified by multiple health authorities including FDA, NSF, and independent laboratories. Our state-of-the-art facility ensures consistent quality and safety.",
                details: ["FDA approved facility", "NSF International certified", "BPA-free packaging", "Regular third-party testing"]
              },
              {
                icon: <Recycle className="h-12 w-12 text-purple-600" />,
                title: "100% Sustainable",
                description: "Leading the industry in environmental responsibility with carbon-neutral delivery, 100% recyclable packaging, and partnerships with environmental conservation organizations.",
                details: ["Carbon-neutral shipping", "100% recyclable bottles", "Renewable energy facility", "Ocean cleanup partnerships"]
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Quality Process</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From source to bottle, every step is carefully monitored to ensure you receive the purest water possible.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Natural Filtration", desc: "100+ years through volcanic rock" },
                { step: "02", title: "Quality Testing", desc: "300+ daily purity tests" },
                { step: "03", title: "Eco Bottling", desc: "BPA-free sustainable packaging" },
                { step: "04", title: "Fresh Delivery", desc: "Carbon-neutral shipping" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h4 className="font-semibold mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular water bottles, each crafted for different lifestyles and needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100">
                {product.badge && (
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-red-100 text-red-600' :
                      product.badge === 'Premium' ? 'bg-purple-100 text-purple-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {product.badge}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                )}
                <div className="aspect-square mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                    Add to Cart
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">Join over 25,000 satisfied customers who trust AquaPure</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
                      <div className="flex items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center mb-2">
                            <h4 className="font-bold text-lg mr-2">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <CheckCircle className="h-5 w-5 text-blue-600" xlinkTitle="Verified Customer" />
                            )}
                          </div>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed about health, sustainability, and hydration
              </p>
            </div>
            <Link href="/blog">
              <button className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                View All Posts
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/blog">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                View All Posts
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Pure Hydration?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of customers who have made the switch to premium, sustainable water
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}