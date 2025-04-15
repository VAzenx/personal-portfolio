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
      title: 'Building Modern Web Applications with React',
      excerpt: 'Learn how to build scalable web applications using React and modern tooling',
      content: `
        <p class="mb-4">React has revolutionized the way we build web applications. With its component-based architecture and virtual DOM, React provides an efficient and flexible way to create interactive UIs.</p>
        <p class="mb-4">In this article, we'll explore how to build scalable web applications using React and modern tooling like Vite, TypeScript, and Tailwind CSS.</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with React</h2>
        <p class="mb-4">To get started with React, you'll need to set up a development environment. We recommend using Vite, a build tool that provides a faster and leaner development experience.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
          <code>npm create vite@latest my-react-app --template react-ts</code>
        </pre>
        <p class="mb-4">This command creates a new React application with TypeScript support. Once the project is created, you can navigate to the project directory and start the development server.</p>
        <h2 class="text-2xl font-bold mt-8 mb-4">Building Components</h2>
        <p class="mb-4">The core of React development is building components. Components are reusable pieces of code that return a React element describing what should appear on the screen.</p>
        <p class="mb-4">Here's a simple example of a React component:</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
          <code>function Welcome(props) {
    return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
  }</code>
        </pre>
        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
        <p class="mb-4">Building modern web applications with React involves many aspects, from setting up the development environment to deploying the application. With the right tools and practices, you can create efficient, maintainable, and scalable applications.</p>
      `,
      date: '2025-04-05',
      author: 'John Doe',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Web Development'],
      imageUrl: '/placeholder.svg',
      slug: 'building-modern-web-apps'
    },
    {
        id: 2,
        title: 'Designing User-Friendly Interfaces',
        excerpt: 'Principles and practices for creating intuitive user experiences',
        content: `
          <p class="mb-4">Good user interface design is crucial for creating applications that users love. It involves understanding user needs, creating clear visual hierarchies, and ensuring consistency throughout the application.</p>
          <p class="mb-4">In this article, we'll explore key principles and practices for designing user-friendly interfaces.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Understanding User Needs</h2>
          <p class="mb-4">The first step in designing a user-friendly interface is understanding your users. What are their goals? What tasks are they trying to accomplish? What devices are they using?</p>
          <p class="mb-4">User research, including interviews, surveys, and usability testing, can provide valuable insights into user needs and behaviors.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Creating Visual Hierarchy</h2>
          <p class="mb-4">Visual hierarchy helps users understand the importance of different elements on the page. It guides their attention and helps them navigate the interface.</p>
          <p class="mb-4">You can create visual hierarchy through size, color, contrast, spacing, and typography. For example, larger elements are perceived as more important, and elements with high color contrast stand out more.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Ensuring Consistency</h2>
          <p class="mb-4">Consistency in UI design helps users learn how to use your application more quickly. When elements look and behave consistently, users can apply what they've learned about one part of the interface to another.</p>
          <p class="mb-4">Consistency applies to many aspects of design, including layout, typography, color, icons, and interactions.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">Designing user-friendly interfaces is both an art and a science. It requires understanding user needs, creating clear visual hierarchies, and ensuring consistency throughout the application.</p>
        `,
        date: '2025-03-22',
        author: 'Jane Smith',
        category: 'Design',
        tags: ['UI/UX', 'Design Principles', 'User Experience'],
        imageUrl: '/placeholder.svg',
        slug: 'designing-user-friendly-interfaces'
      },
      {
        id: 3,
        title: 'The Future of Web Animation',
        excerpt: 'Exploring new animation techniques for engaging user experiences',
        content: `
          <p class="mb-4">Animation can transform a static website into an engaging and interactive experience. With advances in web technologies, we have more tools than ever to create sophisticated animations.</p>
          <p class="mb-4">In this article, we'll explore the future of web animation and how you can use new techniques to create more engaging user experiences.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">CSS Animations and Transitions</h2>
          <p class="mb-4">CSS animations and transitions are powerful tools for creating simple animations. They're easy to use and have good browser support.</p>
          <p class="mb-4">Here's a simple example of a CSS transition:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>.button {
      transition: transform 0.3s ease;
    }
    
    .button:hover {
      transform: scale(1.1);
    }</code>
          </pre>
          <h2 class="text-2xl font-bold mt-8 mb-4">JavaScript Animation Libraries</h2>
          <p class="mb-4">For more complex animations, JavaScript libraries like GSAP, Framer Motion, and Lottie provide more control and flexibility.</p>
          <p class="mb-4">These libraries allow you to create timeline-based animations, control animations with JavaScript, and even import animations created in tools like After Effects.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">WebGL and 3D Animations</h2>
          <p class="mb-4">WebGL enables 3D animations in the browser. Libraries like Three.js make it easier to work with WebGL, allowing you to create immersive 3D experiences.</p>
          <p class="mb-4">With WebGL, you can create animations that respond to user input, physics-based animations, and even 3D games.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">The future of web animation is exciting, with more tools and techniques available than ever before. Whether you're using simple CSS animations or complex WebGL animations, adding animation to your website can create a more engaging and memorable user experience.</p>
        `,
        date: '2025-04-01',
        author: 'Emily Chen',
        category: 'Animation',
        tags: ['Web Animation', 'CSS', 'JavaScript'],
        imageUrl: '/placeholder.svg',
        slug: 'future-of-web-animation'
      },
      {
        id: 4,
        title: 'Optimizing Performance in JavaScript Apps',
        excerpt: 'Tips and tricks for making your JavaScript applications blazing fast',
        content: `
          <p class="mb-4">Performance is a critical aspect of web development. Slow websites lead to poor user experiences, lower engagement, and higher bounce rates.</p>
          <p class="mb-4">In this article, we'll explore strategies for optimizing the performance of JavaScript applications.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Minimizing Bundle Size</h2>
          <p class="mb-4">One of the most effective ways to improve performance is to minimize your JavaScript bundle size. Smaller bundles load faster, especially on slower connections.</p>
          <p class="mb-4">You can reduce bundle size by removing unused code, splitting your code into smaller chunks, and using tree-shaking to eliminate dead code.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Optimizing Render Performance</h2>
          <p class="mb-4">Render performance affects how smoothly your application runs. Common issues include unnecessary re-renders, layout thrashing, and inefficient DOM manipulation.</p>
          <p class="mb-4">To improve render performance, use tools like React's memo, useCallback, and useMemo to prevent unnecessary re-renders, and use CSS transforms and opacity for animations instead of properties that trigger layout recalculations.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Lazy Loading</h2>
          <p class="mb-4">Lazy loading is a technique where resources are loaded only when they're needed. For example, you can load images as they come into view, or load JavaScript modules when a specific feature is used.</p>
          <p class="mb-4">In React, you can use dynamic imports and the Suspense component to implement lazy loading:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>const LazyComponent = React.lazy(() => import('./LazyComponent'));
    
    function MyComponent() {
      return (
        &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
          &lt;LazyComponent /&gt;
        &lt;/React.Suspense&gt;
      );
    }</code>
          </pre>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">Optimizing performance is an ongoing process. By minimizing bundle size, optimizing render performance, and implementing lazy loading, you can create fast and responsive JavaScript applications that provide a great user experience.</p>
        `,
        date: '2025-03-18',
        author: 'David Wilson',
        category: 'Performance',
        tags: ['JavaScript', 'Performance Optimization', 'Web Development'],
        imageUrl: '/placeholder.svg',
        slug: 'optimizing-javascript-performance'
      },
      {
        id: 5,
        title: 'Leveraging CSS Grid for Complex Layouts',
        excerpt: 'How to use CSS Grid to create complex web layouts with ease',
        content: `
          <p class="mb-4">CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It allows you to create complex layouts that were previously difficult or impossible to achieve with CSS.</p>
          <p class="mb-4">In this article, we'll explore how to use CSS Grid to create complex layouts with ease.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with CSS Grid</h2>
          <p class="mb-4">To use CSS Grid, you first need to set the display property of a container element to grid. Then, you can define the rows and columns of the grid using the grid-template-rows and grid-template-columns properties.</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>.container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px 200px;
      gap: 20px;
    }</code>
          </pre>
          <p class="mb-4">This creates a grid with three equal-width columns and two rows of different heights, with a 20px gap between grid items.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Placing Items on the Grid</h2>
          <p class="mb-4">You can place items on the grid using the grid-column and grid-row properties. These properties define where an item starts and ends on the grid.</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>.item {
      grid-column: 1 / 3; /* Spans from column line 1 to column line 3 */
      grid-row: 1 / 2; /* Spans from row line 1 to row line 2 */
    }</code>
          </pre>
          <p class="mb-4">This places the item in the top-left corner of the grid, spanning two columns and one row.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Creating Responsive Layouts</h2>
          <p class="mb-4">CSS Grid makes it easy to create responsive layouts. You can use media queries to change the grid layout based on the screen size, or you can use the auto-fill and auto-fit values with the repeat function to create flexible grids.</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>.container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }</code>
          </pre>
          <p class="mb-4">This creates a grid with as many columns as can fit in the container, where each column is at least 200px wide and can expand to fill available space.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">CSS Grid is a powerful tool for creating complex layouts on the web. By understanding the basics of grid creation and item placement, and by leveraging features like grid areas and responsive grids, you can create sophisticated layouts with ease.</p>
        `,
        date: '2025-03-10',
        author: 'Sophie Taylor',
        category: 'CSS',
        tags: ['CSS Grid', 'Layout', 'Web Design'],
        imageUrl: '/placeholder.svg',
        slug: 'css-grid-layouts'
      },
      {
        id: 6,
        title: 'Creating Custom React Hooks',
        excerpt: 'A step-by-step guide to creating your own custom React hooks',
        content: `
          <p class="mb-4">React hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They allow you to extract component logic into reusable functions.</p>
          <p class="mb-4">In this article, we'll explore how to create custom React hooks to encapsulate and reuse stateful logic.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">What are Custom Hooks?</h2>
          <p class="mb-4">Custom hooks are JavaScript functions that start with the word "use" and may call other hooks. They allow you to extract component logic into reusable functions.</p>
          <p class="mb-4">Here's a simple example of a custom hook that manages a counter:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>function useCounter(initialValue = 0) {
      const [count, setCount] = useState(initialValue);
      
      const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);
      const reset = () => setCount(initialValue);
      
      return { count, increment, decrement, reset };
    }</code>
          </pre>
          <p class="mb-4">You can use this hook in any component that needs counter functionality:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>function CounterComponent() {
      const { count, increment, decrement, reset } = useCounter();
      
      return (
        &lt;div&gt;
          &lt;p&gt;Count: {count}&lt;/p&gt;
          &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
          &lt;button onClick={decrement}&gt;Decrement&lt;/button&gt;
          &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
        &lt;/div&gt;
      );
    }</code>
          </pre>
          <h2 class="text-2xl font-bold mt-8 mb-4">When to Create Custom Hooks</h2>
          <p class="mb-4">You should consider creating a custom hook when you have stateful logic that needs to be reused across multiple components. For example, you might create custom hooks for:</p>
          <ul class="list-disc ml-6 mb-4">
            <li>Form handling</li>
            <li>Data fetching</li>
            <li>Authentication</li>
            <li>Animations</li>
            <li>Localization</li>
          </ul>
          <h2 class="text-2xl font-bold mt-8 mb-4">Rules of Hooks</h2>
          <p class="mb-4">When creating custom hooks, remember to follow the rules of hooks:</p>
          <ul class="list-disc ml-6 mb-4">
            <li>Only call hooks at the top level of your function, not inside loops, conditions, or nested functions.</li>
            <li>Only call hooks from React function components or custom hooks, not regular JavaScript functions.</li>
          </ul>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">Custom hooks are a powerful feature in React that allow you to extract and reuse stateful logic. By creating your own custom hooks, you can make your code more modular, maintainable, and reusable.</p>
        `,
        date: '2025-02-28',
        author: 'Michael Brown',
        category: 'React',
        tags: ['React', 'Hooks', 'JavaScript'],
        imageUrl: '/placeholder.svg',
        slug: 'custom-react-hooks'
      },
      {
        id: 7,
        title: 'Introduction to TypeScript for JavaScript Developers',
        excerpt: 'A gentle introduction to TypeScript for JavaScript developers',
        content: `
          <p class="mb-4">TypeScript is a superset of JavaScript that adds static types to the language. It helps catch errors during development and provides better tooling and editor support.</p>
          <p class="mb-4">In this article, we'll provide a gentle introduction to TypeScript for JavaScript developers.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">What is TypeScript?</h2>
          <p class="mb-4">TypeScript is a strongly typed programming language that builds on JavaScript. It was developed and is maintained by Microsoft.</p>
          <p class="mb-4">The main benefit of TypeScript is its type system. By adding type annotations to your code, you can catch errors during development rather than at runtime. TypeScript also provides better tooling and editor support, including code completion, navigation, and refactoring.</p>
          <h2 class="text-2xl font-bold mt-8 mb-4">Getting Started with TypeScript</h2>
          <p class="mb-4">To get started with TypeScript, you first need to install it. You can do this with npm:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>npm install -g typescript</code>
          </pre>
          <p class="mb-4">Once TypeScript is installed, you can create a TypeScript file with a .ts extension and compile it to JavaScript using the tsc command:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>tsc hello.ts</code>
          </pre>
          <h2 class="text-2xl font-bold mt-8 mb-4">Basic Types in TypeScript</h2>
          <p class="mb-4">TypeScript provides several basic types, including:</p>
          <ul class="list-disc ml-6 mb-4">
            <li>Boolean: true or false</li>
            <li>Number: floating-point values</li>
            <li>String: text values</li>
            <li>Array: a collection of values of the same type</li>
            <li>Tuple: a fixed-size array where each element may have a different type</li>
            <li>Enum: a set of named constants</li>
            <li>Any: a dynamic type that bypasses type checking</li>
            <li>Void: the absence of a type, used for functions that don't return a value</li>
            <li>Null and Undefined: subtypes of all other types</li>
            <li>Never: a type for values that never occur</li>
            <li>Object: a type that represents non-primitive types</li>
          </ul>
          <p class="mb-4">Here's an example of using some of these types:</p>
          <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4 overflow-auto">
            <code>let isDone: boolean = false;
    let decimal: number = 6;
    let color: string = "blue";
    let list: number[] = [1, 2, 3];
    let x: [string, number] = ["hello", 10]; // Tuple</code>
          </pre>
          <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p class="mb-4">TypeScript is a powerful tool for JavaScript developers that adds static typing to the language. By understanding the basics of TypeScript, you can write more robust code and catch errors earlier in the development process.</p>
        `,
        date: '2025-02-15',
        author: 'Laura Davis',
        category: 'TypeScript',
        tags: ['TypeScript', 'JavaScript', 'Web Development'],
        imageUrl: '/placeholder.svg',
        slug: 'typescript-introduction'
      }
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
            document.title = `${foundPost.title} | John Doe's Blog`;
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
              <div className="min-h-screen bg-background">
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
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6 md:p-10 max-w-4xl mx-auto">
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
        