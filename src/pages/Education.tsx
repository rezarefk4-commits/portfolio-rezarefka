import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const Education = () => {
  const { educations, t } = useAppContext();

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full pb-20 animate-page-enter">
        <div className="mb-12 border-b border-black/5 dark:border-white/10 pb-6 reveal-on-scroll delay-0">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center gap-4 tracking-tight"><GraduationCap className="text-blue-500" size={32}/> {t.education}</h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-medium">Latar belakang pendidikan dan program sertifikasi yang pernah saya ikuti.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {educations.map((edu: any, idx: number) => (
             <div key={edu.id} className={`glass-panel p-8 md:p-10 rounded-[3rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/80 dark:hover:border-white/20 group border border-white/60 dark:border-white/10 reveal-on-scroll delay-${(idx % 4) * 100}`}>
                <div className="w-16 h-16 bg-white/60 dark:bg-slate-800/60 text-blue-600 dark:text-blue-400 rounded-[1.2rem] flex items-center justify-center mb-6 shadow-sm border border-white/50 dark:border-white/10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"><GraduationCap size={32}/></div>
                <span className="text-[12px] font-bold text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-black/20 px-3.5 py-1.5 rounded-lg mb-4 inline-block border border-white/60 dark:border-white/10 shadow-sm">{edu.period}</span>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors leading-snug tracking-tight">{edu.degree}</h3>
                <h4 className="text-[16px] font-bold text-gray-600 dark:text-gray-400 mb-5">{edu.institution}</h4>
                <p className="text-[14.5px] text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{edu.desc}</p>
             </div>
          ))}
          {educations.length === 0 && <p className="text-gray-500 text-center w-full col-span-2 py-10 font-medium">Belum ada data pendidikan.</p>}
        </div>
      </div>
  );
};
