import React from 'react';
import { useAppContext } from '../context/AppContext';

export const Skills = () => {
  const { skills, t } = useAppContext();

  return (
      <div className="max-w-5xl mx-auto pt-6 w-full pb-20 animate-page-enter">
        <div className="mb-12 border-b border-black/5 dark:border-white/10 pb-6 reveal-on-scroll delay-0">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">{t.mySkills}</h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400 font-medium">{t.mySkillsDesc}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 w-full">
          {skills.map((skill: any, i: number) => (
            <div key={skill.id} className={`glass-panel p-6 sm:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center gap-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full reveal-on-scroll border border-white/60 dark:border-white/10 delay-${(i % 8) * 100}`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-white/60 dark:border-white/5">
                <img src={skill.img} alt={skill.name} className={`w-full h-full object-contain ${skill.invert ? 'dark:invert' : ''}`} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-[15px]">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
  );
};
