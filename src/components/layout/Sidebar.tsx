import React, { useState, useEffect } from 'react';
import { Home, User, MessageSquare, Code, Palette, FileText, Briefcase, GraduationCap, Lightbulb, Link as LinkIcon, Download, Settings, Github, Linkedin, Twitter, Target } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { NavItem } from '../ui/NavItem';

export const Sidebar = () => {
  const {
    profile, isMobileMenuOpen, setIsMobileMenuOpen, currentPath, navigate,
    lang, setLang, t, theme, toggleTheme,
    secretClickCount, setSecretClickCount, requiredClicks, showToast
  } = useAppContext();

  const [localClickCount, setLocalClickCount] = useState(0);

  useEffect(() => {
    if (localClickCount > 0) {
      const timer = setTimeout(() => setLocalClickCount(0), 1500); 
      return () => clearTimeout(timer);
    }
  }, [localClickCount]);

  const handleSecretClick = () => {
    const newCount = localClickCount + 1;
    setLocalClickCount(newCount);
    if (newCount === requiredClicks) {
      navigate('/dashboard');
      setLocalClickCount(0);
      showToast('🔓 System config access granted');
    } else {
      showToast(`Auth sequence: ${newCount}/${requiredClicks}`);
    }
  };

  const handleDownloadCV = () => {
    if (profile.cvUrl) {
      const a = document.createElement('a');
      a.href = profile.cvUrl; a.target = "_blank"; a.download = "CV_Aditya.pdf";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      showToast('Exporting configuration (CV)...');
    } else { showToast('Profile asset not found in workspace.'); }
  };

  return (
    <aside className={`absolute lg:relative z-40 w-64 md:w-72 flex-none border-r border-gray-200 dark:border-[#30363d] bg-gray-50 dark:bg-[#090d13] flex flex-col h-full transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      
      {/* Workspace Header */}
      <div className="p-4 border-b border-gray-200 dark:border-[#30363d] flex items-center justify-between shrink-0 bg-white dark:bg-[#0d1117]">
        <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2">
           Workspace / 
           <span className="text-gray-700 dark:text-slate-300 lowercase px-1.5 py-0.5 bg-gray-100 dark:bg-[#21262d] rounded ml-1">app-src</span>
        </h3>
      </div>

      <div className="p-4 flex items-center gap-3 border-b border-gray-200/50 dark:border-[#30363d]/50 shrink-0 group cursor-default">
         <img src={profile.profileImage} alt="Profile" onClick={handleSecretClick} className="w-10 h-10 rounded object-cover cursor-pointer hover:opacity-80 transition-opacity" />
         <div className="overflow-hidden">
            <h2 className="text-[13px] font-bold text-gray-800 dark:text-slate-200 truncate">{profile.name}</h2>
            <p className="text-[11px] text-blue-600 dark:text-[#58a6ff] truncate tech-mono">{profile.role}</p>
         </div>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto custom-scrollbar text-sm font-sans flex flex-col">
        <div className="mb-4">
          <div className="px-4 py-1 mb-1 flex items-center text-gray-500 dark:text-slate-500 cursor-default">
            <span className="mr-1.5 text-[10px]">▼</span> <span className="text-[11px] font-bold uppercase tracking-widest">{t.main}</span>
          </div>
          <NavItem icon={Home} label={t.home} path="/home" onNavigate={navigate} isActive={currentPath === '/home'} />
          <NavItem icon={User} label={t.about} path="/about" onNavigate={navigate} isActive={currentPath === '/about'} />
          <NavItem icon={MessageSquare} label={t.contact} path="/contact" onNavigate={navigate} isActive={currentPath === '/contact'} />
        </div>

        <div className="mb-4">
          <div className="px-4 py-1 mb-1 flex items-center text-gray-500 dark:text-slate-500 cursor-default">
            <span className="mr-1.5 text-[10px]">▼</span> <span className="text-[11px] font-bold uppercase tracking-widest">{t.portfolio}</span>
          </div>
          <NavItem icon={Code} label={"src/technical"} path="/technical" onNavigate={navigate} isActive={currentPath.startsWith('/technical')} />
          <NavItem icon={Palette} label={"src/creative"} path="/creative" onNavigate={navigate} isActive={currentPath.startsWith('/creative')} />
          <NavItem icon={FileText} label={"docs/thoughts"} path="/thoughts" onNavigate={navigate} isActive={currentPath.startsWith('/thoughts')} />
        </div>

        <div className="mb-4">
          <div className="px-4 py-1 mb-1 flex items-center text-gray-500 dark:text-slate-500 cursor-default">
            <span className="mr-1.5 text-[10px]">▼</span> <span className="text-[11px] font-bold uppercase tracking-widest">{t.professional}</span>
          </div>
          <NavItem icon={Briefcase} label={"lib/experience"} path="/experience" onNavigate={navigate} isActive={currentPath === '/experience'} />
          <NavItem icon={GraduationCap} label={"lib/education"} path="/education" onNavigate={navigate} isActive={currentPath === '/education'} />
          <NavItem icon={Lightbulb} label={"config/skills"} path="/skills" onNavigate={navigate} isActive={currentPath === '/skills'} />
          <NavItem icon={LinkIcon} label={"config/links"} path="/links" onNavigate={navigate} isActive={currentPath === '/links'} />
        </div>
      </nav>

      {/* Explorer Footer controls */}
      <div className="border-t border-gray-200 dark:border-[#30363d] p-3 flex flex-col gap-2 shrink-0 bg-gray-50 dark:bg-[#090d13]">
        <div className="flex gap-2 w-full">
          <button onClick={toggleTheme} className="flex-1 py-1.5 bg-white dark:bg-[#21262d] hover:bg-gray-100 dark:hover:bg-[#30363d] text-gray-700 dark:text-slate-300 text-[12px] font-medium rounded border border-gray-200 dark:border-[#30363d] flex items-center justify-center transition-colors">
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          
          <div className="flex bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded text-[11px] font-medium p-0.5 flex-1">
            <button onClick={() => setLang('id')} className={`flex-1 py-1 text-center rounded-sm transition-colors ${lang === 'id' ? 'bg-gray-100 dark:bg-[#21262d] text-gray-800 dark:text-slate-200' : 'text-gray-500 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300'}`}>ID</button>
            <button onClick={() => setLang('en')} className={`flex-1 py-1 text-center rounded-sm transition-colors ${lang === 'en' ? 'bg-gray-100 dark:bg-[#21262d] text-gray-800 dark:text-slate-200' : 'text-gray-500 dark:text-slate-500 hover:text-gray-700 dark:hover:text-slate-300'}`}>EN</button>
          </div>
        </div>
        
        <button onClick={handleDownloadCV} className="w-full py-1.5 bg-white dark:bg-[#21262d] hover:bg-gray-100 dark:hover:bg-[#30363d] text-gray-700 dark:text-slate-300 text-[12px] font-medium rounded border border-gray-200 dark:border-[#30363d] flex items-center justify-center gap-2 transition-colors mt-1">
          <Download size={14} /> Export profile.pdf
        </button>
      </div>
    </aside>
  );
};
