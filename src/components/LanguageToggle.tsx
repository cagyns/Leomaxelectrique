import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'bg-white text-teal-600'
            : 'text-white hover:text-yellow-300'
        }`}
      >
        FR
      </button>
      <span className="text-white">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-white text-teal-600'
            : 'text-white hover:text-yellow-300'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;