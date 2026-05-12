import React from 'react';
import { ArrowLeft, User, Calendar, CheckCircle, Target, Lightbulb, ExternalLink, Github } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { DetailCard } from '../components/ui/DetailCard';

export const TechnicalDetail = () => {
  const { currentPath, projects, navigate, t } = useAppContext();
  
  const id = currentPath.split('/')[2];
  const category = currentPath.split('/')[1];
  const proj = projects.find((p: any) => p.id === id);
  
  if (!proj) return <div className="max-w-5xl mx-auto pt-20 text-center animate-page-enter"><h2 className="text-2xl font-bold text-gray-500">Karya tidak ditemukan.</h2><button onClick={() => navigate(`/${category}`)} className="mt-4 text-blue-500 hover:underline font-bold">Kembali</button></div>;

  return (
        <div className="max-w-5xl mx-auto pt-6 w-full animate-page-enter">
          <button onClick={() => navigate(`/${category}`)} className="mb-8 flex items-center gap-2 px-5 py-2.5 glass-panel rounded-xl text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-white dark:hover:bg-slate-800 transition-colors w-fit reveal-on-scroll delay-0 shadow-sm hover:scale-105 active:scale-95">
            <ArrowLeft size={16} /> {t.backToProjects}
          </button>
          
          <div className="mb-12 w-full reveal-on-scroll delay-100">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-blue-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-sm">{proj.category || 'Web Application'}</span>
              <span className="glass-panel text-gray-700 dark:text-gray-300 px-3.5 py-1.5 rounded-lg text-xs font-bold border-white/60 dark:border-white/10">{proj.status || 'Production'}</span>
              <span className="glass-panel text-gray-700 dark:text-gray-300 px-3.5 py-1.5 rounded-lg text-xs font-bold border-white/60 dark:border-white/10">{proj.year || '2024'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter leading-tight">{proj.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bold mb-8 tracking-tight">{proj.subtitle || proj.shortDesc}</p>
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-[15px] text-gray-500 dark:text-gray-400 font-semibold border-b border-black/5 dark:border-white/10 pb-8">
              <div className="flex items-center gap-2.5"><User size={18} className="text-blue-500" /> {proj.role || 'Full-Stack Developer'}</div>
              <div className="flex items-center gap-2.5"><Calendar size={18} className="text-blue-500" /> {proj.year || '2024'}</div>
              <div className="flex items-center gap-2.5"><CheckCircle size={18} className="text-blue-500" /> {t.notAvailable}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-start">
            <div className="md:col-span-2 w-full flex flex-col gap-2">
              <DetailCard title={t.overview} content={proj.overview || t.notAvailable} delay="200" t={t} />
              <DetailCard title={t.projectGoals} content={proj.goals || t.notAvailable} icon={Target} delay="300" t={t} />
              <DetailCard title={t.keyFeatures} content={proj.features || t.notAvailable} delay="400" t={t} />
              <DetailCard title={t.challenges} content={proj.challenges || t.notAvailable} icon={Lightbulb} delay="500" t={t} />
              <DetailCard title={t.outcomes} content={proj.outcomes || t.notAvailable} delay="600" t={t} />
              <DetailCard title={t.techUsed} delay="700" t={t}>
                 {proj.techGrouped ? (
                    <div className="space-y-5">
                      {Object.entries(proj.techGrouped).map(([group, items]: any) => (
                        <div key={group}>
                          <h4 className="text-[14px] font-bold text-gray-900 dark:text-white mb-2">{group}:</h4>
                          <div className="flex flex-wrap gap-2">
                            {items.map((item: string, i: number) => <span key={i} className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm rounded-xl text-[13px] font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 transition-colors">{item}</span>)}
                          </div>
                        </div>
                      ))}
                    </div>
                 ) : (
                    <div className="flex flex-wrap gap-2">
                      {(proj.tech || []).map((techItem: string, i: number) => <span key={i} className="px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm rounded-xl text-[13px] font-bold text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-slate-700 transition-colors">{techItem}</span>)}
                    </div>
                 )}
              </DetailCard>
            </div>

            <div className="md:col-span-1 w-full flex flex-col gap-2">
              <DetailCard title={t.projectInfo} delay="300" t={t}>
                <div className="space-y-4 text-[14.5px]">
                  <div><p className="text-gray-500 dark:text-gray-400 mb-1 font-bold text-[12px] uppercase tracking-wider">{t.client}</p><p className="font-bold text-gray-900 dark:text-white">{proj.client || t.notAvailable}</p></div>
                  <div><p className="text-gray-500 dark:text-gray-400 mb-1 font-bold text-[12px] uppercase tracking-wider">{t.duration}</p><p className="font-bold text-gray-900 dark:text-white">{proj.duration || t.notAvailable}</p></div>
                  <div><p className="text-gray-500 dark:text-gray-400 mb-1 font-bold text-[12px] uppercase tracking-wider">{t.year}</p><p className="font-bold text-gray-900 dark:text-white">{proj.year || '2024'}</p></div>
                  <div><p className="text-gray-500 dark:text-gray-400 mb-1 font-bold text-[12px] uppercase tracking-wider">{t.role}</p><p className="font-bold text-gray-900 dark:text-white">{proj.role || 'Full-Stack Developer'}</p></div>
                  <div><p className="text-gray-500 dark:text-gray-400 mb-2 font-bold text-[12px] uppercase tracking-wider">{t.status}</p><span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-200 dark:border-blue-800/30">{proj.status || 'Production'}</span></div>
                </div>
              </DetailCard>
              <DetailCard title={t.projectLinks} delay="400" t={t}>
                <div className="flex flex-col gap-3">
                  <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95"><ExternalLink size={18}/> {t.viewLive}</button>
                  <button className="w-full py-3.5 glass-panel hover:bg-white/80 dark:hover:bg-slate-800/80 rounded-xl text-gray-800 dark:text-white text-sm font-bold flex justify-center items-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95"><Github size={18}/> {t.sourceCode}</button>
                </div>
              </DetailCard>
              <DetailCard title={t.tags} delay="500" t={t}>
                <div className="flex flex-wrap gap-2">
                  {(proj.tech || []).map((techItem: string, i: number) => <span key={i} className="px-3 py-1.5 glass-panel border border-white/60 dark:border-white/10 shadow-sm rounded-lg text-[11px] font-bold text-gray-700 dark:text-gray-300">{techItem}</span>)}
                </div>
              </DetailCard>
            </div>
          </div>
          <div className="mt-12 text-center border-t border-black/5 dark:border-white/10 pt-10 reveal-on-scroll delay-0">
            <button onClick={() => navigate(`/${category}`)} className="px-8 py-3.5 glass-panel rounded-xl text-gray-700 dark:text-gray-300 text-sm font-bold shadow-sm hover:bg-white dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">{t.viewAllPortfolio}</button>
          </div>
        </div>
  );
};
