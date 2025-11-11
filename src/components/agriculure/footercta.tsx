// components/CTAFooter.jsx
'use client';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  Heart
} from 'lucide-react';
import { useState } from 'react';

const CTAFooter = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleBookCall = () => {
    // Replace with your actual booking link
    window.open('https://calendly.com/yourname/15min', '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  const benefits = [
    'No obligation consultation',
    'Expert advice tailored to your needs',
    'Get your questions answered instantly',
    'Explore potential solutions quickly'
  ];

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Apps', href: '/mobile-apps' },
        { name: 'UI/UX Design', href: '/ui-ux-design' },
        { name: 'Digital Marketing', href: '/digital-marketing' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-[#A2E535] to-[#16A34A] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black mb-2">
                    15-Minute
                  </h2>
                  <p className="text-xl text-white/90">Quick Discovery Call</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-lg text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <Shield className="w-5 h-5" />
                <span>100% Confidential • No Credit Card Required</span>
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A2E535] to-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Book Your Free Call
                </h3>
                <p className="text-gray-600">
                  Let&apos;s discuss how we can help your business grow
                </p>
              </div>

              <button
                onClick={handleBookCall}
                className="w-full bg-gradient-to-r from-[#A2E535] to-[#16A34A] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 flex items-center justify-center gap-3"
              >
                <Calendar className="w-6 h-6" />
                Schedule Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>15 minutes • Free consultation</span>
                </div>
                <div className="text-xs text-gray-500">
                  Pick a time that works for you
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default CTAFooter;