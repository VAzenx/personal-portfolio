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
        title: 'ความรู้สึกเมื่อรู้ว่าผมติดพระจอมเกล้าพระนครเหนือ คณะไอที',
        excerpt: 'ความรู้สึกเมื่อรู้ว่าผมติดพระจอมเกล้าพระนครเหนือ คณะไอที...',
        date: '2024-12-21',
        category: 'Development',
        imageUrl: 'https://fitm-5ee32.firebaseapp.com/FITM_curriculum/images/slider/nemo.jpg',
        slug: 'Kmutnb-IT'
    },

];

const recentPosts = [

  ];

  const tutorialPosts = [

  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <Navbar />
        <main className="pt-40 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 heading-gradient">
              Blog
            </h1>
            <p className="text-lg mb-12 text-portfolio-slate dark:text-gray-300 max-w-3xl noto-sans-thai">
            ความคิด เรื่องราว และไอเดียเกี่ยวกับการพัฒนาเว็บ การออกแบบ และเทคโนโลยี.
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
