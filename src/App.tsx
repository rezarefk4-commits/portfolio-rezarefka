import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Layout } from './components/layout/Layout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Technical } from './pages/Technical';
import { TechnicalDetail } from './pages/TechnicalDetail';
import { Creative } from './pages/Creative';
import { CreativeDetail } from './pages/CreativeDetail';
import { Thoughts } from './pages/Thoughts';
import { ThoughtDetail } from './pages/ThoughtDetail';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import { Links } from './pages/Links';
import { Dashboard } from './pages/Dashboard';

const Router = () => {
  const { currentPath } = useAppContext();

  if (currentPath === '/home' || currentPath === '/') return <Home />;
  if (currentPath === '/about') return <About />;
  if (currentPath === '/contact') return <Contact />;
  
  if (currentPath === '/technical') return <Technical />;
  if (currentPath.startsWith('/technical/')) return <TechnicalDetail />;
  
  if (currentPath === '/creative') return <Creative />;
  if (currentPath.startsWith('/creative/')) return <CreativeDetail />;
  
  if (currentPath === '/thoughts') return <Thoughts />;
  if (currentPath.startsWith('/thoughts/')) return <ThoughtDetail />;
  
  if (currentPath === '/experience') return <Experience />;
  if (currentPath === '/education') return <Education />;
  if (currentPath === '/skills') return <Skills />;
  if (currentPath === '/links') return <Links />;
  
  if (currentPath === '/dashboard') return <Dashboard />;

  return <Home />;
};

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <Router />
      </Layout>
    </AppProvider>
  );
}
