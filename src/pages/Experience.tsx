import React from 'react';
import { Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Experience = () => {
  const { experiences, t } = useAppContext();

  return (
      <div className="max-w-4xl mx-auto pt-6 w-full pb-20 animate-page-enter">
        <div className="mb-12 border-b border-black/5 dark:border-white/10 pb-6 reveal-on-scroll delay-0">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4 tracking-tight"><Briefcase className="text-blue-500" size={32}/> {t.experience}</h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-medium">Rekam jejak karir dan kontribusi profesional saya di dunia teknologi.</p>
        </div>
        
        <div className="relative border-l-[3px] border-blue-200 dark:border-blue-900/50 ml-4 md:ml-8 space-y-12 pb-10">
          {experiences.map((exp: any, idx: number) => (
            <div key={exp.id} className={`relative pl-8 md:pl-12 reveal-on-scroll delay-${(idx % 4) * 100}`}>
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-[13.5px] top-1.5 ring-[6px] ring-slate-50 dark:ring-[#020617] shadow-sm"></div>
              <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] hover:-translate-y-2 hover:shadow-2xl hover:border-white/80 dark:hover:border-white/20 transition-all duration-500 group border border-white/60 dark:border-white/10">
                <span className="text-blue-600 dark:text-blue-400 text-[13px] font-bold bg-blue-50 dark:bg-blue-900/20 px-3.5 py-1.5 rounded-lg mb-4 inline-block shadow-sm border border-blue-100 dark:border-blue-800/30">{exp.period}</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors tracking-tight">{exp.role}</h3>
                <h4 className="text-[16px] font-bold text-gray-600 dark:text-gray-400 mb-5">{exp.company}</h4>
                <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{exp.desc}</p>
              </div>
            </div>
          ))}
          {experiences.length === 0 && <p className="text-gray-500 pl-8 font-medium">Belum ada data pengalaman.</p>}
        </div>
      </div>
  );
};
