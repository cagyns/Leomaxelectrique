import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    'header.licensed': 'Licencié RBQ et Assuré',
    'header.emergency': 'Service d\'urgence 24/7',
    'header.callNow': 'Appelez Maintenant',
    'header.freeQuote': 'Soumission Gratuite',
    'header.home': 'Accueil',
    'header.services': 'Services',
    'header.about': 'À Propos',
    'header.contact': 'Contact',
    'header.testimonials': 'Témoignages',
    'header.faq': 'FAQ',
    'header.tagline': 'Services Électriques Professionnels',

    // Home Page
    'home.hero.title': 'Services Électriques Professionnels dans le',
    'home.hero.location': 'Grand Montréal',
    'home.hero.subtitle': 'Électriciens licenciés RBQ desservant Terrebonne, Laval, Montréal et la Rive-Nord. Solutions électriques résidentielles, commerciales et industrielles en qui vous pouvez avoir confiance.',
    'home.hero.call': 'Appelez (438) 876-0485',
    'home.hero.quote': 'Soumission Gratuite',

    // Trust Badges
    'trust.licensed': 'Licencié RBQ',
    'trust.license': 'Licence #5544-1234-01',
    'trust.insured': 'Entièrement Assuré',
    'trust.coverage': 'Couverture de 2M$',
    'trust.emergency': 'Urgence 24/7',
    'trust.available': 'Disponible Quand Vous en Avez Besoin',
    'trust.service': 'Service 5 Étoiles',
    'trust.customers': '100+ Clients Satisfaits',

    // Services
    'services.title': 'Services Électriques Complets',
    'services.subtitle': 'Des réparations simples aux installations complexes, nous gérons tous vos besoins électriques',
    'services.residential': 'Résidentiel',
    'services.residential.description': 'Services électriques complets pour les habitations, comprenant le câblage, les mises à niveau de tableau et l\'installation d\'éclairage.',
    'services.commercial': 'Commercial',
    'services.commercial.description': 'Solutions électriques professionnelles pour bureaux, commerces et bâtiments commerciaux.',
    'services.industrial': 'Industriel',
    'services.industrial.description': 'Services électriques intensifs pour installations de production et équipements industriels.',
    'services.panel.upgrades': 'Mise à niveau du panneau',
    'services.wiring': 'Câblage et recâblage',
    'services.lighting': 'Installation d\'éclairage',
    'services.ev.charger': 'Installation de borne électrique',
    'services.smart.home': 'Systèmes de maison intelligente',
    'services.office': 'Systèmes électriques de bureau',
    'services.retail': 'Éclairage de magasin de détail',
    'services.emergency.lighting': 'Éclairage d\'urgence',
    'services.power.distribution': 'Distribution d\'énergie',
    'services.code.compliance': 'Conformité aux codes',
    'services.equipment': 'Câblage d\'équipement',
    'services.motor.controls': 'Contrôles de moteur',
    'services.three.phase': 'Systèmes triphasés',
    'services.maintenance': 'Programmes de maintenance',
    'services.inspections': 'Inspections de sécurité',

    // Panel Upgrades Service Details
    'services.panel.title': 'Mise à niveau du panneau',
    'services.panel.description': 'Modernisez votre installation électrique grâce à des mises à niveau professionnelles de votre panneau et de l\'arrivée de service.',
    'services.panel.feature1': 'Améliorations du service de 100 A à 200 A',
    'services.panel.feature2': 'Remplacement du tableau électrique principal',
    'services.panel.feature3': 'Installation de sous-tableaux',
    'services.panel.feature4': 'Mises à niveau du socle de compteur',
    'services.panel.feature5': 'Amélioration du système de mise à la terre',
    'services.panel.feature6': 'Installation de protection contre les surtensions',

    // EV Charger Installation Service Details
    'services.ev.title': 'Installation de borne électrique',
    'services.ev.description': 'Installation professionnelle de bornes de recharge pour véhicules électriques pour maisons et entreprises.',
    'services.ev.feature1': 'Installation de chargeur domestique Niveau 2',
    'services.ev.feature2': 'Bornes de recharge commerciales',
    'services.ev.feature3': 'Permis électrique et inspection',
    'services.ev.feature4': 'Calcul de charge et mises à niveau',
    'services.ev.feature5': 'Configuration de chargeur intelligent',
    'services.ev.feature6': 'Chargeurs Tesla et universels',

    // Lighting Installation Service Details
    'services.lighting.title': 'Installation d\'éclairage',
    'services.lighting.description': 'Solutions d\'éclairage personnalisées pour applications intérieures et extérieures.',
    'services.lighting.feature1': 'Modernisation d\'éclairage LED',
    'services.lighting.feature2': 'Éclairage paysager et extérieur',
    'services.lighting.feature3': 'Éclairage sur rail et encastré',
    'services.lighting.feature4': 'Installation de lustre',
    'services.lighting.feature5': 'Systèmes de maison intelligente',
    'services.lighting.feature6': 'Éclairage d\'urgence',

    // Smart Home Service Details
    'services.smart.title': 'Systèmes de maison intelligente',
    'services.smart.description': 'Systèmes électriques modernes de domotique et maison intelligente pour plus de commodité et d\'efficacité.',
    'services.smart.feature1': 'Installation d\'interrupteurs et gradateurs intelligents',
    'services.smart.feature2': 'Systèmes de domotique',
    'services.smart.feature3': 'Câblage de thermostat intelligent',
    'services.smart.feature4': 'Intégration de système de sécurité',
    'services.smart.feature5': 'Configuration de contrôle vocal',
    'services.smart.feature6': 'Systèmes de surveillance énergétique',

    // Emergency Repairs Service Details
    'services.emergency.title': 'Réparations d\'urgence',
    'services.emergency.description': 'Services électriques d\'urgence 24/7 pour réparations urgentes et problèmes de sécurité.',
    'services.emergency.feature1': 'Dépannage de panne de courant',
    'services.emergency.feature2': 'Réparations de disjoncteur',
    'services.emergency.feature3': 'Prévention d\'incendie électrique',
    'services.emergency.feature4': 'Réparations de câblage dangereux',
    'services.emergency.feature5': 'Restauration après tempête',
    'services.emergency.feature6': 'Inspections de sécurité',

    // Services Page
    'services.page.title': 'Services Électriques Professionnels',
    'services.page.subtitle': 'Du recâblage résidentiel aux installations industrielles, nous offrons des services électriques complets dans la région du Grand Montréal avec des électriciens licenciés RBQ.',
    'services.page.cta.title': 'Prêt à Commencer Votre Projet Électrique?',
    'services.page.cta.subtitle': 'Obtenez une estimation gratuite de nos électriciens licenciés RBQ. Nous offrons des prix transparents et un travail de qualité.',
    'services.areas.title': 'Zones de Service',
    'services.areas.subtitle': 'Nous desservons fièrement la région du Grand Montréal avec des services électriques rapides et fiables',

    // About Page
    'about.title': 'À Propos de LeoMax Électrique',
    'about.subtitle': 'Votre entrepreneur électricien de confiance desservant la région du Grand Montréal depuis plus de 15 ans. Nous nous engageons à fournir des services électriques sécuritaires, fiables et professionnels.',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.projects': 'Projets Complétés',
    'about.stats.customers': 'Clients Satisfaits',
    'about.stats.emergency': 'Service d\'Urgence',
    'about.story.title': 'Notre Histoire',
    'about.values.title': 'Nos Valeurs',
    'about.values.subtitle': 'Les principes qui guident notre travail et définissent notre engagement envers l\'excellence',
    'about.values.safety.title': 'Sécurité d\'abord',
    'about.values.safety.desc': 'Nous priorisons la sécurité dans chaque projet, suivant des codes électriques stricts et des protocoles de sécurité pour protéger votre propriété et votre famille.',
    'about.values.quality.title': 'Travail de Qualité',
    'about.values.quality.desc': 'Nos électriciens qualifiés livrent un travail de qualité exceptionnelle qui résiste à l\'épreuve du temps, soutenu par notre garantie complète.',
    'about.values.customer.title': 'Focus Client',
    'about.values.customer.desc': 'Nous construisons des relations durables avec nos clients grâce à une communication transparente, des prix équitables et un service fiable.',
    'about.values.punctual.title': 'Service Ponctuel',
    'about.values.punctual.desc': 'Nous respectons votre temps et votre horaire, arrivant ponctuellement et complétant les projets efficacement sans compromettre la qualité.',
    'about.team.title': 'Notre Équipe',
    'about.team.subtitle': 'Rencontrez les professionnels qualifiés derrière LeoMax Électrique',
    'about.team.leo.title': 'Fondateur et Maître Électricien',
    'about.team.leo.desc': '15+ années d\'expérience en travaux électriques. Maître électricien licencié RBQ spécialisé dans les projets résidentiels et commerciaux.',
    'about.team.marc.title': 'Électricien Senior',
    'about.team.marc.desc': 'Spécialisé dans les systèmes électriques industriels et les installations de maison intelligente. 12+ années d\'expérience.',
    'about.team.antoine.title': 'Électricien',
    'about.team.antoine.desc': 'Expert en installations de bornes électriques et mises à niveau de panneaux électriques. 8+ années d\'expérience.',
    'about.certifications.title': 'Licencié et Certifié',
    'about.certifications.subtitle': 'Nous maintenons les plus hauts standards de certification et de licence',
    'about.certifications.rbq': 'Licencié RBQ',
    'about.certifications.rbq.desc': 'Régie du bâtiment du Québec',
    'about.certifications.insured': 'Entièrement Assuré',
    'about.certifications.insured.desc': 'Protection d\'assurance complète',
    'about.certifications.quality': 'Qualité Garantie',
    'about.certifications.quality.desc': 'Garantie de satisfaction à 100%',
    'about.why.title': 'Pourquoi Choisir LeoMax Électrique?',
    'about.why.subtitle': 'Voici ce qui nous distingue des autres entrepreneurs électriciens',
    'about.why.local': 'Expertise Locale',
    'about.why.local.desc': 'Compréhension approfondie des codes électriques et exigences du Grand Montréal',
    'about.why.pricing': 'Prix Transparents',
    'about.why.pricing.desc': 'Aucuns frais cachés - nous fournissons des estimations détaillées avant de commencer tout travail',
    'about.why.emergency': 'Service d\'Urgence 24/7',
    'about.why.emergency.desc': 'Disponible 24h/24 pour les problèmes électriques urgents',
    'about.why.clean': 'Environnement de Travail Propre',
    'about.why.clean.desc': 'Nous respectons votre propriété et laissons votre espace propre et ordonné',
    'about.why.technology': 'Technologie de Pointe',
    'about.why.technology.desc': 'Nous utilisons des outils modernes et restons à jour avec les innovations électriques',
    'about.why.warranty': 'Garantie Complète',
    'about.why.warranty.desc': 'Tous les travaux soutenus par notre garantie de qualité et protection de garantie',
    'about.cta.title': 'Prêt à Travailler Avec Nous?',
    'about.cta.subtitle': 'Découvrez la différence LeoMax Électrique. Contactez-nous aujourd\'hui pour votre projet électrique.',
    'about.team.section.title': 'Notre équipe',
    'about.team.section.subtitle': 'Notre équipe d\'électriciens certifiés est dédiée à offrir un service professionnel, sûr et rapide, à chaque intervention à Terrebonne et environs.',
    'about.team.expertise.title': 'Expertise certifiée',
    'about.team.expertise.desc': 'Électriciens licenciés avec formation continue et maîtrise des dernières normes.',
    'about.team.reliability.title': 'Fiabilité 24/7',
    'about.team.reliability.desc': 'Disponibles pour les urgences, interventions rapides et respect des délais convenus',
    'about.team.satisfaction.title': 'Satisfaction client',
    'about.team.satisfaction.desc': 'Engagement envers un travail propre, expliqué et garanti — notre priorité.',

    // Contact Page
    'contact.title': 'Contactez LeoMax Électrique',
    'contact.subtitle': 'Contactez nos électriciens licenciés pour une soumission gratuite ou un service d\'urgence. Nous sommes là pour vous aider avec tous vos besoins électriques dans la région du Grand Montréal.',
    'contact.send.email': 'Envoyer un Courriel',
    'contact.get.touch': 'Entrer en Contact',
    'contact.phone': 'Téléphone',
    'contact.phone.desc': 'Service d\'urgence 24/7 disponible',
    'contact.email': 'Courriel',
    'contact.email.desc': 'Nous répondons dans les 24 heures',
    'contact.address': 'Adresse',
    'contact.address.desc': 'Desservant la région du Grand Montréal',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.hours.weekday': 'Lundi - Vendredi: 7h00 - 19h00',
    'contact.hours.saturday': 'Samedi: 8h00 - 17h00',
    'contact.hours.sunday': 'Dimanche: Service d\'urgence seulement',
    'contact.emergency.title': 'Service d\'Urgence',
    'contact.emergency.desc': 'Les urgences électriques peuvent être dangereuses. Si vous rencontrez une panne de courant, un incendie électrique ou d\'autres problèmes électriques urgents, appelez-nous immédiatement.',
    'contact.emergency.call': 'Urgence: (438) 876-0485',
    'contact.form.title': 'Demander une Soumission Gratuite',
    'contact.form.thank': 'Merci!',
    'contact.form.received': 'Nous avons reçu votre message et vous contacterons dans les 24 heures.',
    'contact.form.type': 'Type de Demande',
    'contact.form.normal': 'Demande Normale',
    'contact.form.urgent': 'Urgent (Dans les 24 heures)',
    'contact.form.emergency': 'Urgence (ASAP)',
    'contact.form.send': 'Envoyer la Demande',
    'contact.map.title': 'Notre Emplacement et Zone de Service',
    'contact.map.subtitle': 'Situé à Terrebonne, desservant la région du Grand Montréal incluant Laval, Montréal et la Rive-Nord',
    'contact.areas.title': 'Zones que Nous Desservons',
    'contact.areas.subtitle': 'Services électriques professionnels dans toute la région du Grand Montréal',

    // Testimonials Page
    'testimonials.page.title': 'Ce Que Disent Nos Clients',
    'testimonials.page.subtitle': 'Ne nous croyez pas sur parole. Lisez ce que nos clients satisfaits ont à dire sur nos services électriques dans la région du Grand Montréal.',
    'testimonials.stats.rating': 'Note Moyenne',
    'testimonials.stats.customers': 'Clients Satisfaits',
    'testimonials.stats.projects': 'Projets Complétés',
    'testimonials.stats.experience': 'Années d\'Expérience',
    'testimonials.reviews.title': 'Avis Clients',
    'testimonials.reviews.subtitle': 'Commentaires réels de vrais clients dans la région du Grand Montréal',
    'testimonials.google.title': 'Laissez-nous un Avis',
    'testimonials.google.subtitle': 'Nous aimerions entendre parler de votre expérience avec LeoMax Électrique. Vos commentaires nous aident à nous améliorer et aident d\'autres clients à prendre des décisions éclairées.',
    'testimonials.google.leave': 'Laisser un Avis Google',
    'testimonials.facebook.leave': 'Laisser un Avis Facebook',
    'testimonials.why.title': 'Pourquoi Nos Clients Nous Choisissent',
    'testimonials.why.subtitle': 'Thèmes communs de nos avis clients',
    'testimonials.why.professional': 'Service Professionnel',
    'testimonials.why.professional.desc': 'Constamment professionnel, courtois et respectueux',
    'testimonials.why.quality': 'Travail de Qualité',
    'testimonials.why.quality.desc': 'Travail de haute qualité qui passe les inspections',
    'testimonials.why.responsive': 'Service Réactif',
    'testimonials.why.responsive.desc': 'Temps de réponse rapides, surtout pour les urgences',
    'testimonials.why.communication': 'Communication Claire',
    'testimonials.why.communication.desc': 'Excellentes explications et prix transparents',
    'testimonials.cta.title': 'Prêt à Découvrir Notre Service?',
    'testimonials.cta.subtitle': 'Rejoignez des centaines de clients satisfaits qui font confiance à LeoMax Électrique pour leurs besoins électriques.',

    // FAQ Page
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Obtenez des réponses aux questions courantes sur nos services électriques, nos prix et la sécurité. Si vous ne trouvez pas ce que vous cherchez, contactez-nous directement.',
    'faq.ask': 'Poser une Question',
    'faq.emergency.title': 'Urgence Électrique?',
    'faq.emergency.desc': 'Si vous rencontrez une urgence électrique comme des pannes de courant, des prises qui font des étincelles, des odeurs de brûlé ou tout problème de sécurité immédiat, n\'attendez pas - appelez-nous immédiatement!',
    'faq.emergency.call': 'Urgence: (438) 876-0485',
    'faq.safety.title': 'Conseils de Sécurité Électrique',
    'faq.safety.subtitle': 'Informations de sécurité importantes que tout propriétaire devrait connaître',
    'faq.safety.breaker': 'Sécurité du Disjoncteur',
    'faq.safety.breaker.desc': 'Ne réinitialisez jamais de façon répétée un disjoncteur qui se déclenche. S\'il se déclenche à nouveau immédiatement, il y a probablement un problème sérieux qui nécessite une attention professionnelle.',
    'faq.safety.gfci': 'Prises GFCI',
    'faq.safety.gfci.desc': 'Testez les prises GFCI mensuellement en appuyant sur le bouton de test. Si elles ne se déclenchent pas ou ne se réinitialisent pas, remplacez-les immédiatement pour la sécurité.',
    'faq.safety.overload': 'Surcharge de Prises',
    'faq.safety.overload.desc': 'Évitez de brancher trop d\'appareils dans une prise. Utilisez des barres d\'alimentation avec protection contre les surtensions et ne jamais enchaîner les rallonges.',
    'faq.safety.warning': 'Signes d\'Avertissement',
    'faq.safety.warning.desc': 'Surveillez les odeurs de brûlé, les prises chaudes, les lumières qui clignotent ou les sensations de picotement en touchant les interrupteurs. Ceux-ci indiquent des problèmes sérieux.',
    'faq.safety.water': 'Eau et Électricité',
    'faq.safety.water.desc': 'Ne manipulez jamais d\'appareils électriques avec les mains mouillées ou n\'utilisez pas d\'appareils électriques près de l\'eau. Installez des prises GFCI dans les salles de bain et cuisines.',
    'faq.safety.diy': 'Limitations du Bricolage',
    'faq.safety.diy.desc': 'Laissez les travaux électriques aux professionnels. Les tâches simples comme changer les ampoules sont acceptables, mais le câblage devrait toujours être fait par des électriciens licenciés.',
    'faq.still.title': 'Vous Avez Encore des Questions?',
    'faq.still.subtitle': 'Nos électriciens expérimentés sont là pour vous aider. Contactez-nous pour des réponses personnalisées à vos questions électriques et une consultation gratuite.',

    // FAQ Categories and Questions
    'faq.category.general': 'Services Généraux',
    'faq.category.pricing': 'Prix et Paiement',
    'faq.category.residential': 'Services Résidentiels',
    'faq.category.commercial': 'Commercial et Industriel',
    'faq.category.safety': 'Sécurité et Urgences',

    // General Services FAQ
    'faq.general.areas.q': 'Quelles zones desservez-vous?',
    'faq.general.areas.a': 'Nous desservons la région du Grand Montréal incluant Terrebonne, Laval, Montréal et la Rive-Nord. Notre zone de service couvre des communautés comme La Plaine, Lachenaie, Chomedey, Vimont, Sainte-Rose, Ahuntsic-Cartierville, Rivière-des-Prairies, Montréal-Nord, Repentigny, Mascouche et L\'Assomption.',
    
    'faq.general.licensed.q': 'Êtes-vous licenciés et assurés?',
    'faq.general.licensed.a': 'Oui, nous sommes entièrement licenciés par la Régie du bâtiment du Québec (Licence RBQ #5544-1234-01) et nous avons une assurance responsabilité complète avec une couverture de 2M$. Tous nos électriciens sont des professionnels certifiés et expérimentés.',
    
    'faq.general.emergency.q': 'Offrez-vous des services d\'urgence?',
    'faq.general.emergency.a': 'Oui, nous fournissons des services électriques d\'urgence 24/7. Si vous avez une panne de courant, un incendie électrique ou d\'autres problèmes de sécurité électrique urgents, appelez-nous immédiatement au (438) 876-0485. Nous répondons généralement aux urgences dans les 2 heures.',
    
    'faq.general.quote.q': 'Comment puis-je obtenir une soumission?',
    'faq.general.quote.a': 'Vous pouvez obtenir une soumission gratuite en nous appelant au (438) 876-0485, en remplissant notre formulaire de contact en ligne, ou en nous envoyant un courriel à info@leomaxelectrique.ca. Nous planifierons un moment convenable pour évaluer votre projet et fournir une estimation détaillée.',

    // Pricing & Payment FAQ
    'faq.pricing.estimates.q': 'Facturez-vous pour les estimations?',
    'faq.pricing.estimates.a': 'Non, nous fournissons des estimations gratuites pour tous les projets électriques. Notre électricien visitera votre propriété, évaluera le travail nécessaire et fournira une estimation écrite détaillée sans frais.',
    
    'faq.pricing.payment.q': 'Quels modes de paiement acceptez-vous?',
    'faq.pricing.payment.a': 'Nous acceptons l\'argent comptant, les chèques et toutes les principales cartes de crédit (Visa, MasterCard, American Express). Pour les projets plus importants, nous pouvons organiser des plans de paiement. Le paiement est généralement dû à la fin des travaux.',
    
    'faq.pricing.hidden.q': 'Y a-t-il des frais cachés?',
    'faq.pricing.hidden.a': 'Non, nous croyons en la transparence des prix. Nos estimations incluent tous les matériaux, la main-d\'œuvre, les permis et les taxes applicables. Tout travail supplémentaire sera discuté et approuvé avant de procéder.',
    
    'faq.pricing.warranty.q': 'Offrez-vous des garanties?',
    'faq.pricing.warranty.a': 'Oui, nous garantissons tout notre travail pendant un an à partir de l\'achèvement. Les matériaux viennent généralement avec des garanties du fabricant. Nous soutenons notre travail et résoudrons tout problème sans coût supplémentaire.',

    // Residential Services FAQ
    'faq.residential.panel.q': 'Quand devrais-je mettre à niveau mon panneau électrique?',
    'faq.residential.panel.a': 'Considérez une mise à niveau si vous avez une maison plus ancienne (construite avant 1990), des disjoncteurs qui se déclenchent fréquemment, une boîte à fusibles, si vous ajoutez des appareils majeurs, ou installez un chargeur de VE. Les panneaux modernes de 200A sont plus sûrs et plus efficaces que les anciens systèmes de 100A.',
    
    'faq.residential.ev.q': 'Pouvez-vous installer des bornes de recharge pour VE?',
    'faq.residential.ev.a': 'Oui, nous nous spécialisons dans l\'installation de chargeurs de VE pour les bornes de recharge Tesla et universelles. Cela inclut les chargeurs domestiques de Niveau 2, les permis électriques, les calculs de charge et toutes les mises à niveau électriques nécessaires.',
    
    'faq.residential.permit.q': 'Ai-je besoin d\'un permis pour les travaux électriques?',
    'faq.residential.permit.a': 'La plupart des travaux électriques nécessitent des permis au Québec. Nous nous occupons de toutes les demandes de permis et inspections pour nos clients. Cela garantit que le travail respecte les exigences du code et est sécuritaire pour votre famille.',
    
    'faq.residential.rewiring.q': 'Combien de temps prend le recâblage d\'une maison?',
    'faq.residential.rewiring.a': 'Le recâblage complet prend généralement 3-7 jours selon la taille et la complexité de la maison. Nous travaillons efficacement pour minimiser les perturbations à votre vie quotidienne et pouvons souvent travailler selon votre horaire.',

    // Commercial & Industrial FAQ
    'faq.commercial.buildings.q': 'Travaillez-vous sur les bâtiments commerciaux?',
    'faq.commercial.buildings.a': 'Oui, nous fournissons des services électriques commerciaux complets incluant les immeubles de bureaux, magasins de détail, restaurants et entrepôts. Nous gérons tout, des nouvelles installations à la maintenance et aux réparations.',
    
    'faq.commercial.industrial.q': 'Pouvez-vous gérer les travaux électriques industriels?',
    'faq.commercial.industrial.a': 'Absolument. Nous avons de l\'expérience avec les systèmes électriques industriels, l\'alimentation triphasée, les contrôles de moteur et le câblage d\'équipement spécialisé. Nous offrons aussi des programmes de maintenance préventive pour les clients industriels.',
    
    'faq.commercial.weekends.q': 'Travaillez-vous les fins de semaine pour les projets commerciaux?',
    'faq.commercial.weekends.a': 'Oui, nous comprenons que les clients commerciaux et industriels ont souvent besoin de travaux effectués en dehors des heures d\'affaires. Nous pouvons planifier le travail pendant les soirées, fins de semaine ou jours fériés pour minimiser les perturbations à vos opérations.',
    
    'faq.commercial.maintenance.q': 'Fournissez-vous des contrats de maintenance?',
    'faq.commercial.maintenance.a': 'Oui, nous offrons des contrats de maintenance pour les clients commerciaux et industriels. Ceux-ci incluent des inspections régulières, la maintenance préventive et un service prioritaire pour les réparations. Contactez-nous pour discuter d\'un plan de maintenance personnalisé.',

    // Safety & Emergencies FAQ
    'faq.safety.emergency.q': 'Qu\'est-ce qui constitue une urgence électrique?',
    'faq.safety.emergency.a': 'Les urgences électriques incluent les pannes de courant, les odeurs de brûlé, les prises qui font des étincelles, les fils exposés, les incendies électriques, les disjoncteurs qui se déclenchent fréquemment, ou toute situation qui pose des risques de sécurité immédiats. Appelez-nous immédiatement au (438) 876-0485.',
    
    'faq.safety.breaker.reset.q': 'Est-il sécuritaire de réinitialiser un disjoncteur déclenché?',
    'faq.safety.breaker.reset.a': 'Vous pouvez réinitialiser un disjoncteur une fois, mais s\'il se déclenche à nouveau immédiatement, ne continuez pas à le réinitialiser. Cela indique un problème qui nécessite une attention professionnelle. Appelez-nous pour diagnostiquer et réparer le problème sous-jacent en toute sécurité.',
    
    'faq.safety.sparking.q': 'Que dois-je faire si une prise fait des étincelles?',
    'faq.safety.sparking.a': 'Éteignez immédiatement le disjoncteur de cette prise et ne l\'utilisez pas. Les prises qui font des étincelles sont un risque d\'incendie et nécessitent une attention professionnelle immédiate. Appelez-nous pour un service d\'urgence.',
    
    'faq.safety.inspection.q': 'À quelle fréquence devrais-je faire inspecter mon système électrique?',
    'faq.safety.inspection.a': 'Nous recommandons des inspections électriques tous les 5-10 ans pour les maisons, ou lors de l\'achat/vente d\'une propriété. Les bâtiments commerciaux devraient être inspectés annuellement. Les inspections régulières aident à identifier les problèmes potentiels avant qu\'ils ne deviennent dangereux.',

    // Quote Form
    'quote.title': 'Obtenez Votre Soumission Gratuite Aujourd\'hui',
    'quote.subtitle': 'Parlez-nous de votre projet électrique et nous vous fournirons une estimation détaillée',
    'quote.name': 'Nom Complet',
    'quote.email': 'Adresse Courriel',
    'quote.phone': 'Numéro de Téléphone',
    'quote.service': 'Service Requis',
    'quote.select': 'Sélectionnez un service',
    'quote.residential': 'Électricité Résidentielle',
    'quote.commercial': 'Électricité Commerciale',
    'quote.industrial': 'Électricité Industrielle',
    'quote.panel': 'Mise à Niveau de Panneau',
    'quote.ev': 'Installation de Borne Électrique',
    'quote.smart': 'Système de Maison Intelligente',
    'quote.emergency': 'Réparation d\'Urgence',
    'quote.other': 'Autre',
    'quote.description': 'Description du Projet',
    'quote.placeholder': 'Veuillez décrire votre projet électrique en détail...',
    'quote.submit': 'Obtenir une Soumission Gratuite',

    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clients',
    'testimonials.subtitle': 'Ne nous croyez pas sur parole - écoutez nos clients satisfaits',
    'testimonials.more': 'Lire Plus d\'Avis',

    // Footer
    'footer.company': 'LeoMax Électrique',
    'footer.tagline': 'Services Électriques Professionnels',
    'footer.description': 'Votre entrepreneur électricien de confiance desservant la région du Grand Montréal avec plus de 15 ans d\'expérience.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.residential': 'Électricité Résidentielle',
    'footer.commercial': 'Systèmes Commerciaux',
    'footer.industrial': 'Câblage Industriel',
    'footer.panel': 'Mise à Niveau de Panneaux',
    'footer.ev': 'Installation de Borne Électrique',
    'footer.smart': 'Systèmes de Maison Intelligente',
    'footer.contact': 'Informations de Contact',
    'footer.emergency': 'Service d\'urgence 24/7',
    'footer.hours': 'Lun-Ven: 7h-19h',
    'footer.weekend': 'Sam: 8h-17h, Dim: Urgence Seulement',
    'footer.rights': 'Tous droits réservés.',
    'footer.license': 'Licence RBQ #5544-1234-01 | Entièrement Licencié et Assuré',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions de Service',

    // Common
    'common.required': 'requis',
    'common.phone': '(438) 876-0485',
    'common.email': 'info@leomaxelectrique.ca',
    'common.address': '8 Chemin Saint Stanislas',
    'common.city': 'Terrebonne, QC J7M 1Z5',
    
    // Performance
    'loading': 'Chargement...',
    'error': 'Erreur'
  },
  en: {
    // Header
    'header.licensed': 'RBQ Licensed & Insured',
    'header.emergency': '24/7 Emergency Service',
    'header.callNow': 'Call Now',
    'header.freeQuote': 'Free Quote',
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About',
    'header.contact': 'Contact',
    'header.testimonials': 'Testimonials',
    'header.faq': 'FAQ',
    'header.tagline': 'Professional Electrical Services',

    // Home Page
    'home.hero.title': 'Professional Electrical Services in',
    'home.hero.location': 'Greater Montreal',
    'home.hero.subtitle': 'Licensed RBQ electricians serving Terrebonne, Laval, Montreal, and North Shore. Residential, commercial, and industrial electrical solutions you can trust.',
    'home.hero.call': 'Call (438) 876-0485',
    'home.hero.quote': 'Get Free Quote',

    // Trust Badges
    'trust.licensed': 'RBQ Licensed',
    'trust.license': 'License #5544-1234-01',
    'trust.insured': 'Fully Insured',
    'trust.coverage': '$2M Liability Coverage',
    'trust.emergency': '24/7 Emergency',
    'trust.available': 'Available When You Need Us',
    'trust.service': '5-Star Service',
    'trust.customers': '100+ Happy Customers',

    // Services
    'services.title': 'Complete Electrical Services',
    'services.subtitle': 'From simple repairs to complex installations, we handle all your electrical needs',
    'services.residential': 'Residential',
    'services.residential.description': 'Complete electrical services for homes including wiring, panel upgrades, and lighting installation.',
    'services.commercial': 'Commercial',
    'services.commercial.description': 'Professional electrical solutions for offices, retail stores, and commercial buildings.',
    'services.industrial': 'Industrial',
    'services.industrial.description': 'Heavy-duty electrical services for manufacturing facilities and industrial equipment.',
    'services.panel.upgrades': 'Panel upgrades & service entrances',
    'services.wiring': 'Wiring & rewiring',
    'services.lighting': 'Lighting installation',
    'services.ev.charger': 'EV charger installation',
    'services.smart.home': 'Smart home systems',
    'services.office': 'Office electrical systems',
    'services.retail': 'Retail store lighting',
    'services.emergency.lighting': 'Emergency lighting',
    'services.power.distribution': 'Power distribution',
    'services.code.compliance': 'Code compliance',
    'services.equipment': 'Equipment wiring',
    'services.motor.controls': 'Motor controls',
    'services.three.phase': 'Three-phase systems',
    'services.maintenance': 'Maintenance programs',
    'services.inspections': 'Safety inspections',

    // EV Charger Installation Service Details
    'services.ev.title': 'EV Charger Installation',
    'services.ev.description': 'Professional installation of electric vehicle charging stations for homes and businesses.',
    'services.ev.feature1': 'Level 2 home charger installation',
    'services.ev.feature2': 'Commercial charging stations',
    'services.ev.feature3': 'Electrical permit and inspection',
    'services.ev.feature4': 'Load calculation and upgrades',
    'services.ev.feature5': 'Smart charger setup',
    'services.ev.feature6': 'Tesla and universal chargers',

    // Lighting Installation Service Details
    'services.lighting.title': 'Lighting Installation',
    'services.lighting.description': 'Custom lighting solutions for both indoor and outdoor applications.',
    'services.lighting.feature1': 'LED lighting retrofits',
    'services.lighting.feature2': 'Landscape and outdoor lighting',
    'services.lighting.feature3': 'Track and recessed lighting',
    'services.lighting.feature4': 'Chandelier installation',
    'services.lighting.feature5': 'Smart home systems',
    'services.lighting.feature6': 'Emergency lighting',

    // Smart Home Service Details
    'services.smart.title': 'Smart Home Systems',
    'services.smart.description': 'Modern home automation and smart electrical systems for enhanced convenience and efficiency.',
    'services.smart.feature1': 'Smart switch and dimmer installation',
    'services.smart.feature2': 'Home automation systems',
    'services.smart.feature3': 'Smart thermostat wiring',
    'services.smart.feature4': 'Security system integration',
    'services.smart.feature5': 'Voice control setup',
    'services.smart.feature6': 'Energy monitoring systems',

    // Emergency Repairs Service Details
    'services.emergency.title': 'Emergency Repairs',
    'services.emergency.description': '24/7 emergency electrical services for urgent repairs and safety issues.',
    'services.emergency.feature1': 'Power outage troubleshooting',
    'services.emergency.feature2': 'Circuit breaker repairs',
    'services.emergency.feature3': 'Electrical fire prevention',
    'services.emergency.feature4': 'Dangerous wiring repairs',
    'services.emergency.feature5': 'Storm damage restoration',
    'services.emergency.feature6': 'Safety inspections',

    // Services Page
    'services.page.title': 'Professional Electrical Services',
    'services.page.subtitle': 'From residential rewiring to industrial installations, we provide comprehensive electrical services throughout the Greater Montreal area with RBQ licensed electricians.',
    'services.page.cta.title': 'Ready to Start Your Electrical Project?',
    'services.page.cta.subtitle': 'Get a free estimate from our licensed RBQ electricians. We provide transparent pricing and quality workmanship.',
    'services.areas.title': 'Service Areas',
    'services.areas.subtitle': 'We proudly serve the Greater Montreal area with fast, reliable electrical services',

    // About Page
    'about.title': 'About LeoMax Électrique',
    'about.subtitle': 'Your trusted electrical contractor serving the Greater Montreal area for over 15 years. We\'re committed to providing safe, reliable, and professional electrical services.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Projects Completed',
    'about.stats.customers': 'Happy Customers',
    'about.stats.emergency': 'Emergency Service',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Founded in 2023 in Terrebonne, LeoMax Électrique began with a clear mission: to deliver honest, reliable electrical services to Greater Montreal. Originally a family‑run business, we have since become one of the region\'s most trusted electrical specialists.',
    'about.story.p2': 'Our founder, Luc, started as an electrical apprentice and honed his expertise across residential, commercial, and industrial projects. His unwavering dedication to quality and customer satisfaction is the foundation of our company\'s values.',
    'about.story.p3': 'We hold a valid RBQ license (no. 5838‑8075‑01, issued September 29, 2023) and are fully insured. Our skilled team upholds the highest standards of excellence. With over 500 completed projects to date, we remain committed to serving our community with passion, integrity, and craftsmanship.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide our work and define our commitment to excellence',
    'about.values.safety.title': 'Safety First',
    'about.values.safety.desc': 'We prioritize safety in every project, following strict electrical codes and safety protocols to protect your property and family.',
    'about.values.quality.title': 'Quality Workmanship',
    'about.values.quality.desc': 'Our skilled electricians deliver exceptional quality work that stands the test of time, backed by our comprehensive warranty.',
    'about.values.customer.title': 'Customer Focus',
    'about.values.customer.desc': 'We build lasting relationships with our clients through transparent communication, fair pricing, and reliable service.',
    'about.values.punctual.title': 'Punctual Service',
    'about.values.punctual.desc': 'We respect your time and schedule, arriving promptly and completing projects efficiently without compromising quality.',
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Meet the skilled professionals behind LeoMax Électrique',
    'about.team.leo.title': 'Founder & Master Electrician',
    'about.team.leo.desc': '15+ years of experience in electrical work. RBQ licensed master electrician specializing in residential and commercial projects.',
    'about.team.marc.title': 'Senior Electrician',
    'about.team.marc.desc': 'Specializes in industrial electrical systems and smart home installations. 12+ years of experience.',
    'about.team.antoine.title': 'Electrician',
    'about.team.antoine.desc': 'Expert in EV charger installations and electrical panel upgrades. 8+ years of experience.',
    'about.certifications.title': 'Licensed & Certified',
    'about.certifications.subtitle': 'We maintain the highest standards of certification and licensing',
    'about.certifications.rbq': 'RBQ Licensed',
    'about.certifications.rbq.desc': 'Régie du bâtiment du Québec',
    'about.certifications.insured': 'Fully Insured',
    'about.certifications.insured.desc': 'Comprehensive insurance protection',
    'about.certifications.quality': 'Quality Guaranteed',
    'about.certifications.quality.desc': '100% satisfaction guarantee',
    'about.why.title': 'Why Choose LeoMax Électrique?',
    'about.why.subtitle': 'Here\'s what sets us apart from other electrical contractors',
    'about.why.local': 'Local Expertise',
    'about.why.local.desc': 'Deep understanding of Greater Montreal electrical codes and requirements',
    'about.why.pricing': 'Transparent Pricing',
    'about.why.pricing.desc': 'No hidden fees - we provide detailed estimates before starting any work',
    'about.why.emergency': '24/7 Emergency Service',
    'about.why.emergency.desc': 'Available around the clock for urgent electrical problems',
    'about.why.clean': 'Clean Work Environment',
    'about.why.clean.desc': 'We respect your property and leave your space clean and tidy',
    'about.why.technology': 'Latest Technology',
    'about.why.technology.desc': 'We use modern tools and stay updated with electrical innovations',
    'about.why.warranty': 'Comprehensive Warranty',
    'about.why.warranty.desc': 'All work backed by our quality guarantee and warranty protection',
    'about.cta.title': 'Ready to Work With Us?',
    'about.cta.subtitle': 'Experience the LeoMax Électrique difference. Contact us today for your electrical project.',
    'about.team.section.title': 'Our Team',
    'about.team.section.subtitle': 'Our team of certified electricians is dedicated to providing professional, safe, and fast service for every intervention in Terrebonne and surrounding areas.',
    'about.team.expertise.title': 'Certified Expertise',
    'about.team.expertise.desc': 'Licensed electricians with ongoing training and mastery of the latest standards.',
    'about.team.reliability.title': '24/7 Reliability',
    'about.team.reliability.desc': 'Available for emergencies, quick interventions and respect for agreed deadlines',
    'about.team.satisfaction.title': 'Customer Satisfaction',
    'about.team.satisfaction.desc': 'Commitment to clean, explained and guaranteed work — our priority.',

    // Contact Page
    'contact.title': 'Contact LeoMax Électrique',
    'contact.subtitle': 'Get in touch with our licensed electricians for a free quote or emergency service. We\'re here to help with all your electrical needs in the Greater Montreal area.',
    'contact.send.email': 'Send Email',
    'contact.get.touch': 'Get in Touch',
    'contact.phone': 'Phone',
    'contact.phone.desc': '24/7 Emergency Service Available',
    'contact.email': 'Email',
    'contact.email.desc': 'We respond within 24 hours',
    'contact.address': 'Address',
    'contact.address.desc': 'Serving Greater Montreal Area',
    'contact.hours': 'Business Hours',
    'contact.hours.weekday': 'Monday - Friday: 7:00 AM - 7:00 PM',
    'contact.hours.saturday': 'Saturday: 8:00 AM - 5:00 PM',
    'contact.hours.sunday': 'Sunday: Emergency Service Only',
    'contact.emergency.title': 'Emergency Service',
    'contact.emergency.desc': 'Electrical emergencies can be dangerous. If you\'re experiencing a power outage, electrical fire, or other urgent electrical issues, call us immediately.',
    'contact.emergency.call': 'Emergency: (438) 876-0485',
    'contact.form.title': 'Request a Free Quote',
    'contact.form.thank': 'Thank You!',
    'contact.form.received': 'We\'ve received your message and will contact you within 24 hours.',
    'contact.form.type': 'Request Type',
    'contact.form.normal': 'Normal Request',
    'contact.form.urgent': 'Urgent (Within 24 hours)',
    'contact.form.emergency': 'Emergency (ASAP)',
    'contact.form.send': 'Send Request',
    'contact.map.title': 'Our Location & Service Area',
    'contact.map.subtitle': 'Located in Terrebonne, serving the Greater Montreal area including Laval, Montreal, and North Shore',
    'contact.areas.title': 'Areas We Serve',
    'contact.areas.subtitle': 'Professional electrical services throughout the Greater Montreal region',

    // Testimonials Page
    'testimonials.page.title': 'What Our Customers Say',
    'testimonials.page.subtitle': 'Don\'t just take our word for it. Read what our satisfied customers have to say about our electrical services throughout the Greater Montreal area.',
    'testimonials.stats.rating': 'Average Rating',
    'testimonials.stats.customers': 'Happy Customers',
    'testimonials.stats.projects': 'Projects Completed',
    'testimonials.stats.experience': 'Years Experience',
    'testimonials.reviews.title': 'Customer Reviews',
    'testimonials.reviews.subtitle': 'Real feedback from real customers across the Greater Montreal area',
    'testimonials.google.title': 'Leave Us a Review',
    'testimonials.google.subtitle': 'We\'d love to hear about your experience with LeoMax Électrique. Your feedback helps us improve and helps other customers make informed decisions.',
    'testimonials.google.leave': 'Leave Google Review',
    'testimonials.facebook.leave': 'Leave Facebook Review',
    'testimonials.why.title': 'Why Our Customers Choose Us',
    'testimonials.why.subtitle': 'Common themes from our customer reviews',
    'testimonials.why.professional': 'Professional Service',
    'testimonials.why.professional.desc': 'Consistently professional, courteous, and respectful',
    'testimonials.why.quality': 'Quality Work',
    'testimonials.why.quality.desc': 'High-quality workmanship that passes inspections',
    'testimonials.why.responsive': 'Responsive Service',
    'testimonials.why.responsive.desc': 'Quick response times, especially for emergencies',
    'testimonials.why.communication': 'Clear Communication',
    'testimonials.why.communication.desc': 'Excellent explanations and transparent pricing',
    'testimonials.cta.title': 'Ready to Experience Our Service?',
    'testimonials.cta.subtitle': 'Join hundreds of satisfied customers who trust LeoMax Électrique for their electrical needs.',

    // FAQ Page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Get answers to common questions about our electrical services, pricing, and safety. If you don\'t find what you\'re looking for, contact us directly.',
    'faq.ask': 'Ask a Question',
    'faq.emergency.title': 'Electrical Emergency?',
    'faq.emergency.desc': 'If you\'re experiencing an electrical emergency such as power outages, sparking outlets, burning smells, or any immediate safety concerns, don\'t wait - call us immediately!',
    'faq.emergency.call': 'Emergency: (438) 876-0485',
    'faq.safety.title': 'Electrical Safety Tips',
    'faq.safety.subtitle': 'Important safety information every homeowner should know',
    'faq.safety.breaker': 'Circuit Breaker Safety',
    'faq.safety.breaker.desc': 'Never repeatedly reset a tripped breaker. If it trips again immediately, there\'s likely a serious problem that needs professional attention.',
    'faq.safety.gfci': 'GFCI Outlets',
    'faq.safety.gfci.desc': 'Test GFCI outlets monthly by pressing the test button. If they don\'t trip or won\'t reset, replace them immediately for safety.',
    'faq.safety.overload': 'Outlet Overloading',
    'faq.safety.overload.desc': 'Avoid plugging too many devices into one outlet. Use power strips with surge protection and never daisy-chain extension cords.',
    'faq.safety.warning': 'Warning Signs',
    'faq.safety.warning.desc': 'Watch for burning smells, warm outlets, flickering lights, or tingling sensations when touching switches. These indicate serious problems.',
    'faq.safety.water': 'Water and Electricity',
    'faq.safety.water.desc': 'Never handle electrical devices with wet hands or use electrical appliances near water. Install GFCI outlets in bathrooms and kitchens.',
    'faq.safety.diy': 'DIY Limitations',
    'faq.safety.diy.desc': 'Leave electrical work to professionals. Simple tasks like changing light bulbs are fine, but wiring should always be done by licensed electricians.',
    'faq.still.title': 'Still Have Questions?',
    'faq.still.subtitle': 'Our experienced electricians are here to help. Contact us for personalized answers to your electrical questions and a free consultation.',

    // FAQ Categories and Questions
    'faq.category.general': 'General Services',
    'faq.category.pricing': 'Pricing & Payment',
    'faq.category.residential': 'Residential Services',
    'faq.category.commercial': 'Commercial & Industrial',
    'faq.category.safety': 'Safety & Emergencies',

    // General Services FAQ
    'faq.general.areas.q': 'What areas do you serve?',
    'faq.general.areas.a': 'We serve the Greater Montreal area including Terrebonne, Laval, Montreal, and the North Shore. Our service area covers communities like La Plaine, Lachenaie, Chomedey, Vimont, Sainte-Rose, Ahuntsic-Cartierville, Rivière-des-Prairies, Montreal-Nord, Repentigny, Mascouche, and L\'Assomption.',
    
    'faq.general.licensed.q': 'Are you licensed and insured?',
    'faq.general.licensed.a': 'Yes, we are fully licensed by the Régie du bâtiment du Québec (RBQ License #5544-1234-01) and carry comprehensive liability insurance with $2M coverage. All our electricians are certified and experienced professionals.',
    
    'faq.general.emergency.q': 'Do you offer emergency services?',
    'faq.general.emergency.a': 'Yes, we provide 24/7 emergency electrical services. If you have a power outage, electrical fire, or other urgent electrical safety issues, call us immediately at (438) 876-0485. We typically respond to emergencies within 2 hours.',
    
    'faq.general.quote.q': 'How do I get a quote?',
    'faq.general.quote.a': 'You can get a free quote by calling us at (438) 876-0485, filling out our online contact form, or emailing us at info@leomaxelectrique.ca. We\'ll schedule a convenient time to assess your project and provide a detailed estimate.',

    // Pricing & Payment FAQ
    'faq.pricing.estimates.q': 'Do you charge for estimates?',
    'faq.pricing.estimates.a': 'No, we provide free estimates for all electrical projects. Our electrician will visit your property, assess the work needed, and provide a detailed written estimate at no charge.',
    
    'faq.pricing.payment.q': 'What payment methods do you accept?',
    'faq.pricing.payment.a': 'We accept cash, check, and all major credit cards (Visa, MasterCard, American Express). For larger projects, we can arrange payment plans. Payment is typically due upon completion of work.',
    
    'faq.pricing.hidden.q': 'Are there any hidden fees?',
    'faq.pricing.hidden.a': 'No, we believe in transparent pricing. Our estimates include all materials, labor, permits, and applicable taxes. Any additional work will be discussed and approved before proceeding.',
    
    'faq.pricing.warranty.q': 'Do you offer warranties?',
    'faq.pricing.warranty.a': 'Yes, we warranty all our workmanship for one year from completion. Materials typically come with manufacturer warranties. We stand behind our work and will address any issues at no additional cost.',

    // Residential Services FAQ
    'faq.residential.panel.q': 'When should I upgrade my electrical panel?',
    'faq.residential.panel.a': 'Consider upgrading if you have an older home (built before 1990), frequently trip breakers, have a fuse box, are adding major appliances, or installing an EV charger. Modern 200A panels are safer and more efficient than older 100A systems.',
    
    'faq.residential.ev.q': 'Can you install EV charging stations?',
    'faq.residential.ev.a': 'Yes, we specialize in EV charger installations for both Tesla and universal charging stations. This includes Level 2 home chargers, electrical permits, load calculations, and any necessary electrical upgrades.',
    
    'faq.residential.permit.q': 'Do I need a permit for electrical work?',
    'faq.residential.permit.a': 'Most electrical work requires permits in Quebec. We handle all permit applications and inspections for our customers. This ensures the work meets code requirements and is safe for your family.',
    
    'faq.residential.rewiring.q': 'How long does rewiring a house take?',
    'faq.residential.rewiring.a': 'Complete rewiring typically takes 3-7 days depending on the home size and complexity. We work efficiently to minimize disruption to your daily life and can often work around your schedule.',

    // Commercial & Industrial FAQ
    'faq.commercial.buildings.q': 'Do you work on commercial buildings?',
    'faq.commercial.buildings.a': 'Yes, we provide comprehensive commercial electrical services including office buildings, retail stores, restaurants, and warehouses. We handle everything from new installations to maintenance and repairs.',
    
    'faq.commercial.industrial.q': 'Can you handle industrial electrical work?',
    'faq.commercial.industrial.a': 'Absolutely. We have experience with industrial electrical systems, three-phase power, motor controls, and specialized equipment wiring. We also offer preventive maintenance programs for industrial clients.',
    
    'faq.commercial.weekends.q': 'Do you work on weekends for commercial projects?',
    'faq.commercial.weekends.a': 'Yes, we understand that commercial and industrial clients often need work done outside business hours. We can schedule work during evenings, weekends, or holidays to minimize disruption to your operations.',
    
    'faq.commercial.maintenance.q': 'Do you provide maintenance contracts?',
    'faq.commercial.maintenance.a': 'Yes, we offer maintenance contracts for commercial and industrial clients. These include regular inspections, preventive maintenance, and priority service for repairs. Contact us to discuss a customized maintenance plan.',

    // Safety & Emergencies FAQ
    'faq.safety.emergency.q': 'What constitutes an electrical emergency?',
    'faq.safety.emergency.a': 'Electrical emergencies include power outages, burning smells, sparking outlets, exposed wires, electrical fires, frequent breaker trips, or any situation that poses immediate safety risks. Call us immediately at (438) 876-0485.',
    
    'faq.safety.breaker.reset.q': 'Is it safe to reset a tripped breaker?',
    'faq.safety.breaker.reset.a': 'You can reset a breaker once, but if it trips again immediately, don\'t keep resetting it. This indicates a problem that needs professional attention. Call us to diagnose and fix the underlying issue safely.',
    
    'faq.safety.sparking.q': 'What should I do if an outlet is sparking?',
    'faq.safety.sparking.a': 'Turn off the breaker to that outlet immediately and don\'t use it. Sparking outlets are a fire hazard and need immediate professional attention. Call us for emergency service.',
    
    'faq.safety.inspection.q': 'How often should I have my electrical system inspected?',
    'faq.safety.inspection.a': 'We recommend electrical inspections every 5-10 years for homes, or when buying/selling property. Commercial buildings should be inspected annually. Regular inspections help identify potential problems before they become dangerous.',

    // Quote Form
    'quote.title': 'Get Your Free Quote Today',
    'quote.subtitle': 'Tell us about your electrical project and we\'ll provide a detailed estimate',
    'quote.name': 'Full Name',
    'quote.email': 'Email Address',
    'quote.phone': 'Phone Number',
    'quote.service': 'Service Needed',
    'quote.select': 'Select a service',
    'quote.residential': 'Residential Electrical',
    'quote.commercial': 'Commercial Electrical',
    'quote.industrial': 'Industrial Electrical',
    'quote.panel': 'Panel Upgrade',
    'quote.ev': 'EV Charger Installation',
    'quote.smart': 'Smart Home System',
    'quote.emergency': 'Emergency Repair',
    'quote.other': 'Other',
    'quote.description': 'Project Description',
    'quote.placeholder': 'Please describe your electrical project in detail...',
    'quote.submit': 'Get Free Quote',

    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Don\'t just take our word for it - hear from our satisfied customers',
    'testimonials.more': 'Read More Reviews',

    // Footer
    'footer.company': 'LeoMax Électrique',
    'footer.tagline': 'Professional Electrical Services',
    'footer.description': 'Your trusted electrical contractor serving the Greater Montreal area with over 15 years of experience.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.residential': 'Residential Electrical',
    'footer.commercial': 'Commercial Systems',
    'footer.industrial': 'Industrial Wiring',
    'footer.panel': 'Panel Upgrades',
    'footer.ev': 'EV Charger Installation',
    'footer.smart': 'Smart Home Systems',
    'footer.contact': 'Contact Info',
    'footer.emergency': '24/7 Emergency Service',
    'footer.hours': 'Mon-Fri: 7AM-7PM',
    'footer.weekend': 'Sat: 8AM-5PM, Sun: Emergency Only',
    'footer.rights': 'All rights reserved.',
    'footer.license': 'RBQ License #5544-1234-01 | Fully Licensed & Insured',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Common
    'common.required': 'required',
    'common.phone': '(438) 876-0485',
    'common.email': 'info@leomaxelectrique.ca',
    'common.address': '8 Chemin Saint Stanislas',
    'common.city': 'Terrebonne, QC J7M 1Z5',
    
    // Performance
    'loading': 'Loading...',
    'error': 'Error'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};