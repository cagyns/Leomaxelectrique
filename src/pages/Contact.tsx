import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:+14388760485"
              className="flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('home.hero.call')}
            </a>
            <a
              href="mailto:info@leomaxelectrique.ca"
              className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              {t('contact.send.email')}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('contact.get.touch')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.phone')}</h3>
                  <p className="text-gray-600">
                    <a href="tel:+14388760485" className="hover:text-cyan-600 transition-colors">
                      {t('common.phone')}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">{t('contact.phone.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.email')}</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@leomaxelectrique.ca" className="hover:text-cyan-600 transition-colors">
                      {t('common.email')}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">{t('contact.email.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.address')}</h3>
                  <p className="text-gray-600">{t('common.address')}</p>
                  <p className="text-gray-600">{t('common.city')}</p>
                  <p className="text-sm text-gray-500">{t('contact.address.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-cyan-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.hours')}</h3>
                  <div className="text-gray-600">
                    <p>{t('contact.hours.weekday')}</p>
                    <p>{t('contact.hours.saturday')}</p>
                    <p>{t('contact.hours.sunday')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">{t('contact.emergency.title')}</h3>
              <p className="text-red-700 mb-4">
                {t('contact.emergency.desc')}
              </p>
              <a
                href="tel:+14388760485"
                className="flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {t('contact.emergency.call')}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('contact.form.thank')}</h3>
                <p className="text-gray-600">
                  {t('contact.form.received')}
                </p>
              </div>
            ) : (
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
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.type')} *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="normal">{t('contact.form.normal')}</option>
                      <option value="urgent">{t('contact.form.urgent')}</option>
                      <option value="emergency">{t('contact.form.emergency')}</option>
                    </select>
                  </div>
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
                    <option value="lighting">Lighting Installation</option>
                    <option value="wiring">Wiring & Rewiring</option>
                    <option value="troubleshooting">Troubleshooting & Repair</option>
                    <option value="inspection">Electrical Inspection</option>
                    <option value="emergency">{t('quote.emergency')}</option>
                    <option value="other">{t('quote.other')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('quote.description')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder={t('quote.placeholder')}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-700 transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {t('contact.form.send')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.map.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.map.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.123456789!2d-73.6234567!3d45.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQyJzQ0LjQiTiA3M8KwMzcnMjQuNCJX!5e0!3m2!1sen!2sca!4v1567092734720!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LeoMax Électrique location at 8 Chemin Saint Stanislas, Terrebonne"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contact.areas.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.areas.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rives Sud de Montréal</h3>
                <p className="text-gray-600">Services électriques pour la Rive-Sud</p>
              </div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Longueuil</li>
                <li>Brossard</li>
                <li>Saint-Lambert</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Laval</h3>
                <p className="text-gray-600">Électricien commercial Laval - Systèmes électriques commerciaux</p>
              </div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Chomedey</li>
                <li>Vimont</li>
                <li>Sainte-Rose</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Montreal</h3>
                <p className="text-gray-600">Installation borne électrique Montréal - Services électriques résidentiels</p>
              </div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Ahuntsic-Cartierville</li>
                <li>Rivière-des-Prairies</li>
                <li>Montreal-Nord</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Laurentides</h3>
                <p className="text-gray-600">Services électriques pour la région des Laurentides</p>
              </div>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Saint-Jérôme</li>
                <li>Blainville</li>
                <li>Boisbriand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;