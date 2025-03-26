
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue" />
              <span className="font-semibold text-lg">Data Shield Partners</span>
            </div>
            <p className="text-gray-light text-sm mt-4 max-w-md">
              Connecting industry leaders with emerging technologies through our specialized newsletters reaching nearly 40,000 executives.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-light hover:text-blue transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-light hover:text-blue transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#newsletters" className="text-gray-light hover:text-blue transition-colors text-sm">
                  Our Newsletters
                </Link>
              </li>
              <li>
                <Link to="/#advertising" className="text-gray-light hover:text-blue transition-colors text-sm">
                  Advertising Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Focus Areas</h3>
            <ul className="space-y-3">
              <li className="text-gray-light text-sm">Healthcare & MedTech</li>
              <li className="text-gray-light text-sm">Commercial Real Estate</li>
              <li className="text-gray-light text-sm">Finance & Construction</li>
              <li className="text-gray-light text-sm">Logistics & Supply Chain</li>
              <li className="text-gray-light text-sm">Manufacturing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-blue mt-0.5" />
                <a href="mailto:info@datashieldpartners.com" className="text-gray-light hover:text-blue transition-colors text-sm">
                  info@datashieldpartners.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-blue mt-0.5" />
                <a href="tel:+11234567890" className="text-gray-light hover:text-blue transition-colors text-sm">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue mt-0.5" />
                <span className="text-gray-light text-sm">
                  123 Technology Plaza,<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-dark/20 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-light text-sm mb-4 md:mb-0">
              © {currentYear} Data Shield Partners. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-light hover:text-blue transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-light hover:text-blue transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
