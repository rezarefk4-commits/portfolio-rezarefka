import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Links = () => {
  const { profile, links, t } = useAppContext();

  return (
      <div className="max-w-2xl mx-auto pt-12 w-full pb-20 animate-page-enter">
        <div className="flex flex-col items-center mb-12 text-center w-full reveal-on-scroll delay-0">
           <div className="relative mb-5">
             <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
             <img src={profile.profileImage} alt="Profile" className="w-28 h-28 rounded-full border-[6px] border-white/60 dark:border-slate-700 shadow-2xl object-cover relative z-10" />
           </div>
           <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{profile.name}</h1>
           <p className="text-gray-500 dark:text-gray-400 mt-2 font-bold uppercase tracking-widest text-[11px]">{t.linkDesc}</p>
        </div>
        <div className="space-y-5 w-full">
          {links.map((link: any, idx: number) => (
            <a key={link.id} href={link.url} className={`block w-full p-6 glass-panel rounded-[2rem] text-left hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group flex justify-between items-center reveal-on-scroll shadow-md hover:shadow-2xl border border-white/60 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-700/50 delay-${(idx % 5) * 100}`}>
              <div>
                <h3 className="font-black text-gray-900 dark:text-white text-[16px] md:text-[18px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{link.label}</h3>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-1.5 font-bold">{link.desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-all shadow-sm">
                 <ExternalLink size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
  );
};
