'use client'

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, Users, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'general',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 8am-8pm EST',
      action: 'Call Now',
      color: 'blue'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'hello@aquapure.com',
      description: 'Response within 24 hours',
      action: 'Send Email',
      color: 'green'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      details: 'Chat with our team',
      description: 'Available 24/7',
      action: 'Start Chat',
      color: 'purple'
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Support Center',
      details: 'Help & Resources',
      description: 'Self-service options',
      action: 'Visit Center',
      color: 'orange'
    }
  ];

  const offices = [
    {
      city: 'Los Angeles',
      address: '123 Pure Springs Ave, Crystal City, CA 90210',
      phone: '+1 (555) 123-4567',
      email: 'la@aquapure.com',
      hours: 'Mon-Fri: 8am-6pm PST'
    },
    {
      city: 'New York',
      address: '456 Water Street, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@aquapure.com',
      hours: 'Mon-Fri: 9am-7pm EST'
    },
    {
      city: 'Austin',
      address: '789 Spring Lane, Austin, TX 73301',
      phone: '+1 (555) 456-7890',
      email: 'austin@aquapure.com',
      hours: 'Mon-Fri: 8am-5pm CST'
    }
  ];

  const faqs = [
    {
      question: 'What makes AquaPure water different?',
      answer: 'Our water is sourced from pristine natural springs and filtered naturally through volcanic rock for over 100 years, ensuring exceptional purity and taste.'
    },
    {
      question: 'Do you offer bulk ordering for businesses?',
      answer: 'Yes! We offer customized bulk ordering solutions for businesses, restaurants, and events. Contact our B2B team for special pricing.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also check your order status in your account dashboard.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied, contact us for a full refund or exchange.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about our products or need support? We're here to help you stay perfectly hydrated.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  method.color === 'green' ? 'bg-green-100 text-green-600' :
                  method.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{method.details}</p>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <button className={`w-full py-2 px-4 rounded-full font-medium transition-colors ${
                  method.color === 'blue' ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' :
                  method.color === 'green' ? 'bg-green-50 text-green-600 hover:bg-green-100' :
                  method.color === 'purple' ? 'bg-purple-50 text-purple-600 hover:bg-purple-100' :
                  'bg-orange-50 text-orange-600 hover:bg-orange-100'
                }`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="product">Product Question</option>
                        <option value="order">Order Support</option>
                        <option value="business">Business Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please provide as much detail as possible..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all flex items-center justify-center space-x-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Our Locations
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-lg mb-2">{office.city} Office</h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <MapPin className="h-4 w-4 mt-1 mr-2 text-gray-400 flex-shrink-0" />
                          {office.address}
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-400" />
                          {office.phone}
                        </p>
                        <p className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-400" />
                          {office.email}
                        </p>
                        <p className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View All FAQs →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}