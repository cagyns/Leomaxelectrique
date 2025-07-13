import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Phone, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: t('faq.category.general'),
      questions: [
        {
          question: t('faq.general.areas.q'),
          answer: t('faq.general.areas.a')
        },
        {
          question: t('faq.general.licensed.q'),
          answer: t('faq.general.licensed.a')
        },
        {
          question: t('faq.general.emergency.q'),
          answer: t('faq.general.emergency.a')
        },
        {
          question: t('faq.general.quote.q'),
          answer: t('faq.general.quote.a')
        }
      ]
    },
    {
      category: t('faq.category.pricing'),
      questions: [
        {
          question: t('faq.pricing.estimates.q'),
          answer: t('faq.pricing.estimates.a')
        },
        {
          question: t('faq.pricing.payment.q'),
          answer: t('faq.pricing.payment.a')
        },
        {
          question: t('faq.pricing.hidden.q'),
          answer: t('faq.pricing.hidden.a')
        },
        {
          question: t('faq.pricing.warranty.q'),
          answer: t('faq.pricing.warranty.a')
        }
      ]
    },
    {
      category: t('faq.category.residential'),
      questions: [
        {
          question: t('faq.residential.panel.q'),
          answer: t('faq.residential.panel.a')
        },
        {
          question: t('faq.residential.ev.q'),
          answer: t('faq.residential.ev.a')
        },
        {
          question: t('faq.residential.permit.q'),
          answer: t('faq.residential.permit.a')
        },
        {
          question: t('faq.residential.rewiring.q'),
          answer: t('faq.residential.rewiring.a')
        }
      ]
    },
    {
      category: t('faq.category.commercial'),
      questions: [
        {
          question: t('faq.commercial.buildings.q'),
          answer: t('faq.commercial.buildings.a')
        },
        {
          question: t('faq.commercial.industrial.q'),
          answer: t('faq.commercial.industrial.a')
        },
        {
          question: t('faq.commercial.weekends.q'),
          answer: t('faq.commercial.weekends.a')
        },
        {
          question: t('faq.commercial.maintenance.q'),
          answer: t('faq.commercial.maintenance.a')
        }
      ]
    },
    {
      category: t('faq.category.safety'),
      questions: [
        {
          question: t('faq.safety.emergency.q'),
          answer: t('faq.safety.emergency.a')
        },
        {
          question: t('faq.safety.breaker.reset.q'),
          answer: t('faq.safety.breaker.reset.a')
        },
        {
          question: t('faq.safety.sparking.q'),
          answer: t('faq.safety.sparking.a')
        },
        {
          question: t('faq.safety.inspection.q'),
          answer: t('faq.safety.inspection.a')
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('faq.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('faq.subtitle')}
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
              {t('faq.ask')}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-cyan-600">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex;
                  const isOpen = openFAQ === globalIndex;
                  
                  return (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <Minus className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-8 w-8 text-red-600 mr-4" />
              <h2 className="text-2xl font-bold text-red-900">{t('faq.emergency.title')}</h2>
            </div>
            <p className="text-red-800 mb-6">
              {t('faq.emergency.desc')}
            </p>
            <a
              href="tel:+14388760485"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('faq.emergency.call')}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('faq.safety.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('faq.safety.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.breaker')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.breaker.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.gfci')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.gfci.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.overload')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.overload.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.warning')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.warning.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.water')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.water.desc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('faq.safety.diy')}</h3>
              <p className="text-gray-600">
                {t('faq.safety.diy.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('faq.still.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('faq.still.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+14388760485"
              className="flex items-center justify-center bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('home.hero.call')}
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center bg-transparent border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 hover:text-white transition-colors"
            >
              {t('header.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;