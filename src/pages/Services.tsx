import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Factory, Zap, Car, Lightbulb, Shield, Settings, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.residential'),
      description: t('services.residential.description'),
      features: [
        t('services.panel.upgrades'),
        t('services.wiring'),
        "Outlet and switch installation",
        "Ceiling fan installation",
        "Electrical troubleshooting",
        "Code compliance and permits"
      ],
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Building,
      title: t('services.commercial'),
      description: t('services.commercial.description'),
      features: [
        t('services.office'),
        t('services.retail'),
        t('services.emergency.lighting'),
        t('services.power.distribution'),
        "Data and telecommunications wiring",
        "Security system wiring"
      ],
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Factory,
      title: t('services.industrial'),
      description: t('services.industrial.description'),
      features: [
        t('services.equipment'),
        t('services.motor.controls'),
        t('services.three.phase'),
        "Industrial lighting",
        t('services.maintenance'),
        t('services.inspections')
      ],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Zap,
      title: t('services.panel.title'),
      description: t('services.panel.description'),
      features: [
        t('services.panel.feature1'),
        t('services.panel.feature2'),
        t('services.panel.feature3'),
        t('services.panel.feature4'),
        t('services.panel.feature5'),
        t('services.panel.feature6')
      ],
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Car,
      title: t('services.ev.title'),
      description: t('services.ev.description'),
      features: [
        t('services.ev.feature1'),
        t('services.ev.feature2'),
        t('services.ev.feature3'),
        t('services.ev.feature4'),
        t('services.ev.feature5'),
        t('services.ev.feature6')
      ],
      image: "https://images.pexels.com/photos/7131568/pexels-photo-7131568.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Lightbulb,
      title: t('services.lighting.title'),
      description: t('services.lighting.description'),
      features: [
        t('services.lighting.feature1'),
        t('services.lighting.feature2'),
        t('services.lighting.feature3'),
        t('services.lighting.feature4'),
        t('services.lighting.feature5'),
        t('services.lighting.feature6')
      ],
      image: "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Settings,
      title: t('services.smart.title'),
      description: t('services.smart.description'),
      features: [
        t('services.smart.feature1'),
        t('services.smart.feature2'),
        t('services.smart.feature3'),
        t('services.smart.feature4'),
        t('services.smart.feature5'),
        t('services.smart.feature6')
      ],
      image: "https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Shield,
      title: t('services.emergency.title'),
      description: t('services.emergency.description'),
      features: [
        t('services.emergency.feature1'),
        t('services.emergency.feature2'),
        t('services.emergency.feature3'),
        t('services.emergency.feature4'),
        t('services.emergency.feature5'),
        t('services.emergency.feature6')
      ],
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('services.page.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.page.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={`${service.title} service in Montreal area`}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-cyan-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.areas.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('services.areas.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-lg">RS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rives Sud de Montréal</h3>
              <p className="text-gray-600">Services électriques professionnels pour la Rive-Sud</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laval</h3>
              <p className="text-gray-600">Électricien commercial Laval - Systèmes électriques commerciaux</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Montreal</h3>
              <p className="text-gray-600">Installation borne électrique Montréal - Services électriques résidentiels</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laurentides</h3>
              <p className="text-gray-600">Services électriques pour la région des Laurentides</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('services.page.cta.title')}
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            {t('services.page.cta.subtitle')}
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

export default Services;