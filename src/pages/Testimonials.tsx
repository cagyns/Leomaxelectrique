import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Terrebonne",
      service: "Mise à niveau du panneau",
      rating: 5,
      date: "Janvier 2024",
      review: "Excellent service du début à la fin ! L'équipe était professionnelle, ponctuelle et a fait un travail de qualité sur notre mise à niveau de panneau électrique. Ils ont tout expliqué clairement et ont nettoyé après eux. Le prix était juste et raisonnable. Je recommanderais définitivement LeoMax Électrique à quiconque ayant besoin de travaux électriques.",
      initial: "M"
    },
    {
      name: "Jean-Pierre Martin",
      location: "Laval",
      service: "Réparation d'urgence",
      rating: 5,
      date: "Décembre 2023",
      review: "Je les ai appelés pour une réparation d'urgence un dimanche soir quand notre électricité est tombée en panne. Ils sont arrivés dans les 2 heures et ont rapidement diagnostiqué le problème. L'électricien était compétent et a résolu le problème efficacement. Excellent service client et prix très raisonnable pour un travail d'urgence.",
      initial: "J"
    },
    {
      name: "Sarah Johnson",
      location: "Montreal",
      service: "Installation de borne électrique",
      rating: 5,
      date: "Février 2024",
      review: "Installation professionnelle de notre chargeur Tesla domestique. L'électricien était très compétent sur les systèmes de recharge de véhicules électriques et nous a aidés à choisir la bonne configuration. Installation propre, tout expliqué clairement, et suivi pour s'assurer que tout fonctionnait parfaitement. Hautement recommandé !",
      initial: "S"
    },
    {
      name: "Michel Tremblay",
      location: "Repentigny",
      service: "Électricité commerciale",
      rating: 5,
      date: "Novembre 2023",
      review: "LeoMax Électrique a fait les travaux électriques pour notre nouveau restaurant. Ils étaient professionnels, ont travaillé efficacement et ont terminé le projet à temps et dans le budget. L'équipe a respecté notre échéancier et a travaillé selon notre horaire. Excellent travail et attention aux détails.",
      initial: "M"
    },
    {
      name: "Lisa Chen",
      location: "Terrebonne",
      service: "Installation de maison intelligente",
      rating: 5,
      date: "Mars 2024",
      review: "Travail incroyable sur notre installation de maison intelligente ! Ils ont installé des interrupteurs intelligents, des gradateurs et un système complet de domotique. L'électricien était patient pour expliquer comment tout fonctionne et a fourni un excellent support après-service. Très satisfaits des résultats !",
      initial: "L"
    },
    {
      name: "Robert Gagnon",
      location: "Laval",
      service: "Recâblage résidentiel",
      rating: 5,
      date: "Octobre 2023",
      review: "Recâblage complet de notre maison des années 1960. L'équipe était professionnelle, propre et efficace. Ils ont minimisé les perturbations à notre vie quotidienne et nous ont tenus informés tout au long du processus. Le travail a été terminé à temps et a passé l'inspection sans aucun problème. Excellent travail !",
      initial: "R"
    },
    {
      name: "Amanda Wilson",
      location: "Montreal",
      service: "Installation d'éclairage",
      rating: 5,
      date: "Janvier 2024",
      review: "Belle installation d'éclairage extérieur pour notre cour arrière. L'électricien a fourni d'excellentes suggestions de design et l'installation était impeccable. Les lumières LED sont magnifiques et la qualité du travail est excellente. Nous les utiliserons certainement à nouveau pour de futurs projets.",
      initial: "A"
    },
    {
      name: "Pierre Lalonde",
      location: "Mascouche",
      service: "Électricité industrielle",
      rating: 5,
      date: "Décembre 2023",
      review: "Excellent service pour les mises à niveau électriques de notre installation de fabrication. L'équipe a compris nos besoins industriels et a fourni des solutions efficaces. Temps d'arrêt minimal et exécution professionnelle. Ils ont également fourni un support de maintenance continu. Hautement recommandé pour les travaux électriques industriels.",
      initial: "P"
    },
    {
      name: "Julie Morin",
      location: "Terrebonne",
      service: "Inspection électrique",
      rating: 5,
      date: "Février 2024",
      review: "Inspection électrique approfondie pour l'achat de notre maison. L'électricien était très détaillé et a fourni un rapport complet avec photos. Il a expliqué tous les problèmes clairement et nous a donné des recommandations prioritaires. Service professionnel qui nous a donné la tranquillité d'esprit.",
      initial: "J"
    }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.page.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('testimonials.page.subtitle')}
          </p>
          <div className="flex justify-center">
            <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-6 py-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-lg font-semibold">{t('testimonials.stats.rating')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                4.9/5
              </div>
              <div className="text-lg text-gray-600">{t('testimonials.stats.rating')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                100+
              </div>
              <div className="text-lg text-gray-600">{t('testimonials.stats.customers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                500+
              </div>
              <div className="text-lg text-gray-600">{t('testimonials.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2">
                15+
              </div>
              <div className="text-lg text-gray-600">{t('testimonials.stats.experience')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.reviews.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.reviews.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
                
                <Quote className="h-8 w-8 text-gray-400 mb-4" />
                
                <p className="text-gray-700 leading-relaxed">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('testimonials.google.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('testimonials.google.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.google.com/search?q=LeoMax+Électrique"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              {t('testimonials.google.leave')}
            </a>
            <a
              href="https://www.facebook.com/leomaxelectrique"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
            >
              {t('testimonials.facebook.leave')}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.why.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('testimonials.why.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('testimonials.why.professional')}</h3>
              <p className="text-gray-600">{t('testimonials.why.professional.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('testimonials.why.quality')}</h3>
              <p className="text-gray-600">{t('testimonials.why.quality.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('testimonials.why.responsive')}</h3>
              <p className="text-gray-600">{t('testimonials.why.responsive.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('testimonials.why.communication')}</h3>
              <p className="text-gray-600">{t('testimonials.why.communication.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('testimonials.cta.title')}
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            {t('testimonials.cta.subtitle')}
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

export default Testimonials;