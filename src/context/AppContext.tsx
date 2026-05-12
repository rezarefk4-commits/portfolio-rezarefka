import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initialProfile, initialServices, initialProjects, initialBlogs, initialSkills, initialLinks, initialExperiences, initialEducations } from '../data/mockData';
import { translations } from '../data/translations';

interface AppContextType {
  theme: string;
  toggleTheme: () => void;
  lang: string;
  setLang: (lang: string) => void;
  t: any;
  currentPath: string;
  navigate: (path: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  showToast: (msg: string) => void;
  toastMessage: string | null;

  profile: any; setProfile: any;
  services: any[]; setServices: any;
  projects: any[]; setProjects: any;
  blogs: any[]; setBlogs: any;
  skills: any[]; setSkills: any;
  links: any[]; setLinks: any;
  experiences: any[]; setExperiences: any;
  educations: any[]; setEducations: any;

  isAuthenticated: boolean; setIsAuthenticated: any;
  adminPassword: string; setAdminPassword: any;
  requiredClicks: number; setRequiredClicks: any;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('id'); 
  const [currentPath, setCurrentPath] = useState('/home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [profile, setProfile] = useState(initialProfile);
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const [blogs, setBlogs] = useState(initialBlogs);
  const [skills, setSkills] = useState(initialSkills);
  const [links, setLinks] = useState(initialLinks);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [educations, setEducations] = useState(initialEducations);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('admin123');
  const [requiredClicks, setRequiredClicks] = useState(5);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'dark') { document.documentElement.classList.add('dark'); } 
    else { document.documentElement.classList.remove('dark'); }
  }, [theme]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  
  const navigate = (path: string) => {
    setCurrentPath(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => setToastMessage(message);

  const t = translations[lang] || translations['id'];

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, lang, setLang, t,
      currentPath, navigate, isMobileMenuOpen, setIsMobileMenuOpen,
      showToast, toastMessage,
      profile, setProfile, services, setServices, projects, setProjects,
      blogs, setBlogs, skills, setSkills, links, setLinks, experiences, setExperiences,
      educations, setEducations,
      isAuthenticated, setIsAuthenticated,
      adminPassword, setAdminPassword, requiredClicks, setRequiredClicks
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
