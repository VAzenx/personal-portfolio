import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';

const Blog = () => {
    useEffect(() => {
    document.title = 'Wutthipong | Blog';
    }, []);

    const featuredPosts = [
    {
        id: 1,
        title: 'Building Modern Web Applications with React',
        excerpt: 'Learn how to build scalable web applications using React and modern tooling',
        date: '2025-04-05',
        category: 'Development',
        imageUrl: '/placeholder.svg',
        slug: 'building-modern-web-apps'
    },
    {
        id: 2,
        title: 'Designing User-Friendly Interfaces',
        excerpt: 'Principles and practices for creating intuitive user experiences',
        date: '2025-03-22',
        category: 'Design',
        imageUrl: '/placeholder.svg',
        slug: 'designing-user-friendly-interfaces'
    }
];

const recentPosts = [
    {
      id: 3,
      title: 'The Future of Web Animation',
      excerpt: 'Exploring new animation techniques for engaging user experiences',
      date: '2025-04-01',
      category: 'Animation',
      imageUrl: '/placeholder.svg',
      slug: 'future-of-web-animation'
    },
    {
      id: 4,
      title: 'Optimizing Performance in JavaScript Apps',
      excerpt: 'Tips and tricks for making your JavaScript applications blazing fast',
      date: '2025-03-18',
      category: 'Performance',
      imageUrl: '/placeholder.svg',
      slug: 'optimizing-javascript-performance'
    },
    {
      id: 5,
      title: 'Leveraging CSS Grid for Complex Layouts',
      excerpt: 'How to use CSS Grid to create complex web layouts with ease',
      date: '2025-03-10',
      category: 'CSS',
      imageUrl: '/placeholder.svg',
      slug: 'css-grid-layouts'
    }
  ];

  const tutorialPosts = [
    {
      id: 6,
      title: 'Creating Custom React Hooks',
      excerpt: 'A step-by-step guide to creating your own custom React hooks',
      date: '2025-02-28',
      category: 'React',
      imageUrl: '/placeholder.svg',
      slug: 'custom-react-hooks'
    },
    {
      id: 7,
      title: 'Introduction to TypeScript for JavaScript Developers',
      excerpt: 'A gentle introduction to TypeScript for JavaScript developers',
      date: '2025-02-15',
      category: 'TypeScript',
      imageUrl: '/placeholder.svg',
      slug: 'typescript-introduction'
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <Navbar />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 heading-gradient">
              Blog
            </h1>
            <p className="text-lg mb-12 text-portfolio-slate dark:text-gray-300 max-w-3xl">
              Thoughts, stories, and ideas about web development, design, and technology.
            </p>
            
            <BlogSection title="Featured Stories" posts={featuredPosts} variant="featured" />
            <BlogSection title="Recent Articles" posts={recentPosts} variant="grid" />
            <BlogSection title="Tutorials & Guides" posts={tutorialPosts} variant="list" />
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
