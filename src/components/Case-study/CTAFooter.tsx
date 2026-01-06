'use client';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Shield, Heart } from 'lucide-react';
import { useState } from 'react';

const CTAFooter = ({ data, colors, domainName, domainSlug }) => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleBookCall = () => {
    window.open(data.bookingLink || 'https://calendly.com/yourname/15min', '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    console.log('Newsletter subscription:', email);
    setEmail('');
    alert(`Thank you for subscribing to our ${domainName} newsletter!`);
  };

  const benefits = [
    'No obligation consultation',
    'Expert advice tailored to your needs',
    'Get your questions answered instantly',
    'Explore potential solutions quickly'
  ];

  return (
    <footer className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`}>
      
      {/* Main CTA Section with Dynamic Colors */}
      <div className={`bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content with Dynamic Colors */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center`}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className={`text-4xl lg:text-5xl font-black mb-2`}>
                    15-Minute
                  </h2>
                  <p className="text-xl text-white/90">{domainName} Discovery Call</p>
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

              <div className={`flex items-center gap-4 text-white/80`}>
                <Shield className="w-5 h-5" />
                <span>100% Confidential • No Credit Card Required</span>
              </div>
            </div>

            {/* Right Content - CTA Card with Dynamic Colors */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br from-[${colors.primary}] to-[${colors.secondary}] rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-2xl font-black text-gray-900 mb-2`}>
                  Book Your Free {domainName} Call
                </h3>
                <p className="text-gray-600">
                  Let&apos;s discuss how we can help your {domainName.toLowerCase()} business grow
                </p>
              </div>

              <button
                onClick={handleBookCall}
                className={`w-full bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4 flex items-center justify-center gap-3`}
              >
                <Calendar className="w-6 h-6" />
                Schedule {domainName} Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>15 minutes • Free {domainName} consultation</span>
                </div>
                <div className="text-xs text-gray-500">
                  Pick a time that works for your {domainName.toLowerCase()} business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900/95 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold text-white mb-4`}>Stay Updated with {domainName}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get the latest insights, case studies, and updates about {domainName.toLowerCase()} digital transformation.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)]"
                required
              />
              <button
                type="submit"
                className={`px-8 py-3 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Links with Dynamic Services */}
      <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-2xl font-bold text-white mb-4 flex items-center gap-3`}>
              <Heart className={`w-8 h-8 text-[${colors.primary}]`} />
              {domainName}
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming {domainName.toLowerCase()} businesses with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Service Links */}
          {data.services && (
            <div>
              <h4 className="text-white font-semibold mb-4">Our {domainName} Services</h4>
              <ul className="space-y-2">
                {data.services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href} className="text-gray-400 hover:text-[var(--primary-color)] text-sm transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@{domainSlug}platform.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>123 Business St, Tech City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {domainName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
