import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Star, Zap, Home, Building, Factory, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your quote request! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('home.hero.title')}
                <span className="text-yellow-300"> {t('home.hero.location')}</span>
              </h1>
              <p className="text-xl mb-8 text-cyan-100">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+14388760485"
                  className="flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('home.hero.call')}
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  {t('home.hero.quote')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional electrician working on electrical panel in Montreal"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{t('trust.licensed')}</h3>
              <p className="text-gray-600">{t('trust.license')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{t('trust.insured')}</h3>
              <p className="text-gray-600">{t('trust.coverage')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{t('trust.emergency')}</h3>
              <p className="text-gray-600">{t('trust.available')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{t('trust.service')}</h3>
              <p className="text-gray-600">{t('trust.customers')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Home className="h-10 w-10 text-cyan-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">{t('services.residential')}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.panel.upgrades')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.wiring')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.lighting')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.ev.charger')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.smart.home')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Building className="h-10 w-10 text-cyan-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">{t('services.commercial')}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.office')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.retail')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.emergency.lighting')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.power.distribution')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.code.compliance')}
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Factory className="h-10 w-10 text-cyan-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">{t('services.industrial')}</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.equipment')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.motor.controls')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.three.phase')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.maintenance')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {t('services.inspections')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('quote.title')}
            </h2>
            <p className="text-xl text-cyan-100">
              {t('quote.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder={t('quote.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder={t('quote.email')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder={t('common.phone')}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.service')} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">{t('quote.select')}</option>
                    <option value="residential">{t('quote.residential')}</option>
                    <option value="commercial">{t('quote.commercial')}</option>
                    <option value="industrial">{t('quote.industrial')}</option>
                    <option value="panel-upgrade">{t('quote.panel')}</option>
                    <option value="ev-charger">{t('quote.ev')}</option>
                    <option value="smart-home">{t('quote.smart')}</option>
                    <option value="emergency">{t('quote.emergency')}</option>
                    <option value="other">{t('quote.other')}</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('quote.description')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder={t('quote.placeholder')}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors"
                >
                  {t('quote.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excellent service from start to finish. The team was professional, punctual, and did quality work on our panel upgrade. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Marie Dubois</p>
                  <p className="text-sm text-gray-600">Terrebonne</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Called them for an emergency repair and they arrived within 2 hours. Fixed the problem quickly and at a fair price. Great service!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Jean-Pierre Martin</p>
                  <p className="text-sm text-gray-600">Laval</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Professional installation of our EV charger. Clean work, explained everything clearly, and followed up to ensure everything was working perfectly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Montreal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              {t('testimonials.more')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
