import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    slug: string;
};

type BlogSectionProps = {
    title: string;
    posts: BlogPost[];
    variant?: 'featured' | 'grid' | 'list';
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    }).format(date);
};

const BlogSection = ({ title, posts, variant = 'grid' }: BlogSectionProps) => {
    if (variant === 'featured') {
    return (
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <Carousel className="w-full">
            <CarouselContent>
            {posts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/2 noto-sans-thai">
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-portfolio-accent dark:hover:border-portfolio-darkAccent transition-all duration-300">
                    <div className="h-48 bg-portfolio-lightBlue dark:bg-portfolio-navy overflow-hidden">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 "
                    />
                    </div>
                    <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-portfolio-accent dark:text-portfolio-darkAccent bg-portfolio-lightBlue dark:bg-portfolio-lightNavy px-3 py-1 rounded-full">
                        {post.category}
                        </span>
                        <div className="flex items-center text-portfolio-slate dark:text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                        </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl hover:text-portfolio-accent dark:hover:text-portfolio-darkAccent transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                        {post.excerpt}
                    </CardDescription>
                    </CardHeader>
                    <CardFooter>
                    <Button variant="ghost" className="p-0 hover:bg-transparent group" asChild>
                    <Link to={`/blog/${post.slug}`}>
                        <span className="text-portfolio-accent dark:text-portfolio-darkAccent group-hover:mr-2 transition-all">Read more</span>
                        <ArrowRight size={16} className="text-portfolio-accent dark:text-portfolio-darkAccent transition-transform group-hover:translate-x-1" />
                    </Link>
                    </Button>
                    </CardFooter>
                </Card>
                </CarouselItem>
            ))}
            </CarouselContent>
            <div className="hidden md:block">
            <CarouselPrevious className="-left-4 border-portfolio-accent dark:border-portfolio-darkAccent" />
            <CarouselNext className="-right-4 border-portfolio-accent dark:border-portfolio-darkAccent" />
            </div>
        </Carousel>
        </section>
    );
}

if (variant === 'grid') {
    return (
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden border border-border hover:shadow-md dark:hover:shadow-blue-900/20 transition-all duration-300 h-full">
              <div className="h-40 bg-portfolio-lightBlue dark:bg-portfolio-navy overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-portfolio-accent dark:text-portfolio-darkAccent">
                    {post.category}
                  </span>
                  <div className="flex items-center text-portfolio-slate dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-portfolio-accent dark:hover:text-portfolio-darkAccent transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-portfolio-slate dark:text-gray-400">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent group" asChild>
                <Link to={`/blog/${post.slug}`}>
                    <span className="text-sm text-portfolio-accent dark:text-portfolio-darkAccent group-hover:mr-2 transition-all">Read more</span>
                    <ArrowRight size={14} className="text-portfolio-accent dark:text-portfolio-darkAccent transition-transform group-hover:translate-x-1" />
                </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    );
}

// List variant
return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 ">{title}</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-md dark:hover:shadow-blue-900/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-40 md:h-auto bg-portfolio-lightBlue dark:bg-portfolio-navy overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="md:w-3/4 p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-portfolio-accent dark:text-portfolio-darkAccent bg-portfolio-lightBlue dark:bg-portfolio-lightNavy px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-portfolio-slate dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-portfolio-accent dark:hover:text-portfolio-darkAccent transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-portfolio-slate dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 hover:bg-transparent group" asChild>
                <Link to={`/blog/${post.slug}`}>
                    <span className="text-portfolio-accent dark:text-portfolio-darkAccent group-hover:mr-2 transition-all">Read more</span>
                    <ArrowRight size={16} className="text-portfolio-accent dark:text-portfolio-darkAccent transition-transform group-hover:translate-x-1" />
                </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;