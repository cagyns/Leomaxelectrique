# LeoMax Électrique Website - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Installation Instructions](#installation-instructions)
4. [Configuration Files](#configuration-files)
5. [Source Code](#source-code)
6. [Features](#features)
7. [Deployment](#deployment)

---

## Project Overview

**Website:** LeoMax Électrique Inc.
**URL:** https://preeminent-fenglisu-293d02.netlify.app
**Technology:** React + TypeScript + Tailwind CSS
**Purpose:** Professional electrical contractor website for Greater Montreal area

### Key Features
- ✅ Bilingual (French/English)
- ✅ Mobile-responsive design
- ✅ Professional electrical services showcase
- ✅ Contact forms and quote requests
- ✅ Customer testimonials
- ✅ SEO optimized
- ✅ Emergency contact integration

---

## Project Structure

```
leomaxelectrique/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageToggle.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Testimonials.tsx
│   │   └── FAQ.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## Installation Instructions

### Step 1: Create New Project
```bash
npm create vite@latest leomaxelectrique -- --template react-ts
cd leomaxelectrique
```

### Step 2: Install Dependencies
```bash
npm install
npm install react-router-dom lucide-react @types/react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Replace Configuration Files
Replace the generated files with the configuration provided below.

### Step 4: Add Source Code
Copy all the source code files provided in this documentation.

### Step 5: Run Development Server
```bash
npm run dev
```

### Step 6: Build for Production
```bash
npm run build
```

---

## Configuration Files

### package.json
```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@types/react-router-dom": "^5.3.3",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.6.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      }
    },
  },
  plugins: [],
};
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LeoMax Électrique Inc. - Professional Electrical Contractor in Terrebonne, QC</title>
    <meta name="description" content="Professional electrical services in Greater Montreal area. Licensed RBQ electrician serving Terrebonne, Laval, Montreal. Residential, commercial, industrial electrical work. Call (438) 876-0485 for free quote." />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Source Code

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### src/main.tsx
```typescript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### src/App.tsx
```typescript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
```

---

## Features

### Bilingual Support
- Complete French and English translations
- Language toggle in header
- Context-based language management
- SEO optimized for both languages

### Responsive Design
- Mobile-first approach
- Tailwind CSS utility classes
- Responsive grid layouts
- Touch-friendly navigation

### Professional Pages
1. **Home Page**
   - Hero section with call-to-action
   - Services overview
   - Quote request form
   - Customer testimonials preview

2. **Services Page**
   - Detailed electrical services
   - Residential, commercial, industrial
   - EV charger installation
   - Smart home systems

3. **About Page**
   - Company story and history
   - Team member profiles
   - Certifications and licenses
   - Why choose us section

4. **Contact Page**
   - Contact information
   - Quote request form
   - Google Maps integration
   - Service areas

5. **Testimonials Page**
   - Customer reviews in French
   - Star ratings
   - Service categories
   - Review statistics

6. **FAQ Page**
   - Common questions and answers
   - Safety tips
   - Emergency contact information

### Technical Features
- TypeScript for type safety
- React Router for navigation
- Lucide React for icons
- Tailwind CSS for styling
- Vite for fast development
- ESLint for code quality

---

## Deployment

### Live Website
**URL:** https://preeminent-fenglisu-293d02.netlify.app

### Netlify Claim URL
To transfer the Netlify project to your own account:
https://app.netlify.com/claim?utm_source=bolt#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiI1aDZmZEstVktNTXZuRjNiRlZUaktfU2JKVGgzNlNfMjJheTlpTHhVX0Q4Iiwic2Vzc2lvbl9pZCI6IjUxNzUyMjczOjU5NTAzNDMiLCJpYXQiOjE3NTE4NTE0OTN9.7DQUJTjzAhZUF81fjI-JivejHnqoZfuACyJ_xMoPclQ

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Hosting Options
- Netlify (current)
- Vercel
- GitHub Pages
- Traditional web hosting

---

## Contact Information

**Business:** LeoMax Électrique Inc.
**Phone:** (438) 876-0485
**Email:** nkapluc@ymail.com
**Address:** 8 Chemin Saint Stanislas, Terrebonne, QC J7M 1Z5
**License:** RBQ #5544-1234-01

**Service Areas:**
- Rives Sud de Montréal
- Laval
- Montreal
- Laurentides
- Terrebonne and surrounding areas

---

## Support

For technical support or modifications to the website, refer to this documentation or contact the development team.

**Last Updated:** January 2025
**Version:** 1.0.0