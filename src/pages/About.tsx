import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, CheckCircle, Phone, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '15+', label: t('about.stats.experience') },
    { number: '500+', label: t('about.stats.projects') },
    { number: '100+', label: t('about.stats.customers') },
    { number: '24/7', label: t('about.stats.emergency') }
  ];

  const values = [
    {
      icon: Shield,
      title: t('about.values.safety.title'),
      description: t('about.values.safety.desc')
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc')
    },
    {
      icon: Users,
      title: t('about.values.customer.title'),
      description: t('about.values.customer.desc')
    },
    {
      icon: Clock,
      title: t('about.values.punctual.title'),
      description: t('about.values.punctual.desc')
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl mb-8 text-cyan-100">
                {t('about.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+14388760485"
                  className="flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('home.hero.call')}
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
                >
                  {t('home.hero.quote')}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional electrician team working in Montreal"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.story.p1')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.story.p2')}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.story.p3')}
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="LeoMax Électrique team working on electrical installation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.team.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-300 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-gray-600">LM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leo Maxime</h3>
              <p className="text-cyan-600 font-medium mb-2">{t('about.team.leo.title')}</p>
              <p className="text-gray-600">{t('about.team.leo.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-300 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-gray-600">MD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marc Dubois</h3>
              <p className="text-cyan-600 font-medium mb-2">{t('about.team.marc.title')}</p>
              <p className="text-gray-600">{t('about.team.marc.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-300 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl font-bold text-gray-600">AT</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Antoine Tremblay</h3>
              <p className="text-cyan-600 font-medium mb-2">{t('about.team.antoine.title')}</p>
              <p className="text-gray-600">{t('about.team.antoine.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.certifications.title')}
            </h2>
            <p className="text-xl text-cyan-100">
              {t('about.certifications.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.certifications.rbq')}</h3>
                <p className="text-gray-600">{t('trust.license')}</p>
                <p className="text-sm text-gray-500 mt-2">{t('about.certifications.rbq.desc')}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.certifications.insured')}</h3>
                <p className="text-gray-600">{t('trust.coverage')}</p>
                <p className="text-sm text-gray-500 mt-2">{t('about.certifications.insured.desc')}</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Star className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.certifications.quality')}</h3>
                <p className="text-gray-600">Workmanship Warranty</p>
                <p className="text-sm text-gray-500 mt-2">{t('about.certifications.quality.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.why.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.why.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.local')}</h3>
                <p className="text-gray-600">{t('about.why.local.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.pricing')}</h3>
                <p className="text-gray-600">{t('about.why.pricing.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.emergency')}</h3>
                <p className="text-gray-600">{t('about.why.emergency.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.clean')}</h3>
                <p className="text-gray-600">{t('about.why.clean.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.technology')}</h3>
                <p className="text-gray-600">{t('about.why.technology.desc')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.why.warranty')}</h3>
                <p className="text-gray-600">{t('about.why.warranty.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
      </section>
    </div>
  );
};

export default About;