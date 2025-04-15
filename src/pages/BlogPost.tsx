import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import ScrollToTop from '@/components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const blogPosts = [
    {
      id: 1,
      title: 'ความรู้สึกเมื่อรู้ว่าผมติดพระจอมเกล้าพระนครเหนือ คณะไอที',
      excerpt: 'ความรู้สึกเมื่อรู้ว่าผมติดพระจอมเกล้าพระนครเหนือ คณะไอที...',
      content: `
        <p>ความรู้สึกเมื่อรู้ว่าผมติดพระจอมเกล้าพระนครเหนือ คณะไอที</p>
        <p>รู้สึกดีใจมากครับที่ติดพระจอมเกล้าพระนครเหนือ คณะไอที เพราะเป็นมหาวิทยาลัยที่มีชื่อเสียงและมีคุณภาพการศึกษาที่ดี</p>
        <p>การได้เรียนที่นี่จะเปิดโอกาสให้ผมได้เรียนรู้และพัฒนาทักษะในด้านเทคโนโลยีสารสนเทศอย่างเต็มที่</p>
        <p>นอกจากนี้ยังมีโอกาสได้ทำงานร่วมกับอาจารย์และเพื่อนๆ ที่มีความรู้ความสามารถ</p>
        <p>ซึ่งจะช่วยให้ผมเติบโตและพัฒนาตนเองได้อย่างรวดเร็ว</p>
        <p>ผมตั้งใจว่าจะใช้โอกาสนี้ให้เกิดประโยชน์สูงสุด</p>
      `,
      date: '2024-12-21',
      author: 'Wutthipong Wongwai',
      category: 'Moment',
      tags: ['Kmutnb IT', 'Network Engineer', 'Student'],
      imageUrl: 'https://fitm-5ee32.firebaseapp.com/FITM_curriculum/images/slider/nemo.jpg',
      slug: 'Kmutnb-IT'
    },
    ];

    const BlogPost = () => {
        const { slug } = useParams<{ slug: string }>();
        const navigate = useNavigate();
        const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
        
        useEffect(() => {
          // Find the post that matches the slug
          const foundPost = blogPosts.find(post => post.slug === slug);
          
          if (foundPost) {
            setPost(foundPost);
            document.title = `${foundPost.title} | Wutthipong Blog`;
          } else {
            // If post not found, show error toast and navigate back to blog
            toast({
              title: "Post not found",
              description: "The blog post you're looking for doesn't exist.",
              variant: "destructive"
            });
            navigate('/blog');
          }
        }, [slug, navigate]);

        if (!post) {
            return (
              <ThemeProvider>
                <div className="min-h-screen bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-accent dark:border-portfolio-darkAccent mx-auto"></div>
                    <p className="mt-4">Loading post...</p>
                  </div>
                </div>
              </ThemeProvider>
            );
          }

          return (
            <ThemeProvider>
              <div className="min-h-screen bg-background ">
                <CustomCursor />
                <Navbar />
                <main className="pt-24 pb-16">
                  <div className="container mx-auto px-4">
                    <Button 
                      variant="ghost" 
                      onClick={() => navigate('/blog')}
                      className="mb-6 group"
                    >
                      <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                      Back to Blog
                    </Button>
                    
                    <Card className="overflow-hidden border-none shadow-lg">
                      <div className="h-64 md:h-80 bg-portfolio-lightBlue dark:bg-portfolio-navy overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover "
                        />
                      </div>
                      
                      <div className="p-6 md:p-10 max-w-4xl mx-auto noto-sans-thai">
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-portfolio-slate dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          
                          <div className="flex items-center">
                            <Tag size={16} className="mr-2" />
                            {post.category}
                          </div>
                          
                          <div>By {post.author}</div>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                        
                        <div className="prose dark:prose-invert max-w-none leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        
                        <div className="mt-10 pt-6 border-t border-border">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="px-3 py-1 bg-portfolio-lightBlue dark:bg-portfolio-lightNavy text-portfolio-accent dark:text-portfolio-darkAccent rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </main>
                <Footer />
                <ScrollToTop />
              </div>
            </ThemeProvider>
          );
        };
        
        export default BlogPost;
        