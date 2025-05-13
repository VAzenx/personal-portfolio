
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="section-padding" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono text-portfolio-accent mb-2">
              What's Next?
            </p>
            <h2 className="text-3xl font-bold mb-4">
              <span className="heading-gradient">Get In Touch</span>
            </h2>
            <p className="text-portfolio-slate max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hello, I'll do my best to get back to you!
            </p>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-md">
                  <Mail className="text-portfolio-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:hello@example.com" className="text-portfolio-slate hover:text-portfolio-accent transition-colors">
                    wutthipong.2006x@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-md">
                  <Phone className="text-portfolio-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+11234567890" className="text-portfolio-slate hover:text-portfolio-accent transition-colors">
                    094-017-3161
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-md">
                  <MapPin className="text-portfolio-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-portfolio-slate">
                    Thailand, Bangkok 
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-slate-300 focus:border-portfolio-accent focus:ring-portfolio-accent/30"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-slate-300 focus:border-portfolio-accent focus:ring-portfolio-accent/30"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-slate-300 focus:border-portfolio-accent focus:ring-portfolio-accent/30"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-slate-300 focus:border-portfolio-accent focus:ring-portfolio-accent/30"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
