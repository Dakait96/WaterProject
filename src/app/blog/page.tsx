'use client'

import React, { useState } from 'react';
import { Search, Filter, Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Science Behind Alkaline Water: Benefits and Myths Debunked',
      excerpt: 'Discover the real health benefits of alkaline water and separate scientific fact from marketing fiction in our comprehensive research-based guide.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      author: 'Dr. Emma Thompson',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b03c?w=100&h=100&fit=crop',
      date: 'March 15, 2024',
      category: 'Health & Wellness',
      readTime: '8 min read',
      tags: ['alkaline water', 'health benefits', 'science', 'pH levels'],
      featured: true
    },
    {
      id: '2',
      title: 'Sustainable Packaging: Our Journey to Zero Waste Manufacturing',
      excerpt: 'Learn how AquaPure is pioneering the industry transition to fully sustainable packaging solutions and carbon-neutral operations.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
      author: 'Green Team',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      date: 'March 10, 2024',
      category: 'Sustainability',
      readTime: '6 min read',
      tags: ['sustainability', 'packaging', 'environment', 'zero waste'],
      featured: true
    },
    {
      id: '3',
      title: 'Hydration for Athletes: Performance and Recovery Optimization',
      excerpt: 'Professional insights on optimal hydration strategies for peak athletic performance, faster recovery, and injury prevention.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      author: 'Coach Martinez',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      date: 'March 5, 2024',
      category: 'Sports & Fitness',
      readTime: '10 min read',
      tags: ['sports hydration', 'athletics', 'performance', 'recovery'],
      featured: false
    },
    {
      id: '4',
      title: 'The Complete Guide to Water Quality Testing and Standards',
      excerpt: 'Understanding water quality metrics, testing procedures, and industry standards that ensure your water is safe and pure.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop',
      author: 'Dr. James Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      date: 'February 28, 2024',
      category: 'Quality & Safety',
      readTime: '12 min read',
      tags: ['water quality', 'testing', 'safety standards', 'purity'],
      featured: false
    },
    {
      id: '5',
      title: 'Spring Water vs Tap Water: A Comprehensive Comparison',
      excerpt: 'Explore the differences between spring water and tap water in terms of taste, mineral content, purity, and health benefits.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b03c?w=100&h=100&fit=crop',
      date: 'February 20, 2024',
      category: 'Education',
      readTime: '7 min read',
      tags: ['spring water', 'tap water', 'comparison', 'minerals'],
      featured: false
    },
       ]

       return(
        <>
        <h1>Blog</h1>
        </>
       )
}