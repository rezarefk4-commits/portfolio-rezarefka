import React from 'react';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Creative = () => {
  const { projects, t, navigate } = useAppContext();
  const filteredProjects = projects.filter((p: any) => p.type === 'creative');

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full animate-page-enter">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight reveal-on-scroll delay-0">{t.creativeTitle}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-12 text-[16px] font-medium reveal-on-scroll delay-100">{t.creativeSub}</p>
        
        <div className="flex flex-col gap-8 w-full max-w-full">
            {filteredProjects.map((proj: any, idx: number) => (
              <div key={proj.id} onClick={() => navigate(`/creative/${proj.id}`)} className={`glass-panel rounded-[2.5rem] overflow-hidden cursor-pointer group hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row w-full reveal-on-scroll border border-white/60 dark:border-white/10 hover:shadow-2xl hover:border-white/80 dark:hover:border-white/20 delay-${(idx % 4) * 100}`}>
                <div className="w-full md:w-[380px] h-64 md:h-auto shrink-0 overflow-hidden relative">
                  <img src={proj.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 absolute inset-0" alt={proj.title} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="bg-white/95 text-gray-900 text-xs font-bold px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0">
                      Lihat Galeri Karya <ChevronRight size={14}/>
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1 min-w-0 flex flex-col w-full">
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1.5 rounded-lg text-[11px] font-bold shadow-sm border border-blue-200 dark:border-blue-800/30 uppercase tracking-wider">{proj.category || 'Creative'}</span>
                    {(proj.tech || []).slice(0,3).map((techItem: string, i: number) => <span key={i} className="glass-panel text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-[11px] font-bold border border-white/60 dark:border-white/10 shadow-sm">{techItem}</span>)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors line-clamp-2 tracking-tight leading-snug">{proj.title}</h3>
                  <p className="text-[15px] font-bold text-gray-600 dark:text-gray-400 mb-5">{proj.client}</p>
                  <div className="flex flex-wrap items-center gap-5 text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-6">
                    {proj.date && <div className="flex items-center gap-2"><Calendar size={16} className="text-blue-500"/> {proj.date}</div>}
                    {proj.location && <div className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> {proj.location}</div>}
                  </div>
                  <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3 font-medium">{proj.overview || proj.shortDesc}</p>
                  <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <p className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t.organizedBy} <span className="text-gray-800 dark:text-gray-200">{proj.organizer || proj.client}</span></p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {filteredProjects.length === 0 && <div className="py-16 text-center text-gray-500 dark:text-gray-400 w-full font-medium">{t.noProjects}</div>}
      </div>
  );
};
