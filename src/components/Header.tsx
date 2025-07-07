import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('header.home'), href: '/' },
    { name: t('header.services'), href: '/services' },
    { name: t('header.about'), href: '/about' },
    { name: t('header.contact'), href: '/contact' },
    { name: t('header.testimonials'), href: '/testimonials' },
    { name: t('header.faq'), href: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top bar */}
      <div className="bg-cyan-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>{t('header.licensed')}</span>
              <span>•</span>
              <span>{t('header.emergency')}</span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <a href="tel:+14388760485" className="hover:text-yellow-300 transition-colors">
                  {t('common.phone')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-cyan-500 p-2 rounded-lg">
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">LeoMax Électrique</h1>
                <p className="text-sm text-gray-600">{t('header.tagline')}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-500 border-b-2 border-cyan-500'
                    : 'text-gray-700 hover:text-cyan-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14388760485"
              className="flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t('header.callNow')}
            </a>
            <Link
              to="/contact"
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              {t('header.freeQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive(item.href)
                    ? 'text-cyan-500 bg-cyan-50'
                    : 'text-gray-700 hover:text-cyan-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <a
                href="tel:+14388760485"
                className="flex items-center justify-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;