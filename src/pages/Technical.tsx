import React from 'react';
import { useAppContext } from '../context/AppContext';

export const Technical = () => {
  const { projects, t, navigate } = useAppContext();
  const filteredProjects = projects.filter((p: any) => p.type === 'technical');

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full animate-page-enter">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight reveal-on-scroll delay-0">{t.technicalTitle}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-[16px] font-medium reveal-on-scroll delay-100">{t.portfolioSub}</p>
        
        <div className="glass-panel p-8 md:p-12 rounded-[3rem] w-full relative reveal-on-scroll delay-200">
          <div className="text-center mb-12 max-w-2xl mx-auto reveal-on-scroll delay-300">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">{t.featuredProjects}</h2>
            <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{t.featuredProjectsDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {filteredProjects.map((proj: any, idx: number) => (
                <div key={proj.id} onClick={() => navigate(`/technical/${proj.id}`)} className={`glass-panel rounded-[2.5rem] overflow-hidden cursor-pointer group hover:-translate-y-2 transition-all duration-500 flex flex-col border border-white/60 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-white/80 dark:hover:border-white/20 w-full reveal-on-scroll delay-${(idx % 4) * 100}`}>
                  <div className="w-full h-56 overflow-hidden relative">
                     <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col w-full">
                    <div className="flex justify-between items-start w-full mb-4">
                      <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors tracking-tight">{proj.title}</h3>
                      {proj.featured && <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black px-3 py-1.5 rounded-full border border-orange-200 dark:border-orange-800/30 shadow-sm uppercase tracking-wider">{t.featured}</span>}
                    </div>
                    <p className="text-[14.5px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 line-clamp-2 font-medium">{proj.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {(proj.tech || []).slice(0, 4).map((techItem: string, i: number) => <span key={i} className="text-[11px] font-bold bg-white/60 dark:bg-slate-700/60 border border-white/50 dark:border-white/5 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg shadow-sm">{techItem}</span>)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {filteredProjects.length === 0 && <div className="py-16 text-center text-gray-500 dark:text-gray-400 w-full font-medium">{t.noProjects}</div>}
        </div>
      </div>
  );
};
