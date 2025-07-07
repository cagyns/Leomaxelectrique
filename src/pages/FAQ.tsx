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
      category: "General Services",
      questions: [
        {
          question: "What areas do you serve?",
          answer: "We serve the Greater Montreal area including Terrebonne, Laval, Montreal, and the North Shore. Our service area covers communities like La Plaine, Lachenaie, Chomedey, Vimont, Sainte-Rose, Ahuntsic-Cartierville, Rivière-des-Prairies, Montreal-Nord, Repentigny, Mascouche, and L'Assomption."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed by the Régie du bâtiment du Québec (RBQ License #5544-1234-01) and carry comprehensive liability insurance with $2M coverage. All our electricians are certified and experienced professionals."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, we provide 24/7 emergency electrical services. If you have a power outage, electrical fire, or other urgent electrical safety issues, call us immediately at (438) 876-0485. We typically respond to emergencies within 2 hours."
        },
        {
          question: "How do I get a quote?",
          answer: "You can get a free quote by calling us at (438) 876-0485, filling out our online contact form, or emailing us at nkapluc@ymail.com. We'll schedule a convenient time to assess your project and provide a detailed estimate."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "Do you charge for estimates?",
          answer: "No, we provide free estimates for all electrical projects. Our electrician will visit your property, assess the work needed, and provide a detailed written estimate at no charge."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, and all major credit cards (Visa, MasterCard, American Express). For larger projects, we can arrange payment plans. Payment is typically due upon completion of work."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. Our estimates include all materials, labor, permits, and applicable taxes. Any additional work will be discussed and approved before proceeding."
        },
        {
          question: "Do you offer warranties?",
          answer: "Yes, we warranty all our workmanship for one year from completion. Materials typically come with manufacturer warranties. We stand behind our work and will address any issues at no additional cost."
        }
      ]
    },
    {
      category: "Residential Services",
      questions: [
        {
          question: "When should I upgrade my electrical panel?",
          answer: "Consider upgrading if you have an older home (built before 1990), frequently trip breakers, have a fuse box, are adding major appliances, or installing an EV charger. Modern 200A panels are safer and more efficient than older 100A systems."
        },
        {
          question: "Can you install EV charging stations?",
          answer: "Yes, we specialize in EV charger installations for both Tesla and universal charging stations. This includes Level 2 home chargers, electrical permits, load calculations, and any necessary electrical upgrades."
        },
        {
          question: "Do I need a permit for electrical work?",
          answer: "Most electrical work requires permits in Quebec. We handle all permit applications and inspections for our customers. This ensures the work meets code requirements and is safe for your family."
        },
        {
          question: "How long does rewiring a house take?",
          answer: "Complete rewiring typically takes 3-7 days depending on the home size and complexity. We work efficiently to minimize disruption to your daily life and can often work around your schedule."
        }
      ]
    },
    {
      category: "Commercial & Industrial",
      questions: [
        {
          question: "Do you work on commercial buildings?",
          answer: "Yes, we provide comprehensive commercial electrical services including office buildings, retail stores, restaurants, and warehouses. We handle everything from new installations to maintenance and repairs."
        },
        {
          question: "Can you handle industrial electrical work?",
          answer: "Absolutely. We have experience with industrial electrical systems, three-phase power, motor controls, and specialized equipment wiring. We also offer preventive maintenance programs for industrial clients."
        },
        {
          question: "Do you work on weekends for commercial projects?",
          answer: "Yes, we understand that commercial and industrial clients often need work done outside business hours. We can schedule work during evenings, weekends, or holidays to minimize disruption to your operations."
        },
        {
          question: "Do you provide maintenance contracts?",
          answer: "Yes, we offer maintenance contracts for commercial and industrial clients. These include regular inspections, preventive maintenance, and priority service for repairs. Contact us to discuss a customized maintenance plan."
        }
      ]
    },
    {
      category: "Safety & Emergencies",
      questions: [
        {
          question: "What constitutes an electrical emergency?",
          answer: "Electrical emergencies include power outages, burning smells, sparking outlets, exposed wires, electrical fires, frequent breaker trips, or any situation that poses immediate safety risks. Call us immediately at (438) 876-0485."
        },
        {
          question: "Is it safe to reset a tripped breaker?",
          answer: "You can reset a breaker once, but if it trips again immediately, don't keep resetting it. This indicates a problem that needs professional attention. Call us to diagnose and fix the underlying issue safely."
        },
        {
          question: "What should I do if an outlet is sparking?",
          answer: "Turn off the breaker to that outlet immediately and don't use it. Sparking outlets are a fire hazard and need immediate professional attention. Call us for emergency service."
        },
        {
          question: "How often should I have my electrical system inspected?",
          answer: "We recommend electrical inspections every 5-10 years for homes, or when buying/selling property. Commercial buildings should be inspected annually. Regular inspections help identify potential problems before they become dangerous."
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